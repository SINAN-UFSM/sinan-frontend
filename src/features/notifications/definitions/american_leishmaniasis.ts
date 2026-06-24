import { z } from "zod";

import {
    defineNotificationType,
    educationLevelOptions,
    raceColorOptions,
    sexOptions,
    yesNoUnknownOptions,
    type NotificationSectionDefinition,
} from "@/features/notifications/definitions/shared"

const optionalTextSchema = z.string().optional();

// -----------------------------------------------------------------------------
// 1. DADOS GERAIS (Campos 1 a 7)
// -----------------------------------------------------------------------------
const generalSection = {
    id: "general",
    title: "Dados Gerais",
    description: "Informações básicas da notificação e unidade de saúde. [cite: 6]",
    columns: 3,
    fields: [
        {
            name: "tp_notification",
            label: "Tipo de Notificação",
            kind: "select",
            schema: z.string(),
            defaultValue: "2",
            options: [{ label: "2 - Individual", value: "2" }],
        },
        {
            name: "dt_notification",
            label: "Data da Notificação",
            kind: "date",
            schema: z.string().min(1, "Data obrigatória"),
            defaultValue: "",
        },
        {
            name: "uf_notification",
            label: "UF de Notificação",
            kind: "text",
            schema: z.string().min(2, "UF obrigatória"),
            defaultValue: "",
        },
        {
            name: "city_notification",
            label: "Município de Notificação",
            kind: "text",
            schema: z.string().min(1, "Município obrigatório"),
            defaultValue: "",
        },
        {
            name: "health_unit_name",
            label: "Unidade de Saúde (ou outra fonte notificadora)",
            kind: "text",
            schema: z.string().min(1, "Unidade obrigatória"),
            defaultValue: "",
        },
        {
            name: "dt_first_symptoms",
            label: "Data dos Primeiros Sintomas",
            kind: "date",
            schema: z.string().min(1, "Data obrigatória"),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 2. DADOS DO PACIENTE (Campos 8 a 16 e 31)
// -----------------------------------------------------------------------------
const patientSection = {
    id: "patient",
    title: "Dados do Paciente",
    description: "Identificação e dados sociodemográficos da Notificação Individual. [cite: 5]",
    columns: 3,
    fields: [
        {
            name: "patient_name",
            label: "Nome do Paciente",
            kind: "text",
            schema: z.string().min(3, "Nome obrigatório"),
            defaultValue: "",
        },
        {
            name: "patient_birth_date",
            label: "Data de Nascimento",
            kind: "date",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "patient_age",
            label: "Idade (com código da unidade)",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "sex",
            label: "Sexo",
            kind: "select",
            schema: z.string().min(1, "Sexo obrigatório"),
            defaultValue: "",
            options: sexOptions,
        },
        {
            name: "pregnant",
            label: "Gestante",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "6",
            options: [
                { label: "1 - 1º Trimestre", value: "1" },
                { label: "2 - 2º Trimestre", value: "2" },
                { label: "3 - 3º Trimestre", value: "3" },
                { label: "4 - Idade gestacional ignorada", value: "4" },
                { label: "5 - Não", value: "5" },
                { label: "6 - Não se aplica", value: "6" },
                { label: "9 - Ignorado", value: "9" },
            ],
        },
        {
            name: "race_color",
            label: "Raça/Cor",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: raceColorOptions,
        },
        {
            name: "education_level",
            label: "Escolaridade",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: educationLevelOptions,
        },
        {
            name: "sus_card_number",
            label: "Número do Cartão SUS",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "mother_name",
            label: "Nome da mãe",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "occupation",
            label: "Ocupação",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 3. DADOS DE RESIDÊNCIA (Campos 17 a 30)
// -----------------------------------------------------------------------------
const residenceSection = {
    id: "residence",
    title: "Dados de Residência",
    description: "Informações de endereço de residência do paciente. [cite: 4]",
    columns: 3,
    fields: [
        {
            name: "residence_state",
            label: "UF",
            kind: "text",
            schema: z.string().min(2, "UF obrigatória"),
            defaultValue: "",
        },
        {
            name: "residence_city",
            label: "Município de Residência",
            kind: "text",
            schema: z.string().min(1, "Município obrigatório"),
            defaultValue: "",
        },
        {
            name: "residence_district",
            label: "Distrito",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_neighborhood",
            label: "Bairro",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_street",
            label: "Logradouro (rua, avenida,...)",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_number",
            label: "Número",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_complement",
            label: "Complemento (apto., casa, ...)",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_geo1",
            label: "Geo campo 1",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_geo2",
            label: "Geo campo 2",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_reference",
            label: "Ponto de Referência",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_cep",
            label: "CEP",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_phone",
            label: "(DDD) Telefone",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "residence_zone",
            label: "Zona",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: [
                { label: "1 - Urbana", value: "1" },
                { label: "2 - Rural", value: "2" },
                { label: "3 - Periurbana", value: "3" },
                { label: "9 - Ignorado", value: "9" },
            ],
        },
        {
            name: "residence_country",
            label: "País (se residente fora do Brasil)",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// Dados Complementares do Caso
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 31)
// -----------------------------------------------------------------------------

const epidemiologicalbackgroundSection = {
    id: "background",
    title: "Antecedentes Epidemiológicos",
    description: "Antecedentes Epidemiológicos",
    columns: 3,
    fields: [
        {
            name: "investigation_date",
            label: "Data da Investigação",
            kind: "date",
            schema: z.string().min(2, "Data obrigatória"),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS CLÍNICOS (Campo 33 a 35)
// -----------------------------------------------------------------------------

const clinicalDataSection = {
    id: "clinical_data",
    title: "Dados Clínicos",
    description: "Dados Clínicos",
    columns: 3,
    fields: [
        {
            name: "skin_lesion",
            label: "Presença de Lesão: Cutânea",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "mucosal_lesion",
            label: "Presença de Lesão: Mucosa",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "skin_mucosal",
            label: "Em Caso de Presença de Lesão Mucosa,Há Presença de Cicatrizes Cutâneas?",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "infect_hiv",
            label: "Co-infecção HIV",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 6. DADOS DE LABORATÓRIO (Campo 36 a 38)
// -----------------------------------------------------------------------------

const laboratoryDataSection = {
    id: "laboratory_data",
    title: "Dados do Laboratório",
    description: "Dados do Laboratório",
    columns: 3,
    fields: [
        {
            name: "parasito_Exam",
            label: "Parasitológico Direto",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Positivo", value: "1" },
                { label: "2 - Negativo", value: "2" },
                { label: "3 - Não Realizado", value: "3" },
            ],
        },
        {
            name: "irm",
            label: "IRM",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Positivo", value: "1" },
                { label: "2 - Negativo", value: "2" },
                { label: "3 - Não Realizado", value: "3" },
            ],
        },
        {
            name: "histopathology",
            label: "Histopatologia",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Encontro do Parasit", value: "1" },
                { label: "2 - Compatível", value: "2" },
                { label: "3 - Não Compatível", value: "3" },
                { label: "4 - Não Realizado", value: "4"},
            ],
        },
    ],

} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 7. CASO (Campo 39 a 40)
// -----------------------------------------------------------------------------

const caseSection = {
    id: "case_data",
    title: "Classificação do Caso",
    description: "Classificação do Caso",
    columns: 3,
    fields: [
        {
            name: "input_type",
            label: "Tipo de Entrada",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Caso Novo", value: "1" },
                { label: "2 - Recidiva", value: "2" },
                { label: "3-Transferência", value: "3" },
                { label: "9- Ignorado", value: "9" },
            ],
        },
        {
            name: "clinical_form",
            label: "Forma Clínica",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Cutânea", value: "1" },
                { label: "2 - Mucosa", value: "2" },
                { label: "9- Ignorado", value: "9" },
            ],
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 8. TRATAMENTO (Campo 41 a 46)
// -----------------------------------------------------------------------------

const treatmentSection = {
    id: "treatment",
    title: "Tratamento",
    description: "Tratamento",
    columns: 3,
    fields: [
        {
            name: "treatment_start_date",
            label: "Data do Início do Tratamento",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "initial_drug",
            label: "Droga Inicial Administrada",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Antimonial Pentavalente" },
            { value: "2", label: "Anfotericina b" },
            { value: "3", label: "Pentamidina" },
            { value: "4", label: "Outras" },
            { value: "5", label: "Não Utilizada" },
            ],
        },
        {
            name: "patient_weight_kg",
            label: "Peso (Kg)",
            kind: "number",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "prescribed_dose_sb5",
            label: "Dose Prescrita em mg/kg/dia Sb+5",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Menor que 10" },
            { value: "2", label: "Maior ou igual a 10 e menor que 15" },
            { value: "3", label: "Igual a 15" },
            { value: "4", label: "Maior que 15 e menor que 20" },
            { value: "5", label: "Maior ou igual a 20" },
            ],
        },
        {
            name: "total_vials_prescribed",
            label: "Nº Total de Ampolas Prescritas",
            kind: "number",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "rescue_drug",
            label: "Outra Droga Utilizada na Falência do Tratamento Inicial",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Anfotericina b" },
            { value: "2", label: "Pentamidina" },
            { value: "3", label: "Outros" },
            { value: "4", label: "Não se Aplica" },
            ],
        },
    ],    
    
} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 9. CONSLUSÃO (Campo 47 a 58)
// -----------------------------------------------------------------------------

const conclusionSection = {
    id: "conclusion",
    title: "Conclusão",
    description: "Conclusão",
    columns: 3,
    fields: [
        {
            name: "confirmed_criteria",
            label: "Criterio de Confirmação",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Laboratorial", value: "1" },
                { label: "2 - Clinico-Epidemiologico", value: "2" },
            ],
        },
        {
            name: "class_epid",
            label: "Classificação Epidemiológica",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Autóctone", value: "1" },
                { label: "2 - Importado", value: "2" },
                { label: "3 - Indeterminado", value: "3" },
            ],
        },
        {
            name: "residence_case",
            label: "O caso é autóctone do município de residência?",
            kind: "select",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Indeterminado", value: "3" },
            ],
        },
        {
            name: "infect_source_uf",
            label: "UF (Provável de Fonte de Infecção)",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infect_source_country",
            label: "País (Provável de Fonte de Infecção)",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infect_source_municipality",
            label: "Município (Provável de Fonte de Infecção)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infect_source_district",
            label: "Distrito (Provável de Fonte de Infecção)",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infect_source_address",
            label: "Bairro (Provável de Fonte de Infecção)",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "work_disease",
            label: "Doença Relacionada ao Trabalho",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "case_evolution",
            label: "Evolução do Caso",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { label: "1-Cura ", value: "1" },
                { label: "2-Abandono", value: "2" },
                { label: "3-Óbito por LTA", value: "3" },
                { label: "4-Óbito por outras causas", value: "4" },
                { label: "5-Transferência", value: "5" },
                { label: "6-Mudança de diagnóstico", value: "6" },
            ],
        },
        {
            name: "death_date",
            label: "Data do Óbito",
            kind: "date",
            schema: z.string().min(2, "Data obrigatória"),
            defaultValue: "",
        },
        {
            name: "final_date",
            label: "Data do Encerramento",
            kind: "date",
            schema: z.string().min(2, "Data obrigatória"),
            defaultValue: "",
        },
    ],

} satisfies NotificationSectionDefinition;

// Seção Complementar não contemplada

const sections = [
    generalSection,
    patientSection,
    residenceSection,
    treatmentSection,
    epidemiologicalbackgroundSection,
    clinicalDataSection,
    caseSection,
    conclusionSection,
    laboratoryDataSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const diphtheriaNotificationDefinition = defineNotificationType({
    id: 10, //alterar id
    slug: "american_leishmaniasis",
    label: "Leishmaniose Tegumentar Americana",
    description: "CASO CONFIRMADO:Leishmainiose cutânea: todo indivíduo com presença de úlcera cutânea, com fundo granuloso e bordas infiltradas em moldura,com confirmação por diagnóstico laboratorial ou clínico epidemiológico.Leishmaniose mucosa: todo indivíduo com presença de úlcera na mucosa nasal, com ou sem perfuração ou perda do septonasal, podendo atingir lábios e boca (palato e nasofaringe), com confirmação por diagnóstico laboratorial ou clínico epidemiológico.",
    sections,
});
