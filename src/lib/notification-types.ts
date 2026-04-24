import type {
  NotificationFormDataMap,
  NotificationTypeSlug,
} from "@/types/notification"
import { notificationTypeSlugs } from "@/types/notification"

type NotificationFieldKind = "text" | "textarea" | "date" | "number" | "select"

type NotificationFieldOption = {
  label: string
  value: string
}

export type NotificationFieldDefinition = {
  name: string
  label: string
  kind: NotificationFieldKind
  placeholder?: string
  fullWidth?: boolean
  options?: NotificationFieldOption[]
}

export type NotificationSectionDefinition = {
  id: string
  title: string
  description: string
  columns?: 1 | 2 | 3
  fields: NotificationFieldDefinition[]
}

type NotificationTypeDefinitionMap = {
  [Slug in NotificationTypeSlug]: {
    id: number
    slug: Slug
    label: string
    description: string
    defaultValues: NotificationFormDataMap[Slug]
    sections: NotificationSectionDefinition[]
  }
}

export type NotificationTypeDefinition =
  NotificationTypeDefinitionMap[NotificationTypeSlug]

const yesNoUnknownOptions = [
  { label: "Sim", value: "yes" },
  { label: "Nao", value: "no" },
  { label: "Ignorado", value: "unknown" },
] satisfies NotificationFieldOption[]

const sexOptions = [
  { label: "Feminino", value: "female" },
  { label: "Masculino", value: "male" },
  { label: "Outro", value: "other" },
  { label: "Ignorado", value: "unknown" },
] satisfies NotificationFieldOption[]

const raceColorOptions = [
  { label: "Branca", value: "white" },
  { label: "Preta", value: "black" },
  { label: "Parda", value: "brown" },
  { label: "Amarela", value: "yellow" },
  { label: "Indigena", value: "indigenous" },
  { label: "Ignorado", value: "unknown" },
] satisfies NotificationFieldOption[]

const educationLevelOptions = [
  { label: "Sem escolaridade", value: "none" },
  { label: "Fundamental incompleto", value: "elementary_incomplete" },
  { label: "Fundamental completo", value: "elementary_complete" },
  { label: "Medio completo", value: "high_school_complete" },
  { label: "Superior completo", value: "college_complete" },
  { label: "Ignorado", value: "unknown" },
] satisfies NotificationFieldOption[]

const screeningTestOptions = [
  { label: "Positivo", value: "positive" },
  { label: "Negativo", value: "negative" },
  { label: "Inconclusivo", value: "inconclusive" },
] satisfies NotificationFieldOption[]

const ministryProtocolOptions = [
  { label: "Confirmado", value: "confirmed" },
  { label: "Em investigacao", value: "under_investigation" },
  { label: "Nao confirmado", value: "not_confirmed" },
] satisfies NotificationFieldOption[]

const healthOutcomeOptions = [
  { label: "Estavel", value: "stable" },
  { label: "Com complicacoes", value: "complications" },
  { label: "Obito", value: "death" },
] satisfies NotificationFieldOption[]

const accidentTypeOptions = [
  { label: "Serpente", value: "snake" },
  { label: "Aranha", value: "spider" },
  { label: "Escorpiao", value: "scorpion" },
  { label: "Lagarta", value: "caterpillar" },
  { label: "Abelha", value: "bee" },
  { label: "Outro", value: "other" },
] satisfies NotificationFieldOption[]

const caseClassificationOptions = [
  { label: "Leve", value: "mild" },
  { label: "Moderado", value: "moderate" },
  { label: "Grave", value: "severe" },
] satisfies NotificationFieldOption[]

const finalDiagnosisOptions = [
  { label: "Curado", value: "cured" },
  { label: "Obito pelo agravo", value: "death_from_event" },
  { label: "Obito por outra causa", value: "death_other_cause" },
  { label: "Outro desfecho", value: "other" },
] satisfies NotificationFieldOption[]

export const notificationStatusOptions = [
  { label: "Pendente", value: "pending" },
  { label: "Em analise", value: "in_review" },
  { label: "Resolvida", value: "resolved" },
] satisfies NotificationFieldOption[]

export const notificationTypeRegistry: NotificationTypeDefinitionMap = {
  aids: {
    id: 1,
    slug: "aids",
    label: "AIDS",
    description: `Formulario com dados do paciente, historico sexual, diagnostico e evolucao do caso.

A AIDS e o estagio mais avancado da doenca que ataca o sistema imunologico. A Sindrome da Imunodeficiencia Adquirida, como tambem e chamada, e causada pelo HIV. Como esse virus ataca as celulas de defesa do nosso corpo, o organismo fica mais vulneravel a diversas doencas, de um simples resfriado a infeccoes mais graves como tuberculose ou cancer. O proprio tratamento dessas doencas fica prejudicado.

Ha alguns anos, receber o diagnostico de aids era uma sentenca de morte. Mas, hoje em dia, e possivel ser soropositivo e viver com qualidade de vida. Basta tomar os medicamentos indicados e seguir corretamente as recomendacoes medicas.

Saber precocemente da doenca e fundamental para aumentar ainda mais a sobrevida da pessoa. Por isso, o Ministerio da Saude recomenda fazer o teste sempre que passar por alguma situacao de risco e usar sempre o preservativo.`,
    defaultValues: {
      patient_name: "",
      patient_cpf: "",
      patient_birth_date: "",
      sex: "",
      race_color: "",
      education_level: "",
      sus_card_number: "",
      residence_city: "",
      residence_state: "",
      vertical_transmission: "",
      sexual_exposure: "",
      injecting_drug_use: "",
      other_exposure_notes: "",
      diagnosis_date: "",
      screening_test_result: "",
      ministry_protocol_status: "",
      hiv_lab_evidence: "",
      treatment_performed: "",
      health_outcome: "",
      outcome_details: "",
    },
    sections: [
      {
        id: "patient",
        title: "Dados do Paciente",
        description:
          "Capture o retrato do paciente na notificacao, mesmo quando ele ja existe no cadastro geral.",
        columns: 3,
        fields: [
          { name: "patient_name", label: "Nome", kind: "text" },
          { name: "patient_cpf", label: "CPF", kind: "text" },
          {
            name: "patient_birth_date",
            label: "Data de nascimento",
            kind: "date",
          },
          { name: "sex", label: "Sexo", kind: "select", options: sexOptions },
          {
            name: "race_color",
            label: "Raca/Cor",
            kind: "select",
            options: raceColorOptions,
          },
          {
            name: "education_level",
            label: "Escolaridade",
            kind: "select",
            options: educationLevelOptions,
          },
          {
            name: "sus_card_number",
            label: "Cartao SUS",
            kind: "text",
          },
          {
            name: "residence_city",
            label: "Municipio",
            kind: "text",
          },
          { name: "residence_state", label: "Estado", kind: "text" },
        ],
      },
      {
        id: "history",
        title: "Historico Sexual",
        description:
          "Registre exposicoes e antecedentes relevantes para a investigacao epidemiologica.",
        columns: 3,
        fields: [
          {
            name: "vertical_transmission",
            label: "Transmissao vertical",
            kind: "select",
            options: yesNoUnknownOptions,
          },
          {
            name: "sexual_exposure",
            label: "Relacoes sexuais como exposicao",
            kind: "select",
            options: yesNoUnknownOptions,
          },
          {
            name: "injecting_drug_use",
            label: "Uso de drogas injetaveis",
            kind: "select",
            options: yesNoUnknownOptions,
          },
          {
            name: "other_exposure_notes",
            label: "Outras observacoes sobre exposicao",
            kind: "textarea",
            fullWidth: true,
          },
        ],
      },
      {
        id: "diagnosis",
        title: "Dados de Diagnostico",
        description:
          "Consolide a data do diagnostico, o teste de triagem e a confirmacao pelo protocolo ministerial.",
        columns: 3,
        fields: [
          {
            name: "diagnosis_date",
            label: "Data de diagnostico",
            kind: "date",
          },
          {
            name: "screening_test_result",
            label: "Teste de triagem",
            kind: "select",
            options: screeningTestOptions,
          },
          {
            name: "ministry_protocol_status",
            label: "Protocolo do Ministerio da Saude",
            kind: "select",
            options: ministryProtocolOptions,
          },
        ],
      },
      {
        id: "outcome",
        title: "Evolucao do Caso",
        description:
          "Documente evidencias laboratoriais, tratamento e situacao atual do paciente.",
        columns: 2,
        fields: [
          {
            name: "hiv_lab_evidence",
            label: "Evidencias laboratoriais de HIV",
            kind: "textarea",
            fullWidth: true,
          },
          {
            name: "treatment_performed",
            label: "Tratamento realizado",
            kind: "textarea",
            fullWidth: true,
          },
          {
            name: "health_outcome",
            label: "Estado de saude",
            kind: "select",
            options: healthOutcomeOptions,
          },
          {
            name: "outcome_details",
            label: "Complicacoes e observacoes finais",
            kind: "textarea",
            fullWidth: true,
          },
        ],
      },
    ],
  },
  venomous_animal: {
    id: 2,
    slug: "venomous_animal",
    label: "Acidente por animal peconhento",
    description:
      "Formulario com dados do acidente, manifestacoes clinicas, tratamento e evolucao.",
    defaultValues: {
      accident_type: "",
      accident_location: "",
      bite_site: "",
      time_to_care_hours: undefined,
      local_symptoms: "",
      systemic_symptoms: "",
      antivenom_administered: "",
      antivenom_ampoules: undefined,
      case_classification: "",
      local_complications: "",
      systemic_complications: "",
      final_diagnosis: "",
      outcome_details: "",
    },
    sections: [
      {
        id: "accident",
        title: "Dados do Acidente",
        description:
          "Caracterize o animal, o local do acidente e o tempo transcorrido ate o atendimento.",
        columns: 2,
        fields: [
          {
            name: "accident_type",
            label: "Tipo de acidente",
            kind: "select",
            options: accidentTypeOptions,
          },
          {
            name: "accident_location",
            label: "Local do acidente",
            kind: "text",
          },
          {
            name: "bite_site",
            label: "Regiao anatomica da picada",
            kind: "text",
          },
          {
            name: "time_to_care_hours",
            label: "Tempo ate o atendimento (horas)",
            kind: "number",
          },
        ],
      },
      {
        id: "clinical",
        title: "Manifestacoes Clinicas",
        description:
          "Detalhe sintomas locais e sistemicos, soro antiveneno e classificacao do caso.",
        columns: 2,
        fields: [
          {
            name: "local_symptoms",
            label: "Sintomas locais",
            kind: "textarea",
            fullWidth: true,
          },
          {
            name: "systemic_symptoms",
            label: "Sintomas sistemicos",
            kind: "textarea",
            fullWidth: true,
          },
          {
            name: "antivenom_administered",
            label: "Soro antiveneno administrado",
            kind: "select",
            options: [
              { label: "Sim", value: "yes" },
              { label: "Nao", value: "no" },
            ],
          },
          {
            name: "antivenom_ampoules",
            label: "Numero de ampolas",
            kind: "number",
          },
          {
            name: "case_classification",
            label: "Classificacao do caso",
            kind: "select",
            options: caseClassificationOptions,
          },
        ],
      },
      {
        id: "evolution",
        title: "Evolucao",
        description:
          "Consolide complicacoes observadas e o diagnostico final do acidente.",
        columns: 2,
        fields: [
          {
            name: "local_complications",
            label: "Complicacoes locais",
            kind: "textarea",
            fullWidth: true,
          },
          {
            name: "systemic_complications",
            label: "Complicacoes sistemicas",
            kind: "textarea",
            fullWidth: true,
          },
          {
            name: "final_diagnosis",
            label: "Diagnostico final",
            kind: "select",
            options: finalDiagnosisOptions,
          },
          {
            name: "outcome_details",
            label: "Outras observacoes do desfecho",
            kind: "textarea",
            fullWidth: true,
          },
        ],
      },
    ],
  },
}

export const notificationTypeOptions = notificationTypeSlugs.map((slug) => ({
  label: notificationTypeRegistry[slug].label,
  value: slug,
}))

export function getNotificationTypeDefinition<Slug extends NotificationTypeSlug>(
  slug: Slug
): NotificationTypeDefinitionMap[Slug] {
  return notificationTypeRegistry[slug]
}

export function getNotificationTypeId(slug: NotificationTypeSlug) {
  return notificationTypeRegistry[slug].id
}

export function getNotificationTypeLabel(slug: NotificationTypeSlug) {
  return notificationTypeRegistry[slug].label
}

export function getNotificationTypeDescription(slug: NotificationTypeSlug) {
  return notificationTypeRegistry[slug].description
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number)

  if (!year || !month || !day) {
    return value
  }

  return new Intl.DateTimeFormat("pt-BR").format(
    new Date(year, month - 1, day)
  )
}

export function formatNotificationFieldValue(
  field: NotificationFieldDefinition,
  rawValue: unknown
) {
  if (
    rawValue === undefined ||
    rawValue === null ||
    rawValue === "" ||
    (typeof rawValue === "number" && Number.isNaN(rawValue))
  ) {
    return "Nao informado"
  }

  if (field.kind === "select") {
    return (
      field.options?.find((option) => option.value === rawValue)?.label ??
      String(rawValue)
    )
  }

  if (field.kind === "date" && typeof rawValue === "string") {
    return formatDate(rawValue)
  }

  if (field.kind === "number" && typeof rawValue === "number") {
    return new Intl.NumberFormat("pt-BR").format(rawValue)
  }

  return String(rawValue)
}

export function formatNotificationDate(value?: string) {
  if (!value) {
    return "Nao informada"
  }

  return formatDate(value)
}
