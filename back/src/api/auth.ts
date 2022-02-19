import express from "express";
import { apiWithNoToken, apiWithToken } from "library/api";

const login = apiWithNoToken((conn, param) => {
  return "로그인 API 실행!!";
});

export default express.Router().post("/login", login);
