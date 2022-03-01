import { execQuery } from "library/sql";
import mysql from "mysql2/promise";

const qSelectUser = (userID: number) => `
SELECT  UserID AS userID,
        Email AS email,
        Name AS name,
        Gender AS gender,
        ProfileImageURL AS profileImageURL
FROM    Auth.User
WHERE   UserID = ${userID}
`;

export const selectUser = async (conn: mysql.PoolConnection, param: any) => {
  const { userID } = param;
  const [result] = await execQuery(conn, qSelectUser(userID));
  return result;
};
