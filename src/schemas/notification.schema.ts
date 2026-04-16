import { z } from "zod"

import { notificationStatuses } from "@/types/notification"

const optionalTextSchema = z.string().optional()

const aidsFormSchema = z.object({
  patient_name: z.string().min(3, "Nome obrigatorio"),
  patient_cpf: z.string().min(11, "CPF obrigatorio"),
  patient_birth_date: z.string().min(1, "Data de nascimento obrigatoria"),
  sex: z.string().min(1, "Sexo obrigatorio"),
  race_color: z.string().min(1, "Raca/Cor obrigatoria"),
  education_level: z.string().min(1, "Escolaridade obrigatoria"),
  sus_card_number: z.string().min(1, "Cartao SUS obrigatorio"),
  residence_city: z.string().min(1, "Municipio obrigatorio"),
  residence_state: z.string().min(2, "Estado obrigatorio"),
  vertical_transmission: z.string().min(1, "Campo obrigatorio"),
  sexual_exposure: z.string().min(1, "Campo obrigatorio"),
  injecting_drug_use: z.string().min(1, "Campo obrigatorio"),
  other_exposure_notes: optionalTextSchema,
  diagnosis_date: z.string().min(1, "Data de diagnostico obrigatoria"),
  screening_test_result: z.string().min(1, "Resultado obrigatorio"),
  ministry_protocol_status: z.string().min(1, "Campo obrigatorio"),
  hiv_lab_evidence: z.string().min(1, "Descreva as evidencias laboratoriais"),
  treatment_performed: z.string().min(1, "Descreva o tratamento realizado"),
  health_outcome: z.string().min(1, "Estado de saude obrigatorio"),
  outcome_details: optionalTextSchema,
})

const venomousAnimalFormSchema = z
  .object({
    accident_type: z.string().min(1, "Tipo de acidente obrigatorio"),
    accident_location: z.string().min(1, "Local do acidente obrigatorio"),
    bite_site: z.string().min(1, "Local da picada obrigatorio"),
    time_to_care_hours: z
      .number({ error: "Informe o tempo ate o atendimento" })
      .min(0, "Tempo invalido"),
    local_symptoms: z.string().min(1, "Descreva os sintomas locais"),
    systemic_symptoms: optionalTextSchema,
    antivenom_administered: z.string().min(1, "Informe se houve soro"),
    antivenom_ampoules: z
      .number({ error: "Numero de ampolas invalido" })
      .int("Use um numero inteiro de ampolas")
      .positive("Quantidade de ampolas invalida")
      .optional(),
    case_classification: z.string().min(1, "Classificacao obrigatoria"),
    local_complications: optionalTextSchema,
    systemic_complications: optionalTextSchema,
    final_diagnosis: z.string().min(1, "Diagnostico final obrigatorio"),
    outcome_details: optionalTextSchema,
  })
  .superRefine((values, ctx) => {
    const requiresAmpoules =
      values.antivenom_administered === "yes" ||
      values.case_classification === "severe"

    if (requiresAmpoules && !values.antivenom_ampoules) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["antivenom_ampoules"],
        message:
          "Informe o numero de ampolas quando houver soro ou o caso for grave",
      })
    }
  })

const notificationBaseSchema = z.object({
  patient_id: z.coerce.number().int().positive("Paciente obrigatorio"),
  unit_id: z.coerce.number().int().positive("Unidade obrigatoria"),
  status: z.enum(notificationStatuses),
  notification_date: z.string().min(1, "Data da notificacao obrigatoria"),
  occurrence_date: optionalTextSchema,
  notes: optionalTextSchema,
})

export const notificationSchema = z.discriminatedUnion(
  "notification_type_slug",
  [
    notificationBaseSchema.extend({
      notification_type_slug: z.literal("aids"),
      form_data: aidsFormSchema,
    }),
    notificationBaseSchema.extend({
      notification_type_slug: z.literal("venomous_animal"),
      form_data: venomousAnimalFormSchema,
    }),
  ]
)

export type NotificationSchema = z.infer<typeof notificationSchema>
