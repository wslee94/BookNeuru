import express from "express";
import mysql from "mysql2/promise";
import { apiWithNoToken, apiWithToken } from "library/api";
import * as userQuery from "./userQuery";

const signup = apiWithNoToken(async (conn: mysql.PoolConnection, param: any) => {
  const result = await userQuery.selectUser(conn, { userID: 1 });
  return result;
});

export default express.Router().post("", signup);
