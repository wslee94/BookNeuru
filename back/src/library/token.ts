import jwt from "jsonwebtoken";
import { Request } from "express";
import { jwtSecret } from "config/token";

export const generateToken = (userInfo: { userID: number; email: string; name: string }) => {
  const token = jwt.sign(userInfo, jwtSecret, { expiresIn: "7d" });
  return token;
};

export const checkToken = (token: string) => {
  if (!token) return { status: "FAIL", token: null, userInfo: null };
  try {
    const userInfo = jwt.verify(token, jwtSecret);
    return { status: "SUCCESS", token: null, userInfo };
  } catch (error) {
    return { status: "FAIL", token, userInfo: null };
  }
};

export const getToken = (req: Request) => {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  }
  return "";
};
