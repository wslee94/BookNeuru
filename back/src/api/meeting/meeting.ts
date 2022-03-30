import express from "express";
import mysql from "mysql2/promise";
import { apiWithToken } from "library/api";
import * as meetingQuery from "./meetingQuery";

const insertMeeting = apiWithToken(async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const result = await meetingQuery.insertMeeting(conn, param, userInfo);
  return result;
});

const updateMeeting = apiWithToken(async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const result = await meetingQuery.updateMeeting(conn, param, userInfo);
  return result;
});

const selectMeetings = apiWithToken(async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const result = await meetingQuery.selectMeetings(conn, param, userInfo);
  return result;
});

const selectMeeting = apiWithToken(async (conn: mysql.PoolConnection, param: any) => {
  const result = await meetingQuery.selectMeeting(conn, param);
  return result;
});

const upsertMeetingInvitation = apiWithToken(async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const result = await meetingQuery.upsertMeetingInvitation(conn, param, userInfo);
  return result;
});

export default express
  .Router()
  .post("", insertMeeting)
  .put("/:id", updateMeeting)
  .get("", selectMeetings)
  .get("/:id", selectMeeting)
  .post("/:id/invitation", upsertMeetingInvitation);
