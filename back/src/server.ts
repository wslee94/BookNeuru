import express from "express";
import bodyParser from "body-parser";
import http from "http";
import type { ErrorRequestHandler, Request, Response } from "express";
import cookieParser from "cookie-parser";
import logger from "library/logger";

const app = express();

export default class ExpressServer {
  constructor() {
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  router(route: (arg0: express.Application) => void) {
    app.use(cookieParser());

    route(app);

    app.use((_req: Request, res: Response) => {
      res.status(404).send("요청한 주소를 찾을 수 없습니다.");
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
      logger.error(err.stack);
      res.status(500).send(err.message || "내부 서버 오류로 인해 요청에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    };
    app.use(errorHandler);
  }

  listen(port = process.env.PORT || 3001) {
    const welcome = (): void => {
      logger.info(`Running in ${process.env.MODE || "local"} port:${port}`);
    };

    http.createServer(app).listen(port, welcome);
    return app;
  }
}
