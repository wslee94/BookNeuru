import express from "express";
import mysql from "mysql2/promise";
import axios from "axios";
import { apiWithToken } from "library/api";
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "config/openAPI";

const fetchBooks = apiWithToken(async (conn: mysql.PoolConnection, param: any) => {
  const { bookTitle } = param.original;
  const bookTitleUTF8 = encodeURI(bookTitle);

  const res = await axios({
    method: "get",
    url: `https://openapi.naver.com/v1/search/book.json?query=${bookTitleUTF8}&display=10&start=1`,
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  });

  return res.data;
});

export default express.Router().get("", fetchBooks);
