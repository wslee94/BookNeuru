import auth from "api/auth";
import { Application } from "express";

export default function routes(app: Application) {
  app.use("/api/auth", auth);
}
