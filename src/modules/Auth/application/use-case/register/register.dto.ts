import { z } from "zod"

export const registerSchema = z.object({

  companyName: z.string().min(1, "O nome da empresa é obrigatório"),

  companyCountry: z.enum(["BR","VE"]),

  cnpj: z.string().optional(),

  rif: z.string().optional(),

  isInformal: z.boolean().default(false),

  ownerName: z.string().min(1, "O nome do proprietário é obrigatório"),

  ownerEmail: z.string().email("E-mail do proprietário inválido"),

  ownerPhone: z.string().min(1, "O telefone do proprietário é obrigatório"),

  password: z.string() .min(6, "A senha deve ter pelo menos 6 caracteres")

})

export type RegisterDTO = z.infer<typeof registerSchema>