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
        const escapedBody = escapeParam(req.body) || {};
        const originalBody = req.body || {};
        const escapedParams = escapeParam(req.params) || {};
        const originalParams = req.params || {};
        const escapedQuery = escapeParam(req.query) || {};
        const originalQuery = req.query || {};

        const params = { ...escapedBody, ...escapedParams, ...escapedQuery };
        params.original = { ...originalBody, ...originalParams, ...originalQuery };
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
    const escapedBody = escapeParam(req.body) || {};
    const originalBody = req.body || {};
    const escapedParams = escapeParam(req.params) || {};
    const originalParams = req.params || {};
    const escapedQuery = escapeParam(req.query) || {};
    const originalQuery = req.query || {};

    const params = { ...escapedBody, ...escapedParams, ...escapedQuery };
    params.original = { ...originalBody, ...originalParams, ...originalQuery };

    const result = await sqlConn(async (conn: mysql.PoolConnection) => func(conn, params, { req, res }));
    res.json(result);
  } catch (error: any) {
    next(error);
  }
};
