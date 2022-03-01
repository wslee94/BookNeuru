import mysql from "mysql2/promise";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.BN_DB_HOST,
  user: process.env.BN_DB_USER,
  password: process.env.BN_DB_PW,
  database: process.env.BN_DB_DB,
  charset: "utf8",
  multipleStatements: false,
  timezone: "UTC",
});

const connect = (func: any) => async () => {
  const conn = await pool.getConnection();
  try {
    const result = await func(conn);
    conn.release();
    return result;
  } catch (error) {
    conn.release();
    throw error;
  }
};

export const sqlConn = (func: any) => connect(func)();

export const execQuery = async (conn: mysql.PoolConnection, sql: string) => {
  // 쿼리 실행 전 실행해야할 쿼리가 있다면 여기 작성
  return conn.query(sql);
};
