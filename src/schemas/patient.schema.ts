import { z } from "zod"

export const patientSchema = z.object({
  name: z.string().min(3, "Nome obrigatório"),
  document: z.string().min(11, "Documento obrigatório"),
  sus_card: z.string().min(15, "Cartão SUS obrigatório"),
  birth_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data inválida").optional(),
  birth_city: z.string().optional(),
  race_color: z.string().optional(),
  gender: z.string().optional(),
  education_level: z.string().optional(),
  current_address: z.string().optional(),
  phone: z.string().optional(),
})

export type PatientSchema = z.infer<typeof patientSchema>
