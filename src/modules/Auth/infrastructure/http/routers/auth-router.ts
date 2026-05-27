import type { FastifyInstance } from "fastify";
import { makeLoginController } from "../factorie/make-login-controller.js";
import { MakeRegisterController } from "../factorie/make-register-controller.js";

export function authRouter(app: FastifyInstance){

  const loginController = makeLoginController()
  const registerController = MakeRegisterController()
  
  app.post("/login", 
    loginController.handle.bind(loginController)
  )

  app.post("/register",
    registerController.handler.bind(registerController)
  )
  
}