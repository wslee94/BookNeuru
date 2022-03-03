import mysql from "mysql2/promise";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.BN_DB_HOST,
  user: process.env.BN_DB_USER,
  password: process.env.BN_DB_PW,
  database: process.env.BN_DB_DB,
  charset: "utf8",
  multipleStatements: false,
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
  // not null 컬럼 default data가 설정되어있지 않으면 insert error 발생해서 아래 설정 추가
  await conn.query("set session sql_mode = 'NO_ENGINE_SUBSTITUTION';");

  return conn.query(sql);
};
