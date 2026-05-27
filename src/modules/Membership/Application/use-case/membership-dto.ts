import z from "zod"

export const CreateMembershipInputDTO = z.object({
  userId: z.string(),
  companyId: z.string(),
  role: z.string()
})

export type CreateMembershipInputDTOtype = z.infer<typeof CreateMembershipInputDTO>
