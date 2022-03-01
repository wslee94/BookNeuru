import express from "express";
import mysql from "mysql2/promise";
import { apiWithNoToken, apiWithToken } from "library/api";

const login = apiWithNoToken((conn: mysql.PoolConnection, param: any) => {
  return "로그인 API 실행!!";
});

export default express.Router().post("/login", login);
