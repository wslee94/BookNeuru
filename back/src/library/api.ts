import mysql from "mysql2/promise";
import sqlString from "sqlstring";
import { Request, Response, NextFunction } from "express";
import { sqlConn } from "library/sql";
import { checkToken, getToken } from "./token";

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

export const apiWithToken = (func: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await sqlConn(async (conn: mysql.PoolConnection) => {
      const { accessToken, refreshToken } = getToken(req);
      const token = await checkToken({ accessToken, refreshToken, conn, res });

      if (token.status === "SUCCESS") {
        const params = escapeParam(req.body);
        params.original = req.body;
        const result = await func(conn, params, token.userInfo, { req, res });
        res.json(result);
      } else {
        res.status(401).send("토큰 정보가 유효하지 않습니다. 다시 로그인해 주세요.");
      }
    });
  } catch (error: any) {
    next(error);
  }
};

export const apiWithNoToken = (func: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const params = escapeParam(req.body);
    params.original = req.body;

    const result = await sqlConn(async (conn: mysql.PoolConnection) => func(conn, params, { req, res }));
    res.json(result);
  } catch (error: any) {
    next(error);
  }
};
