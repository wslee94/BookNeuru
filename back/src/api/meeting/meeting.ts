import express from "express";
import mysql from "mysql2/promise";
import { apiWithToken } from "library/api";
import * as meetingQuery from "./meetingQuery";

const insertMeeting = apiWithToken(async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const result = await meetingQuery.insertMeeting(conn, param, userInfo);
  return result;
});

export default express.Router().post("", insertMeeting);
