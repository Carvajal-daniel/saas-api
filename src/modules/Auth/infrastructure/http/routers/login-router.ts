import type { FastifyInstance } from "fastify";
import { makeLoginController } from "../factorie/make-login-controller.js";

export function authRouter(app: FastifyInstance){

  const loginController = makeLoginController()
  
  app.post("/login", 
    loginController.handle.bind(loginController)
  )
}