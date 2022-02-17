import express from "express";
import bodyParser from "body-parser";
import http from "http";

const app = express();

export default class ExpressServer {
  constructor() {
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  onError() {
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("internal server error");
    });

    return this;
  }

  router(route) {
    route(app);
  }

  listen(port = process.env.PORT || "3001") {
    const welcome = (p: number) => () => {
      console.log(`Running in port:${p}`);
    };

    http.createServer(app).listen(port);
    return app;
  }
}
