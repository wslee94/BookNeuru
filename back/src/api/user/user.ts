import express from "express";
import mysql from "mysql2/promise";
import { apiWithNoToken } from "library/api";
import * as userQuery from "./userQuery";

const signup = apiWithNoToken(async (conn: mysql.PoolConnection, param: any) => {
  const result = await userQuery.insertUser(conn, param);

  // insert하기 전 동일 email 체크하기
  // 동일 이메일이 있으면 status FAIL 처리
  // return 되는 data 형식 정의 e.g. { status: 'ERROR' | 'FAILE' | 'SUCCESS', data: {...}, message: '~~~'" }

  return result;
});

export default express.Router().post("", signup);
