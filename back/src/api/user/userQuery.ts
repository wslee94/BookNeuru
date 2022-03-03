import { execQuery } from "library/sql";
import mysql from "mysql2/promise";
import { createSalt, createHashedPassword } from "library/util";
import sqlString from "sqlstring";

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

const qSelectUser = (userID: number) => `
SELECT  UserID AS userID,
        Email AS email,
        Name AS name,
        Gender AS gender,
        ProfileImageURL AS profileImageURL
FROM    Auth.User
WHERE   UserID = ${userID}
`;

export const insertUser = async (conn: mysql.PoolConnection, param: any) => {
  const { email, password, name, gender, profileImageURL } = param;
  try {
    const passwordSalt = await createSalt();
    const hashedPassword = await createHashedPassword(password, passwordSalt);

    await conn.beginTransaction();

    await execQuery(conn, qInsertUser(email, name, gender, profileImageURL));
    await execQuery(conn, qInsertPassword(sqlString.escape(hashedPassword), sqlString.escape(passwordSalt)));

    await conn.commit();
  } catch (error) {
    conn.rollback();
    throw error;
  }
};

export const selectUser = async (conn: mysql.PoolConnection, param: any) => {
  const { userID } = param;
  const [result] = await execQuery(conn, qSelectUser(userID));
  return result;
};
