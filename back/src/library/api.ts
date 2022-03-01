import mysql from "mysql2/promise";
import sqlString from "sqlstring";
import { Request, Response } from "express";
import { sqlConn } from "library/sql";
import logger from "library/logger";

const checkToken = () => {
  return { token: {}, user: { email: "", userID: "" } };
};

const escapeParam = (param: any) => {
  let clone = JSON.parse(JSON.stringify(param));

  const type = typeof clone;
  const isNull = typeof clone === "undefined" || clone === null;
  const isObject = type === "object";
  const isArray = Array.isArray(clone);
  const isString = type === "string";

  if (isNull) return clone;
  if (isArray) clone = clone.map((n: any) => escapeParam(n));
  else if (isString) clone = sqlString.escape(clone);
  else if (isObject && !isArray) {
    const keys = Object.keys(clone);
    keys.forEach((key: string) => {
      clone[key] = escapeParam(clone[key]);
    });
  }
  return clone;
};

export const apiWithToken = (func: any) => async (req: Request, res: Response) => {
  try {
    // 토큰 체크 로직
    const token = checkToken();

    // 토큰 유효한 경우
    const params = escapeParam(req.body);
    params.original = req.body;
    params.token = token.token;

    // null = db connection 생성 후 전달 예정
    const result = await sqlConn(async (conn: mysql.PoolConnection) => func(conn, params, token.user));

    res.json(result);
  } catch (error: any) {
    logger.error(error.message);
    throw error;
  }
};

export const apiWithNoToken = (func: any) => async (req: Request, res: Response) => {
  try {
    const params = escapeParam(req.body);
    params.original = req.body;

    const result = await sqlConn(async (conn: mysql.PoolConnection) => func(conn, params));

    res.json(result);
  } catch (error: any) {
    logger.error(error.message);
    throw error;
  }
};
