import z from "zod"

export const CreateCompanyInputDTO = z.object({
  name: z.string().min(2),
  country: z.enum(["BR", "VE"]),
  document: z.string().nullable(),
  isInformal: z.boolean()
})


export const CreateCompanyResponseDTO = z.object({
  id: z.string(),
  name: z.string(),
  country: z.enum(["BR", "VE"]),
  document: z.string().nullable(),
  isInformal: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
})


export type CreateCompanyInputDTOtype = z.infer<typeof CreateCompanyInputDTO>
export type CreateCompanyReponseDTOtype = z.infer<typeof CreateCompanyResponseDTO>