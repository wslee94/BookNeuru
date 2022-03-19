import express, { Request, Response } from "express";
import mysql from "mysql2/promise";
import { apiWithNoToken, apiWithToken } from "library/api";
import * as userQuery from "./userQuery";

const signup = apiWithNoToken(async (conn: mysql.PoolConnection, param: any) => {
  const result = await userQuery.insertUser(conn, param);
  return result;
});

const login = apiWithNoToken(async (conn: mysql.PoolConnection, param: any, http: { req: Request; res: Response }) => {
  const result = await userQuery.login(conn, param, http);
  return result;
});

const loginWithToken = apiWithToken(
  async (conn: mysql.PoolConnection, param: any, userInfo: any, http: { req: Request; res: Response }) => {
    const result = await userQuery.loginWithToken(conn, param, userInfo, http);
    return result;
  },
);

const logout = apiWithNoToken(async (conn: mysql.PoolConnection, param: any, http: { req: Request; res: Response }) => {
  const result = await userQuery.logout(conn, param, http);
  return result;
});

export default express
  .Router()
  .post("", signup)
  .post("/login", login)
  .post("/login-token", loginWithToken)
  .post("/logout", logout);
