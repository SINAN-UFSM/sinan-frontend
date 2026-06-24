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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 32 a 45)
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 32 a 49)
// -----------------------------------------------------------------------------

const epidemiologicalbackgroundSection = {
    id: "background",
    title: "Antecedentes Epidemiológicos",
    description: "Antecedentes Epidemiológicos",
    columns: 3,
    fields: [
        {
            name: "labor_market_status",
            label: "Situação no Mercado de Trabalho",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "01", label: "Empregado registrado com carteira assinada" },
            { value: "02", label: "Empregado não registrado" },
            { value: "03", label: "Autônomo / conta própria" },
            { value: "04", label: "Servidor público estatutário" },
            { value: "05", label: "Servidor público celetista" },
            { value: "06", label: "Aposentado" },
            { value: "07", label: "Desempregado" },
            { value: "08", label: "Trabalho temporário" },
            { value: "09", label: "Cooperativado" },
            { value: "10", label: "Trabalhador avulso" },
            { value: "11", label: "Empregador" },
            { value: "12", label: "Outros" },
            { value: "99", label: "Ignorado" },
            ],
        },
        {
            name: "occupation_time_value",
            label: "Tempo de Trabalho na Ocupação (valor)",
            kind: "number",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "occupation_time_unit",
            label: "Tempo de Trabalho na Ocupação (unidade)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Hora" },
            { value: "2", label: "Dia" },
            { value: "3", label: "Mês" },
            { value: "4", label: "Ano" },
            ],
        },
        {
            name: "employer_cnpj_cpf",
            label: "Registro / CNPJ ou CPF da Empresa Contratante",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_name",
            label: "Nome da Empresa ou Empregador",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_cnae",
            label: "Atividade Econômica (CNAE)",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_uf",
            label: "UF da Empresa Contratante",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_municipality",
            label: "Município da Empresa Contratante",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_district",
            label: "Distrito da Empresa Contratante",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_neighborhood",
            label: "Bairro da Empresa Contratante",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_address",
            label: "Endereço da Empresa Contratante",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_address_number",
            label: "Número do Endereço",
            kind: "text",
            schema: z.string().min(1, "Número obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_address_reference",
            label: "Ponto de Referência",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "employer_phone",
            label: "Telefone (DDD) da Empresa Contratante",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "is_outsourced_company",
            label: "O Empregador é Empresa Terceirizada?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Sim" },
            { value: "2", label: "Não" },
            { value: "3", label: "Não se Aplica" },
            { value: "9", label: "Ignorado" },
            ],
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. Câncer relacionado ao trabalho (Campo 46 a 51)
// -----------------------------------------------------------------------------

const cancerWorkDataSection = {
    id: "cancer_work",
    title: "Câncer relacionado ao Trbalho",
    description: "Câncer relacionado ao Trbalho",
    columns: 3,
    fields: [
        {
            name: "risk_exposure_time_value",
            label: "Tempo de Exposição ao Agente de Risco (valor)",
            kind: "number",
            schema: z.number().int().positive(),
            defaultValue: "",
        },
        {
            name: "risk_exposure_time_unit",
            label: "Tempo de Exposição ao Agente de Risco (unidade)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Hora" },
            { value: "2", label: "Dia" },
            { value: "3", label: "Mês" },
            { value: "4", label: "Ano" },
            ],
        },
        {
            name: "treatment_regime",
            label: "Regime de Tratamento",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Hospitalar" },
            { value: "2", label: "Ambulatorial" },
            ],
        },
        {
            name: "specific_diagnosis_cid10",
            label: "Diagnóstico Específico (CID-10)",
            kind: "text",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "exposure_asbestos",
            label: "Exposição: Asbesto ou Amianto",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,

        },
        {
            name: "exposure_silica_arsenic",
            label: "Exposição: Sílica Livre, Arsênio e seus Compostos Arsenicais",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_aromatic_amines",
            label: "Exposição: Aminas Aromáticas",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_benzene",
            label: "Exposição: Benzeno ou seus Homólogos Tóxicos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_coal_tar",
            label: "Exposição: Alcatrão, Breu, Betume, Hulha Mineral, Parafina e Resíduos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_aliphatic_hydrocarbons",
            label: "Exposição: Hidrocarbonetos Alifáticos ou Aromáticos (derivados halogenados tóxicos)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_mineral_oils",
            label: "Exposição: Óleos Minerais",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_beryllium",
            label: "Exposição: Berílio e seus Compostos Tóxicos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_cadmium",
            label: "Exposição: Cádmio ou seus Compostos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_chromium",
            label: "Exposição: Cromo ou seus Compostos Tóxicos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_nickel",
            label: "Exposição: Compostos de Níquel",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_ionizing_radiation",
            label: "Exposição: Radiações Ionizantes",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_non_ionizing_radiation",
            label: "Exposição: Radiações Não Ionizantes",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_hormones",
            label: "Exposição: Hormônios",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_antineoplastics",
            label: "Exposição: Antineoplásicos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_other",
            label: "Exposição: Outros",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "exposure_other_description",
            label: "Descrição de Outra Exposição",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "smoking_habit",
            label: "Hábito de Fumar",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Sim" },
            { value: "2", label: "Não" },
            { value: "3", label: "Ex-fumante" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "tobacco_exposure_time_value",
            label: "Tempo de Exposição ao Tabaco (valor)",
            kind: "number",
            schema: z.number().int().positive(),
            defaultValue: "",
        },
        {
            name: "tobacco_exposure_time_unit",
            label: "Tempo de Exposição ao Tabaco (unidade)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Hora" },
            { value: "2", label: "Dia" },
            { value: "3", label: "Mês" },
            { value: "4", label: "Ano" },
            ],
        },
    ],

} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 6. Conclusão (Campo 52 a 55)
// -----------------------------------------------------------------------------

const conclusionSection = {
    id: "conclusion",
    title: "Conclusão",
    description: "Conclusão",
    columns: 3,
    fields: [
        {
            name: "other_workers_same_disease",
            label: "Há ou Houve Outros Trabalhadores com a Mesma Doença no Local de Trabalho?",
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
            { value: "1", label: "Sem evidência da doença (remissão completa)" },
            { value: "2", label: "Remissão parcial" },
            { value: "3", label: "Doença estável" },
            { value: "4", label: "Doença em progressão" },
            { value: "5", label: "Fora de possibilidade terapêutica" },
            { value: "6", label: "Óbito por câncer relacionado ao trabalho" },
            { value: "7", label: "Óbito por outras causas" },
            { value: "8", label: "Não se aplica" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "death_date",
            label: "Se Óbito, Data do Óbito",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "cat_issued",
            label: "Foi Emitida a Comunicação de Acidente do Trabalho (CAT)?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Sim" },
            { value: "2", label: "Não" },
            { value: "3", label: "Não se Aplica" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "complementary_info",
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
    epidemiologicalbackgroundSection,
    cancerWorkDataSection,
    conclusionSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const workCancerNotificationDefinition = defineNotificationType({
    id: 10,
    slug: "cancer_work",
    label: "Câncer relacionado ao Trbalho",
    description: "Definição de caso: Todo caso de câncer que tem entre seus elementos causais a exposição a fatores, agentes e situações de risco presentes no ambiente e processo de trabalho, mesmo após a cessação da exposição.",
    sections,
});
