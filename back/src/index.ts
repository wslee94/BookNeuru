import Server from "./server";
import routes from "./routes";

const server = new Server();
server.router(routes);
server.onError().listen(process.env.PORT);
