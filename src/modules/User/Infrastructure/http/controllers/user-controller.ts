import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateUserUseCase } from "../../../Application/use-case/create-user.js";
import { CreateUserInputDTO, CreateUserResponseDTO } from "../../../Application/use-case/user-dto.js";
import { UserPresenters } from "../presenters/user-presenter.js";

export class CreateUserController{
  constructor(private readonly useCase: CreateUserUseCase){}

  async handle(req: FastifyRequest, res: FastifyReply){
    try {

      const data = CreateUserInputDTO.parse(req.body)
      
    const user = await this.useCase.create(data)

    return res.status(201).send(

        UserPresenters.toHTTP(user)
      )

    } catch (error) {
      console.error("ERRO DETALHADO AQUI:", error) 

    return res
      .status(400)
      .send(error)
    }
  }

}