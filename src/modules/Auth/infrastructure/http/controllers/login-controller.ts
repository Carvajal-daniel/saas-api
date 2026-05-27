import type { FastifyReply, FastifyRequest } from "fastify";
import type { LoginUseCase } from "../../../application/use-case/login/login.js";
import { LoginInputControllerDTO } from "./login-controller-dto.js";

export class LoginController{
  constructor(private readonly repo: LoginUseCase){}

  async handle(req: FastifyRequest, reply: FastifyReply){
    try {
      const body = LoginInputControllerDTO.parse(req.body)

        const result = await this.repo.execute({
          email: body.email,
          password: body.password
        })

      return reply.status(200).send(result)

    } catch (error) {

      const message = error instanceof Error ? error.message : "Credenciales inválidas.";

      reply.status(400).send({
        success: false,
        error: message
      })
      return null
    }
  }

}