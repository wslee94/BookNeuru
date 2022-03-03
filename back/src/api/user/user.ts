import express from "express";
import mysql from "mysql2/promise";
import { apiWithNoToken } from "library/api";
import * as userQuery from "./userQuery";

const signup = apiWithNoToken(async (conn: mysql.PoolConnection, param: any) => {
  const result = await userQuery.insertUser(conn, param);
  return result;
});

export default express.Router().post("", signup);
