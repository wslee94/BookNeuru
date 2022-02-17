import express from "express";
import bodyParser from "body-parser";
import http from "http";
import type { ErrorRequestHandler } from "express";
import logger from "library/logger";

const app = express();

export default class ExpressServer {
  constructor() {
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  onError() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
      logger.error(err.stack);
      res.status(500).send("internal server error");
    };
    app.use(errorHandler);

    return this;
  }

  router(route) {
    route(app);
  }

  listen(port = process.env.PORT || 3001) {
    const welcome = (): void => {
      logger.info(`Running in ${process.env.NODE_ENV || "local"} port:${port}`);
    };

    http.createServer(app).listen(port, welcome);
    return app;
  }
}
