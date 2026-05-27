import z from "zod"

export const CreateUserInputDTO = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().min(6)
})


export const CreateUserResponseDTO = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  createdAt: z.date(),
})


export type CreateUserInputDTOtype = z.infer<typeof CreateUserInputDTO>
export type CreateUserReponseDTOtype = z.infer<typeof CreateUserResponseDTO>