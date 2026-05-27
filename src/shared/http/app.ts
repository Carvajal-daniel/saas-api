import fastify from "fastify";
import { UserRoutes } from "../../modules/User/Infrastructure/http/routers/user-routes.js";
import { authRouter } from "../../modules/Auth/infrastructure/http/routers/auth-router.js";

const app = fastify({
  logger: true,
});

app.register(authRouter)
app.register(UserRoutes)

export { app };