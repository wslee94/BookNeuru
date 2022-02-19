import sqlString from "sqlstring";
import { Request, Response } from "express";

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

export const apiWithToken =
  (func: (arg0: any, arg1: any, arg2: any) => object) => async (req: Request, res: Response) => {
    // 토큰 체크 로직
    const token = checkToken();

    // 토큰 유효한 경우
    const params = escapeParam(req.body);
    params.original = req.body;
    params.token = token.token;

    // null = db connection 생성 후 전달 예정
    const result = func(null, params, token.user);

    res.json(result);
  };

export const apiWithNoToken = (func: (arg0: any, arg1: any) => object) => (req: Request, res: Response) => {
  const params = escapeParam(req.body);
  params.original = req.body;

  // null = db connection 생성 후 전달 예정
  const result = func(null, params);

  res.json(result);
};
