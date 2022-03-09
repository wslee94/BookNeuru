import express from "express";
import bodyParser from "body-parser";
import http from "http";
import type { ErrorRequestHandler, Request, Response } from "express";
import logger from "library/logger";

const app = express();

export default class ExpressServer {
  constructor() {
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  router(route: (arg0: express.Application) => void) {
    route(app);

    app.use((req: Request, res: Response) => {
      res.status(404).send("page not found");
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
      logger.error(err.stack);
      res.status(500).send("internal server error");
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
