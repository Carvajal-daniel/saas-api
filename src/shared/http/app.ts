import fastify from "fastify";
import { UserRoutes } from "../../modules/User/Infrastructure/http/routers/user-routes.js";

const app = fastify({
  logger: true,
});

app.register(UserRoutes)

export { app };