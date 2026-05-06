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
// 1. DADOS GERAIS E NOTIFICAÇÃO
// -----------------------------------------------------------------------------
const notificationDataSection = {
  id: "notification_data",
  title: "Dados Gerais",
  description: "Informações sobre a notificação e unidade notificadora.",
  columns: 3,
  fields: [
    {
      name: "tp_notification",
      label: "1 - Tipo de Notificação",
      kind: "select",
      schema: z.string().default("2"),
      defaultValue: "2",
      options: [{ label: "2 - Individual", value: "2" }],
    },
    {
      name: "ds_disease",
      label: "2 - Agravo/doença",
      kind: "text",
      schema: z.string(),
      defaultValue: "EPIZOOTIA",
    },
    {
      name: "dt_notification",
      label: "3 - Data da Notificação",
      kind: "date",
      schema: z.string().min(1, "Obrigatório"),
      defaultValue: "",
    },
    {
      name: "notification_uf",
      label: "4 - UF",
      kind: "text",
      schema: z.string().length(2, "UF obrigatória"),
      defaultValue: "",
    },
    {
      name: "notification_city",
      label: "5 - Município de Notificação",
      kind: "text",
      schema: z.string().min(1, "Município obrigatório"),
      defaultValue: "",
    },
    {
      name: "health_unit_name",
      label: "6 - Unidade de Saúde",
      kind: "text",
      schema: z.string().min(1, "Unidade obrigatória"),
      defaultValue: "",
    },
    {
      name: "dt_epizooty_start",
      label: "7 - Data do início da epizootia",
      kind: "date",
      schema: z.string().min(1, "Data obrigatória"),
      defaultValue: "",
    },
    {
      name: "ds_info_source",
      label: "8 - Fonte da informação",
      kind: "text",
      schema: z.string().min(1, "Fonte obrigatória"),
      defaultValue: "",
    },
    {
      name: "nu_info_source_phone",
      label: "9 - (DDD) Telefone da fonte",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 2. DADOS DE OCORRÊNCIA
// -----------------------------------------------------------------------------
const occurrenceLocationSection = {
  id: "occurrence_location",
  title: "Dados de Ocorrência",
  description: "Localização geográfica onde os animais foram encontrados.",
  columns: 3,
  fields: [
    {
      name: "occurrence_uf",
      label: "10 - UF",
      kind: "text",
      schema: z.string().length(2),
      defaultValue: "",
    },
    {
      name: "occurrence_city",
      label: "11 - Município de Ocorrência",
      kind: "text",
      schema: z.string(),
      defaultValue: "",
    },
    {
      name: "occurrence_district",
      label: "12 - Distrito",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "occurrence_neighborhood",
      label: "13 - Bairro",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "occurrence_street",
      label: "14 - Logradouro",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "occurrence_number",
      label: "15 - Número",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "occurrence_geocampo1",
      label: "17 - Geocampo 1",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "occurrence_geocampo2",
      label: "18 - Geocampo 2",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "occurrence_zipcode",
      label: "20 - CEP",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "tp_zone",
      label: "22 - Zona",
      kind: "select",
      schema: z.string().min(1, "Obrigatório"),
      defaultValue: "9",
      options: [
        { label: "1 - Urbana", value: "1" },
        { label: "2 - Rural", value: "2" },
        { label: "3 - Periurbana", value: "3" },
        { label: "9 - Ignorado", value: "9" },
      ],
    },
    {
      name: "tp_environment",
      label: "23 - Ambiente",
      kind: "select",
      schema: z.string().min(1, "Obrigatório"),
      defaultValue: "",
      options: [
        { label: "1 - Domicílio", value: "1" },
        { label: "2 - Parque, praça ou zoológico", value: "2" },
        { label: "3 - Área silvestre", value: "3" },
        { label: "4 - Reserva ecológica", value: "4" },
        { label: "5 - Outro", value: "5" },
      ],
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 3. INVESTIGAÇÃO LABORATORIAL
// -----------------------------------------------------------------------------
const labInvestigationSection = {
  id: "lab_investigation",
  title: "Investigação Laboratorial",
  description: "Coleta de material para exame laboratorial.",
  columns: 3,
  fields: [
    {
      name: "st_material_collected",
      label: "24 - Houve coleta de material?",
      kind: "select",
      schema: z.string().min(1, "Campo obrigatório"),
      defaultValue: "9",
      options: yesNoUnknownOptions,
    },
    {
      name: "dt_collection",
      label: "25 - Data da Coleta",
      kind: "date",
      schema: optionalTextSchema,
      defaultValue: "",
    },
    {
      name: "ds_material_type",
      label: "26 - Qual material?",
      kind: "text",
      schema: optionalTextSchema,
      defaultValue: "",
      placeholder: "Fígado, rim, baço, cérebro, coração, fezes, sangue...",
    },
  ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 4. ANIMAIS ACOMETIDOS
// -----------------------------------------------------------------------------
const affectedAnimalsSection = {
  id: "affected_animals",
  title: "Animais Acometidos",
  description: "Espécies e quantidade de animais doentes ou mortos.",
  columns: 3,
  fields: [
    {
      name: "tp_animal",
      label: "27 - Tipo de Animal",
      kind: "select",
      schema: z.string().min(1, "Obrigatório"),
      defaultValue: "",
      options: [
        { label: "1 - Ave", value: "1" },
        { label: "2 - Bovídeo", value: "2" },
        { label: "3 - Canino", value: "3" },
        { label: "4 - Equídeo", value: "4" },
        { label: "5 - Felino", value: "5" },
        { label: "6 - Morcego", value: "6" },
        { label: "7 - Primata não humano", value: "7" },
        { label: "8 - Canídeo selvagem", value: "8" },
        { label: "9 - Outros", value: "9" },
      ],
    },
    {
      name: "nu_sick_animals",
      label: "Doentes (Qtd)",
      kind: "number",
      schema: optionalTextSchema,
      defaultValue: "0",
    },
    {
      name: "nu_dead_animals",
      label: "Mortos (Qtd)",
      kind: "number",
      schema: optionalTextSchema,
      defaultValue: "0",
    },
  ],
} satisfies NotificationSectionDefinition;

const conclusionSection = {
  id: "conclusion",
  title: "Diagnóstico e Conclusão",
  description: "Suspeitas diagnósticas e resultados laboratoriais.",
  columns: 2,
  fields: [
    {
      name: "tp_diagnostic_suspicion",
      label: "28 - 1ª Suspeita Diagnóstica",
      kind: "select",
      schema: z.string().min(1, "Obrigatório"),
      defaultValue: "",
      options: [
        { label: "1 - Raiva", value: "1" },
        { label: "2 - Encefalite Equina", value: "2" },
        { label: "3 - Febre do Vírus do Nilo Ocidental", value: "3" },
        { label: "4 - Encefalite Espongiforme Bovina", value: "4" },
        { label: "5 - Febre Amarela", value: "5" },
        { label: "6 - Influenza Aviária", value: "6" },
        { label: "7 - Outro", value: "7" },
      ],
    },
    {
      name: "st_lab_result",
      label: "29 - Resultado laboratorial",
      kind: "select",
      schema: optionalTextSchema,
      defaultValue: "9",
      options: [
        { label: "1 - Positivo", value: "1" },
        { label: "2 - Negativo", value: "2" },
        { label: "3 - Inconclusivo", value: "3" },
        { label: "9 - Ignorado", value: "9" },
      ],
    },
    {
      name: "ds_observations",
      label: "Observações",
      kind: "textarea",
      schema: optionalTextSchema,
      defaultValue: "",
      fullWidth: true,
    },
    {
      name: "ds_investigator_name",
      label: "Investigador (Nome)",
      kind: "text",
      schema: z.string().min(1, "Nome obrigatório"),
      defaultValue: "",
    },
  ],
} satisfies NotificationSectionDefinition;

const sections = [
  notificationDataSection,
  occurrenceLocationSection,
  labInvestigationSection,
  affectedAnimalsSection,
  conclusionSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const epizootyNotificationDefinition = defineNotificationType({
  id: 10,
  slug: "epizooty",
  label: "Epizootia",
  description: `Formulário para notificação e investigação de epizootias.

Animal ou grupo de animais encontrados doentes e/ou mortos, incluindo ossadas, sem causa definida, quepodem preceder a ocorrência de doenças em humanos.`
  sections,
});
