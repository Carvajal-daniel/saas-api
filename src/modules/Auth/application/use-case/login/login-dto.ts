import z from "zod"

export const LoginInputDTO = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export type LoginInputDTOtype = z.infer<typeof LoginInputDTO>