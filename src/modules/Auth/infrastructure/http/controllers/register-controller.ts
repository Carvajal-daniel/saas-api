import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterUseCase } from "../../../application/use-case/register/register-use-case.js";
import { registerSchema } from "../../../application/use-case/register/register.dto.js";

export class RegisterController{
  constructor(private readonly makeRegisterController: RegisterUseCase){}

  async handler(req: FastifyRequest, reply: FastifyReply){
    try {

      const data = registerSchema.parse(req.body)

      await this.makeRegisterController.execute(data)
      
      return reply.status(201).send(data)


    } catch (error) {
      console.log(error)

       return reply.status(400).send(error)
    }

    
  }

}