import express from "express";
import mysql from "mysql2/promise";
import axios from "axios";
import { checkBlank } from "helper/func";
import { apiWithToken } from "library/api";
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "config/openAPI";
import ResponseJson from "library/response";

const fetchBooks = apiWithToken(async (conn: mysql.PoolConnection, param: any) => {
  const { bookTitle } = param.original;

  if (checkBlank(bookTitle)) return new ResponseJson("SUCCESS", [], "");

  const bookTitleUTF8 = encodeURI(bookTitle);

  const res = await axios({
    method: "get",
    url: `https://openapi.naver.com/v1/search/book.json?query=${bookTitleUTF8}&display=10&start=1`,
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  });

  return new ResponseJson("SUCCESS", res.data || [], "");
});

export default express.Router().get("", fetchBooks);
