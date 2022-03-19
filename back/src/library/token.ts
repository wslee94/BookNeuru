import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { jwtSecret } from "config/token";
import sqlString from "sqlstring";
import { execQuery } from "library/sql";
import { qIsValidToken, qSelectUserInfoFromRefreshToken, qUpsertToken } from "api/auth/authQuery";

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return null;
  }
};

export const getToken = (req: Request) => {
  return { accessToken: req?.cookies?.accessToken, refreshToken: req?.cookies?.refreshToken };
};

interface setTokenArgs {
  res: Response;
  accessToken?: string;
  refreshToken?: string;
}
export const setToken = ({ res, accessToken, refreshToken }: setTokenArgs) => {
  if (accessToken) res.cookie("accessToken", accessToken, { httpOnly: true });
  if (refreshToken) res.cookie("refreshToken", refreshToken, { httpOnly: true });
};

export const clearToken = (res: Response) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
};

export const generateAccessToken = (userInfo: { userID: number; email: string; name: string }) => {
  const token = jwt.sign(userInfo, jwtSecret, { expiresIn: "1h" });
  return token;
};

export const generateRefreshToken = () => {
  const token = jwt.sign({}, jwtSecret, { expiresIn: "14d" });
  return token;
};

interface checkTokenArgs {
  accessToken: string;
  refreshToken: string;
  conn: mysql.PoolConnection;
  res: Response;
}

export const checkToken = async ({ accessToken, refreshToken, conn, res }: checkTokenArgs) => {
  if (!accessToken || !refreshToken) return { status: "FAIL", token: null, userInfo: null };

  const accessInfo: any = verifyToken(accessToken);
  const refreshInfo = verifyToken(refreshToken);

  if (!accessInfo && refreshInfo) {
    const [tokenInfo]: any = await execQuery(conn, qIsValidToken(sqlString.escape(refreshToken)));
    const { isValid } = tokenInfo[0];

    if (isValid) {
      const [userInfo]: any = await execQuery(conn, qSelectUserInfoFromRefreshToken(sqlString.escape(refreshToken)));
      const { userID, email, name } = userInfo[0];
      const newAccessToken = generateAccessToken({ userID, email, name });
      setToken({ accessToken: newAccessToken, res });

      return { status: "SUCCESS", userInfo: { userID, email, name } };
    }

    return { status: "FAIL", token: null, userInfo: null };
  }

  if (accessInfo && !refreshInfo) {
    const newRefreshToken = generateRefreshToken();
    await execQuery(conn, qUpsertToken(accessInfo.userID, sqlString.escape(newRefreshToken)));
    setToken({ refreshToken: newRefreshToken, res });

    return { status: "SUCCESS", userInfo: accessInfo };
  }

  if (!accessInfo && !refreshInfo) {
    return { status: "FAIL", token: null, userInfo: null };
  }

  return { status: "SUCCESS", userInfo: accessInfo };
};
