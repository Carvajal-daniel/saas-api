import type { FastifyInstance } from "fastify";
import { makeCreateUserController } from "../factories/make-create-user-controller.js";

const createUserController = makeCreateUserController()

export async function UserRoutes(app: FastifyInstance){
    app.post("/users", createUserController.handle.bind(createUserController) )
}