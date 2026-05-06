import { z } from "zod";

import {
  defineNotificationType,
  educationLevelOptions,
  healthOutcomeOptions,
  ministryProtocolOptions,
  raceColorOptions,
  screeningTestOptions,
  sexOptions,
  yesNoUnknownOptions,
  type NotificationSectionDefinition,
} from "@/features/notifications/definitions/shared"

const optionalTextSchema = z.string().optional();

// -----------------------------------------------------------------------------
// 1. DADOS DO PACIENTE
// -----------------------------------------------------------------------------
const patientSection = {
  id: "patient",
  title: "Dados do Paciente",
  description: "Informações civis e demográficas do indivíduo notificado.",
  columns: 3,
  fields: [
    {
      name: "patient_name",
      label: "8 - Nome do Paciente",
      kind: "text",
      schema: z.string().min(3, "Nome obrigatorio"),
      defaultValue: "",
    },
    {
      name: "patient_birth_date",
      label: "9 - Data de Nascimento",
      kind: "date",
      schema: z.string().min(1, "Data de nascimento obrigatoria"),
      defaultValue: "",
    },
    {
      name: "sex",
      label: "11 - Sexo",
      kind: "select",
      schema: z.string().min(1, "Sexo obrigatorio"),
      defaultValue: "",
      options: sexOptions,
    },
    {
      name: "gestant",
      label: "12 - Gestante",
      kind: "select",
      schema: z.string(),
      defaultValue: "9",
      options: [
        { label: "1-1°Trimestre", value: "1" },
        { label: "2-2°Trimestre", value: "2" },
        { label: "3-3°Trimestre", value: "3" },
        { label: "4-Idade gestacional Ignorada", value: "4" },
        { label: "5-Não", value: "5" },
        { label: "6-Não se aplica", value: "6" },
        { label: "9-Ignorado", value: "9" },
      ],
    },
    {
      name: "race_color",
      label: "13 - Raca/Cor",
      kind: "select",
      schema: z.string().min(1, "Raca/Cor obrigatoria"),
      defaultValue: "",
      options: raceColorOptions,
    },
    {
      name: "education_level",
      label: "14 - Escolaridade",
      kind: "select",
      schema: z.string().min(1, "Escolaridade obrigatoria"),
      defaultValue: "",
      options: educationLevelOptions,
    },
    {
      name: "sus_card",
      label: "15 - Número do Cartão SUS",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "mother_name",
      label: "16 - Nome da mãe",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 2. DADOS DE RESIDÊNCIA
// -----------------------------------------------------------------------------
const residenceSection = {
  id: "residence",
  title: "Dados de Residência",
  description: "Endereço de moradia do paciente.",
  columns: 3,
  fields: [
    {
      name: "residence_state",
      label: "17 - UF",
      kind: "text",
      schema: z.string().length(2),
      defaultValue: "",
    },
    {
      name: "residence_city",
      label: "18 - Município de Residência",
      kind: "text",
      schema: z.string().min(1),
      defaultValue: "",
    },
    {
      name: "district",
      label: "19 - Distrito",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "neighborhood",
      label: "20 - Bairro",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "address",
      label: "21 - Logradouro",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "zip_code",
      label: "27 - CEP",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "zone",
      label: "29 - Zona",
      kind: "select",
      schema: z.string(),
      defaultValue: "9",
      options: [
        { label: "1-Urbana", value: "1" },
        { label: "2-Rural", value: "2" },
        { label: "3-Periurbana", value: "3" },
        { label: "9-Ignorado", value: "9" },
      ],
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 3. DADOS COMPLEMENTARES E LABORATÓRIO
// -----------------------------------------------------------------------------
const laboratorySection = {
  id: "laboratory",
  title: "Dados Complementares e Laboratório",
  description: "Investigação diagnóstica e resultados de exames.",
  columns: 2,
  fields: [
    {
      name: "dt_investigation",
      label: "31 - Data da Investigação",
      kind: "date",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "dt_coproscopy",
      label: "33 - Data da Coproscopia",
      kind: "date",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "quantitative_analysis",
      label: "34 - Análise Quantitativa",
      kind: "select",
      schema: optionalTextSchema,
      defaultValue: "",
      options: [
        { label: "0 - 0 (zero)", value: "0" },
        { label: "1 - 1 (um) ou mais ovos", value: "1" },
      ],
    },
    {
      name: "qualitative_analysis",
      label: "35 - Análise Qualitativa",
      kind: "select",
      schema: optionalTextSchema,
      defaultValue: "",
      options: [
        { label: "1 - Positivo", value: "1" },
        { label: "2 - Negativo", value: "2" },
        { label: "3 - Não realizado", value: "3" },
      ],
    },
    {
      name: "other_exams",
      label: "37 - Outros exames (especificar)",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 4. TRATAMENTO E EVOLUÇÃO
// -----------------------------------------------------------------------------
const clinicalSection = {
  id: "outcome",
  title: "Tratamento e Conclusão",
  description: "Informações sobre conduta clínica e encerramento do caso.",
  columns: 2,
  fields: [
    {
      name: "treatment_performed",
      label: "38 - Fez Tratamento?",
      kind: "select",
      schema: z.string(),
      defaultValue: "9",
      options: [
        { label: "1 - Sim Praziquantel", value: "1" },
        { label: "2 - Sim Oxaminiquine", value: "2" },
        { label: "3 - Não", value: "3" },
        { label: "9 - Ignorado", value: "9" },
      ],
    },
    {
      name: "clinical_form",
      label: "43 - Especificar Forma Clínica",
      kind: "select",
      schema: optionalTextSchema,
      defaultValue: "",
      options: [
        { label: "1 - Intestinal", value: "1" },
        { label: "2 - Hepato Intestinal", value: "2" },
        { label: "3 - Hepato Esplênica", value: "3" },
        { label: "4 - Aguda", value: "4" },
        { label: "5 - Outra", value: "5" },
      ],
    },
    {
      name: "autochthonous",
      label: "44 - Caso é autóctone do município de residência?",
      kind: "select",
      schema: z.string(),
      defaultValue: "3",
      options: [
        { label: "1 - Sim", value: "1" },
        { label: "2 - Não", value: "2" },
        { label: "3 - Indeterminado", value: "3" },
      ],
    },
    {
      name: "case_evolution",
      label: "53 - Evolução do Caso",
      kind: "select",
      schema: z.string(),
      defaultValue: "9",
      options: [
        { label: "1 - Cura", value: "1" },
        { label: "2 - Não Cura", value: "2" },
        { label: "3 - Óbito por esquistossomose", value: "3" },
        { label: "4 - Óbito por outras causas", value: "4" },
        { label: "9 - Ignorado", value: "9" },
      ],
    },
    {
      name: "dt_closing",
      label: "55 - Data do Encerramento",
      kind: "date",
      schema: optionalTextSchema,
      defaultValue: "",
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// DEFINIÇÃO FINAL
// -----------------------------------------------------------------------------
const sections = [
  patientSection,
  residenceSection,
  laboratorySection,
  clinicalSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const schistosomiasisNotificationDefinition = defineNotificationType({
  id: 134,
  slug: "esquistossomose",
  label: "ESQUISTOSSOMOSE",
  description: `Ficha de investigação para Esquistossomose (Schistosoma mansoni). 
  
CASO CONFIRMADO: Todo indivíduo que apresente ovos viáveis de Schistosoma mansoni nas fezes ou em tecido submetido à biópsia.`,
  sections,
});
