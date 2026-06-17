import { z } from "zod";

import {
    defineNotificationType,
    educationLevelOptions,
    raceColorOptions,
    sexOptions,
    yesNoUnknownOptions,
    type NotificationSectionDefinition,
} from "@/features/notifications/definitions/shared";

const optionalTextSchema = z.string().optional();

const yesNoOptions = [
    { label: "1 - Sim", value: "1" },
    { label: "2 - Não", value: "2" },
];

const yesNoIgnoredOptions = [
    { label: "1 - Sim", value: "1" },
    { label: "2 - Não", value: "2" },
    { label: "9 - Ignorado", value: "9" },
];

const timeUnitOptions = [
    { label: "1 - Hora", value: "1" },
    { label: "2 - Dia", value: "2" },
    { label: "3 - Mês", value: "3" },
    { label: "4 - Ano", value: "4" },
];

// -----------------------------------------------------------------------------
// 1. DADOS GERAIS (Campos 1 a 7)
// -----------------------------------------------------------------------------
const generalSection = {
    id: "general",
    title: "Dados Gerais",
    description: "Informações básicas da notificação e unidade de saúde.",
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
            name: "disease",
            label: "Agravo/doença",
            kind: "select",
            schema: z.string().min(1, "Obrigatório"),
            defaultValue: "dermatose_ocupacional",
            options: [
                { label: "Dermatoses Ocupacionais", value: "dermatose_ocupacional" },
            ],
        },
        {
            name: "cid10",
            label: "Código (CID10)",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "L98.9",
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
            name: "dt_diagnosis",
            label: "Data do Diagnóstico",
            kind: "date",
            schema: z.string().min(1, "Data obrigatória"),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 2. DADOS DO PACIENTE (Campos 8 a 16)
// -----------------------------------------------------------------------------
const patientSection = {
    id: "patient",
    title: "Dados do Paciente",
    description: "Identificação e dados sociodemográficos da Notificação Individual.",
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
            label: "Idade",
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
            options: [
                ...educationLevelOptions,
                { label: "10 - Não se aplica", value: "10" }
            ],
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
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 3. DADOS DE RESIDÊNCIA (Campos 17 a 30)
// -----------------------------------------------------------------------------
const residenceSection = {
    id: "residence",
    title: "Dados de Residência",
    description: "Informações de endereço de residência do paciente.",
    columns: 3,
    fields: [
        { name: "residence_state", label: "UF", kind: "text", schema: z.string().min(2, "UF obrigatória"), defaultValue: "" },
        { name: "residence_city", label: "Município de Residência", kind: "text", schema: z.string().min(1, "Município obrigatório"), defaultValue: "" },
        { name: "residence_district", label: "Distrito", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_neighborhood", label: "Bairro", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_street", label: "Logradouro (rua, avenida,...)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_number", label: "Número", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_complement", label: "Complemento (apto., casa, ...)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_geo1", label: "Geo campo 1", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_geo2", label: "Geo campo 2", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_reference", label: "Ponto de Referência", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_cep", label: "CEP", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "residence_phone", label: "(DDD) Telefone", kind: "text", schema: optionalTextSchema, defaultValue: "" },
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
        { name: "residence_country", label: "País (se residente fora do Brasil)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 4. DADOS COMPLEMENTARES DO CASO (Campos 31 a 33)
// -----------------------------------------------------------------------------
const complementarySection = {
    id: "complementary",
    title: "Dados Complementares do Caso",
    description: "Informações sobre ocupação e mercado de trabalho.",
    columns: 3,
    fields: [
        { name: "occupation", label: "Ocupação", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        {
            name: "work_market_status",
            label: "Situação no Mercado de Trabalho",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "99",
            options: [
                { label: "01 - Empregado registrado com carteira assinada", value: "01" },
                { label: "02 - Empregado não registrado", value: "02" },
                { label: "03 - Autônomo/ conta própria", value: "03" },
                { label: "04 - Servidor público estatuário", value: "04" },
                { label: "05 - Servidor público celetista", value: "05" },
                { label: "06 - Aposentado", value: "06" },
                { label: "07 - Desempregado", value: "07" },
                { label: "08 - Trabalho temporário", value: "08" },
                { label: "09 - Cooperativado", value: "09" },
                { label: "10 - Trabalhador avulso", value: "10" },
                { label: "11 - Empregador", value: "11" },
                { label: "12 - Outros", value: "12" },
                { label: "99 - Ignorado", value: "99" },
            ],
        },
        {
            name: "work_time_unit",
            label: "Tempo de Trabalho na Ocupação (Unidade)",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "",
            options: timeUnitOptions,
        },
        {
            name: "work_time_value",
            label: "Tempo de Trabalho na Ocupação (Valor)",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS DA EMPRESA CONTRATANTE (Campos 34 a 45)
// -----------------------------------------------------------------------------
const companySection = {
    id: "company",
    title: "Dados da Empresa Contratante",
    description: "Informações sobre a empresa onde o paciente trabalha.",
    columns: 3,
    fields: [
        { name: "company_cnpj_cpf", label: "Registro/CNPJ ou CPF", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_name", label: "Nome da Empresa ou Empregador", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_cnae", label: "Atividade Econômica (CNAE)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_state", label: "UF da Empresa", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_city", label: "Município da Empresa", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_district", label: "Distrito", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_neighborhood", label: "Bairro", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_address", label: "Endereço", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_number", label: "Número", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_reference", label: "Ponto de Referência", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "company_phone", label: "(DDD) Telefone", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        {
            name: "company_is_outsourced",
            label: "O Empregador é Empresa Terceirizada",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Não se aplica", value: "3" },
                { label: "9 - Ignorado", value: "9" },
            ],
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 6. AGRAVOS E EXPOSIÇÃO (Campos 46 a 48)
// -----------------------------------------------------------------------------
const exposureSection = {
    id: "exposure",
    title: "Agravos Associados e Exposição",
    description: "Comorbidades, tempo de exposição e regime de tratamento.",
    columns: 3,
    fields: [
        // Agravos Associados
        { name: "aggravation_hypertension", label: "Hipertensão Arterial", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoIgnoredOptions },
        { name: "aggravation_diabetes", label: "Diabetes Mellitus", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoIgnoredOptions },
        { name: "aggravation_leprosy", label: "Hanseníase", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoIgnoredOptions },
        { name: "aggravation_mental_disorder", label: "Transtorno Mental", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoIgnoredOptions },
        { name: "aggravation_tuberculosis", label: "Tuberculose", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoIgnoredOptions },
        { name: "aggravation_asthma", label: "Asma", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoIgnoredOptions },
        { name: "aggravation_others", label: "Outras (Especificar)", kind: "text", schema: optionalTextSchema, defaultValue: "" },

        // Tempo de Exposição e Tratamento
        { name: "exposure_time_unit", label: "Tempo de Exposição ao Agente de Risco (Unidade)", kind: "select", schema: optionalTextSchema, defaultValue: "", options: timeUnitOptions },
        { name: "exposure_time_value", label: "Tempo de Exposição ao Agente de Risco (Valor)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        {
            name: "treatment_regimen",
            label: "Regime de Tratamento",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "",
            options: [
                { label: "1 - Hospitalar", value: "1" },
                { label: "2 - Ambulatorial", value: "2" },
            ],
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 7. DERMATOSES OCUPACIONAIS ESPECÍFICOS (Campos 49 a 57)
// -----------------------------------------------------------------------------
const dermatosisSection = {
    id: "dermatosis",
    title: "Doença Relacionada ao Trabalho / Dermatoses Ocupacionais",
    description: "Agente causador, lesões, diagnóstico e conduta adotada.",
    columns: 3,
    fields: [
        {
            name: "main_agent",
            label: "Principal Agente Causador da Dermatose",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "99",
            options: [
                { label: "01 - Cimento", value: "01" },
                { label: "02 - Borracha", value: "02" },
                { label: "03 - Plástico", value: "03" },
                { label: "04 - Solventes Orgânicos", value: "04" },
                { label: "05 - Graxas", value: "05" },
                { label: "06 - Óleo de Corte", value: "06" },
                { label: "07 - Resinas", value: "07" },
                { label: "08 - Níquel", value: "08" },
                { label: "09 - Cosméticos", value: "09" },
                { label: "10 - Madeiras", value: "10" },
                { label: "11 - Cromo", value: "11" },
                { label: "12 - Outros", value: "12" },
                { label: "99 - Ignorado", value: "99" },
            ],
        },
        {
            name: "lesion_location",
            label: "Localização da lesão (parte do corpo atingida)",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "99",
            options: [
                { label: "01 - Mão", value: "01" },
                { label: "02 - Membro superior", value: "02" },
                { label: "03 - Cabeça", value: "03" },
                { label: "04 - Pescoço", value: "04" },
                { label: "05 - Tórax", value: "05" },
                { label: "06 - Abdome", value: "06" },
                { label: "07 - Membro inferior", value: "07" },
                { label: "08 - Pé", value: "08" },
                { label: "09 - Todo o corpo", value: "09" },
                { label: "10 - Outro", value: "10" },
                { label: "99 - Ignorado", value: "99" },
            ],
        },
        { name: "patch_test_positive", label: "Teste epicutâneo positivo", kind: "select", schema: optionalTextSchema, defaultValue: "9", options: yesNoIgnoredOptions },
        { name: "specific_diagnosis", label: "Diagnóstico Específico", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "specific_diagnosis_cid10", label: "CID 10 (Específico)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        { name: "work_leave", label: "Houve afastamento do trabalho para tratamento?", kind: "select", schema: optionalTextSchema, defaultValue: "9", options: yesNoIgnoredOptions },
        { name: "leave_time_unit", label: "Tempo de Afastamento (Unidade)", kind: "select", schema: optionalTextSchema, defaultValue: "", options: timeUnitOptions },
        { name: "leave_time_value", label: "Tempo de Afastamento (Valor)", kind: "text", schema: optionalTextSchema, defaultValue: "" },
        {
            name: "condition_with_leave",
            label: "Com Afastamento do Trabalho",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: [
                { label: "1 - Melhora", value: "1" },
                { label: "2 - Piora", value: "2" },
                { label: "9 - Ignorado", value: "9" },
            ],
        },
        { name: "other_workers_affected", label: "Há ou Houve Outros Trabalhadores com a mesma Doença no Local?", kind: "select", schema: optionalTextSchema, defaultValue: "9", options: yesNoIgnoredOptions },

        // Conduta Geral
        { name: "conduct_remove_agent", label: "Afastamento do agente do risco com mudança de função/posto", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
        { name: "conduct_org_change", label: "Adoção de mudança na organização do trabalho", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
        { name: "conduct_collective_protection", label: "Adoção de proteção coletiva", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
        { name: "conduct_remove_location", label: "Afastamento do local de trabalho", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
        { name: "conduct_individual_protection", label: "Adoção de proteção individual", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
        { name: "conduct_none", label: "Nenhum", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
        { name: "conduct_others", label: "Outros", kind: "select", schema: optionalTextSchema, defaultValue: "", options: yesNoOptions },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 8. CONCLUSÃO (Campos 58 a 60)
// -----------------------------------------------------------------------------
const conclusionSection = {
    id: "conclusion",
    title: "Conclusão",
    description: "Evolução do caso e informações complementares.",
    columns: 3,
    fields: [
        {
            name: "case_evolution",
            label: "Evolução do Caso",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: [
                { label: "1 - Cura", value: "1" },
                { label: "2 - Cura não confirmada", value: "2" },
                { label: "3 - Incapacidade Temporária", value: "3" },
                { label: "4 - Incapacidade Permanente Parcial", value: "4" },
                { label: "5 - Incapacidade Permanente Total", value: "5" },
                { label: "6 - Óbito por doença relacionada ao trabalho", value: "6" },
                { label: "7 - Óbito por Outra Causa", value: "7" },
                { label: "8 - Outro", value: "8" },
                { label: "9 - Ignorado", value: "9" },
            ],
        },
        {
            name: "dt_death",
            label: "Data do óbito",
            kind: "date",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "cat_issued",
            label: "Foi emitida a Comunicação de Acidente do Trabalho (CAT)",
            kind: "select",
            schema: optionalTextSchema,
            defaultValue: "9",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Não se aplica", value: "3" },
                { label: "9 - Ignorado", value: "9" },
            ],
        },
        {
            name: "additional_observations",
            label: "Informações complementares e observações",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

const sections = [
    generalSection,
    patientSection,
    residenceSection,
    complementarySection,
    companySection,
    exposureSection,
    dermatosisSection,
    conclusionSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const occupationalDermatosesNotificationDefinition = defineNotificationType({
    id: 10,
    slug: "occupational_dermatoses",
    label: "Dermatoses Ocupacionais",
    description: `Toda alteração da pele, mucosas e anexos, direta ou indiretamente causadas, mantidas ou agravadas pelo trabalho, relacionadas à exposição a agentes químicos, biológicos ou físicos, e ainda a quadros psíquicos, podendo ocasionar afecções do tipo irritativa (a maioria) ou sensibilizante, que foi confirmado por critérios clínicos, epidemiológicos ou laboratoriais.`,
    sections,
});