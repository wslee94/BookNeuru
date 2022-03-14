import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { jwtSecret } from "config/token";

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return null;
  }
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
}

export const checkToken = ({ accessToken, refreshToken }: checkTokenArgs) => {
  if (!accessToken && !refreshToken) return { status: "FAIL", token: null, userInfo: null };

  const accessInfo = verifyToken(accessToken);
  const refreshInfo = verifyToken(refreshToken);

  if (!accessInfo && refreshInfo) {
    // DB랑 refresh token 비교 후 유효하면 access token 재발급
  }

  if (accessInfo && !refreshInfo) {
    // refresh token 재발급
  }

  // access token, refresh token 모두 유효한 경우
  return { status: "SUCCESS", userInfo: accessInfo };
};

export const getToken = (req: Request) => {
  return { accessToken: req.cookies.accessToken, refreshToken: req.cookies.refreshToken };
};

interface setTokenArgs {
  res: Response;
  accessToken: string;
  refreshToken: string;
}
export const setToken = ({ res, accessToken, refreshToken }: setTokenArgs) => {
  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
};
