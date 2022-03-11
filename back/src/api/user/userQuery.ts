import { execQuery } from "library/sql";
import mysql from "mysql2/promise";
import sqlString from "sqlstring";
import Response from "library/response";
import { createSalt, createHashedPassword } from "library/util";
import { generateToken } from "library/token";

const qInsertUser = (email: string, name: string, gender: string, profileImageURL: string) => `
INSERT INTO Auth.User
(
  Email,
  Name,
  Gender,
  ProfileImageURL,
  CreateDate,
  UpdateDate
)
VALUES
(
  ${email},
  ${name},
  ${gender},
  ${profileImageURL},
  NOW(),
  NOW()
);
`;

const qInsertPassword = (password: string, passwordSalt: string) => `
INSERT INTO Auth.UserPassword
(
  UserID,
  Password,
  PasswordSalt,
  CreateDate,
  UpdateDate
)
VALUES
(
  LAST_INSERT_ID(),
  ${password},
  ${passwordSalt},
  NOW(),
  NOW()
);
`;

const qSelectUser = (email: string) => `
SELECT  UserID AS userID,
        Email AS email,
        Name AS name,
        Gender AS gender,
        ProfileImageURL AS profileImageURL
FROM    Auth.User U
WHERE   Email = ${email}
`;

const qSelectPasswordSalt = (userID: number) => `
SELECT  PasswordSalt AS passwordSalt
FROM    Auth.UserPassword
WHERE   UserID = ${userID};
`;

const qIsValidPassword = (userID: number, password: string) => `
SELECT EXISTS (SELECT UserID FROM Auth.UserPassword WHERE UserID = ${userID} AND Password = ${password}) AS isValid;
`;

const qIsExistUserEmail = (email: string) => `
SELECT EXISTS (SELECT UserID FROM Auth.User WHERE Email = ${email}) AS isExist;
`;

export const insertUser = async (conn: mysql.PoolConnection, param: any) => {
  const { email, password, name, gender, profileImageURL } = param;
  try {
    const [isExistResult]: any = await execQuery(conn, qIsExistUserEmail(email));
    const { isExist } = isExistResult[0];
    if (isExist) {
      return new Response("FAIL", { email: param.original.email }, "이미 등록된 이메일입니다. 다시 입력해 주세요.");
    }
    const passwordSalt = await createSalt();
    const hashedPassword = await createHashedPassword(password, passwordSalt);

    await conn.beginTransaction();

    await execQuery(conn, qInsertUser(email, name, gender, profileImageURL));
    await execQuery(conn, qInsertPassword(sqlString.escape(hashedPassword), sqlString.escape(passwordSalt)));

    await conn.commit();

    return new Response("SUCCESS", null, "");
  } catch (error) {
    conn.rollback();
    throw error;
  }
};

export const login = async (conn: mysql.PoolConnection, param: any) => {
  const { email, password } = param;
  const [userInfo]: any = await execQuery(conn, qSelectUser(email));

  if (!userInfo[0]) {
    return new Response(
      "FAIL",
      { email: param.original.email },
      "로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.",
    );
  }

  const { userID, name } = userInfo[0];
  const [passwordSaltInfo]: any = await execQuery(conn, qSelectPasswordSalt(userID));
  const { passwordSalt } = passwordSaltInfo[0];
  const hashedPassword = await createHashedPassword(password, passwordSalt);
  const [passwordInfo]: any = await execQuery(conn, qIsValidPassword(userID, sqlString.escape(hashedPassword)));
  const { isValid } = passwordInfo[0];

  if (!isValid) {
    return new Response(
      "FAIL",
      { email: param.original.email },
      "로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.",
    );
  }

  const token = generateToken({ userID, email: param.original.email, name });

  return new Response("SUCCESS", { ...userInfo[0], token }, "");
};
