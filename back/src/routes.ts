import auth from "api/auth/auth";
import user from "api/user/user";
import meeting from "api/meeting/meeting";
import book from "api/ext/book";

import { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

const isProd = process.env.MODE === "production";

export default function routes(app: Application) {
  app.all("/*", (req: Request, res: Response, next: NextFunction) => {
    // res.header("Access-Control-Allow-Origin", isProd ? "" : "*");
    // res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With"); // X-Requested-With: 커스텀 헤더, ajax 통신 여부를 나타냄
    res.header("Cache-control", "no-cache");

    next();
  });

  app.use(cors({ origin: !isProd, credentials: true }));

  app.use("/api/auth", auth);
  app.use("/api/user", user);
  app.use("/api/meeting", meeting);
  app.use("/api/ext/book", book);
}
