import auth from "api/auth/auth";
import user from "api/user/user";
import { Application } from "express";

export default function routes(app: Application) {
  app.use("/api/auth", auth);
  app.use("/api/user", user);
}
