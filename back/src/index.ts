import Server from "./server";
import routes from "./routes";

const server = new Server();
server.router(routes);
server.listen(process.env.PORT);
