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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 32 a 49)
// -----------------------------------------------------------------------------

const epidemiologicalbackgroundSection = {
    id: "background",
    title: "Antecedentes Epidemiológicos",
    description: "Antecedentes Epidemiológicos",
    columns: 3,
    fields: [
        // ── 32 ── Situação no Mercado de Trabalho
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
            name: "accident_location",
            label: "Local Onde Ocorreu o Acidente",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Instalações do contratante" },
            { value: "2", label: "Via pública" },
            { value: "3", label: "Instalações de terceiros" },
            { value: "4", label: "Domicílio próprio" },
            { value: "9", label: "Ignorado" },
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
        {
            name: "main_company_cnae",
            label: "CNAE da Empresa Principal (se terceirizada)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "main_company_cnpj",
            label: "CNPJ da Empresa Principal",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "main_company_name",
            label: "Razão Social da Empresa Principal",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS DO ACIDENTE (Campo 50 a 57)
// -----------------------------------------------------------------------------

const accidentDataSection = {
    id: "accident_data",
    title: "Dados do Acidente",
    description: "Dados do Acidente",
    columns: 3,
    fields: [
        {
            name: "accident_time_hour",
            label: "Hora do Acidente (H)",
            kind: "number",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "accident_time_minutes",
            label: "Hora do Acidente (M)",
            kind: "number",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "hours_after_shift_start_hour",
            label: "Horas Após Início da Jornada (H)",
            kind: "number",
            schema:z.string().min(1, "Campo obrigatório"),
            defaultValue: undefined,
        },
        {
            name: "hours_after_shift_start_minutes",
            label: "Horas Após Início da Jornada (M)",
            kind: "number",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: undefined,
        },
        {
            name: "accident_uf",
            label: "UF de Ocorrência do Acidente",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "accident_municipality",
            label: "Município de Ocorrência do Acidente",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "accident_cause_cid10",
            label: "Código da Causa do Acidente CID-10 (V01 a Y98)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "accident_type",
            label: "Tipo de Acidente",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "other_workers_affected",
            label: "Houve Outros Trabalhadores Atingidos?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "other_workers_affected_count",
            label: "Quantos Trabalhadores Atingidos (se Sim)",
            kind: "number",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. Dados do Atendimento Médico (Campo 58 a 65)
// -----------------------------------------------------------------------------

const medicalCareDataSection = {
    id: "medical_care_data",
    title: "Dados do Atendimento Médico",
    description: "Dados do Atendimento Médico",
    columns: 3,
    fields: [
        {
            name: "medical_care_occurred",
            label: "Ocorreu Atendimento Médico?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "medical_care_date",
            label: "Data do Atendimento",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "medical_care_uf",
            label: "UF do Atendimento",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "medical_care_municipality",
            label: "Município do Atendimento",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "medical_care_unit_name",
            label: "Nome da Unidade de Saúde de Atendimento",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "body_parts_affected",
            label: "Partes do Corpo Atingidas",
            kind: "multi-select",
            schema: z.array(z.string()).min(1, "Selecione ao menos uma opção"),
            defaultValue: [],
            options: [
            { value: "01", label: "Olho" },
            { value: "02", label: "Cabeça" },
            { value: "03", label: "Pescoço" },
            { value: "04", label: "Tórax" },
            { value: "05", label: "Abdome" },
            { value: "06", label: "Mão" },
            { value: "07", label: "Membro superior" },
            { value: "08", label: "Membro inferior" },
            { value: "09", label: "Pé" },
            { value: "10", label: "Todo o corpo" },
            { value: "11", label: "Outro" },
            { value: "99", label: "Ignorado" },
            ],
        },
        {
            name: "injury_diagnosis_cid10",
            label: "Diagnóstico da Lesão (CID-10)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
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
            { value: "3", label: "Ambos" },
            { value: "9", label: "Ignorado" },
            ],
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 6. Conclusão (Campo 66 a 68)
// -----------------------------------------------------------------------------

const conclusionSection = {
    id: "conclusion",
    title: "Conclusão",
    description: "Conclusão",
    columns: 3,
    fields: [
        {
            name: "case_evolution",
            label: "Evolução do Caso",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Cura" },
            { value: "2", label: "Incapacidade temporária" },
            { value: "3", label: "Incapacidade parcial permanente" },
            { value: "4", label: "Incapacidade total permanente" },
            { value: "5", label: "Óbito por acidente de trabalho grave" },
            { value: "6", label: "Óbito por outras causas" },
            { value: "7", label: "Outro" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "death_date",
            label: "Se Óbito, Data do Óbito",
            kind: "date",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "cat_issued",
            label: "Foi Emitida a Comunicação de Acidente no Trabalho (CAT)?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Sim" },
            { value: "2", label: "Não" },
            { value: "3", label: "Não se Aplica"},
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "complementary_info",
            label: "Descrição sumária de como ocorreu o acidente/ atividade/ causas/ condições/ objeto/ agentes que concorreram direta ou indiretamente para a ocorrência do acidente",
            kind: "text",
            schema: optionalTextSchema,
            defaultValue: "",
        },
        {
            name: "complementary_info",
            label: "Outras informações",
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
    accidentDataSection,
    medicalCareDataSection,
    conclusionSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const workAccidentNotificationDefinition = defineNotificationType({
    id: 10,
    slug: "work_accident",
    label: "Acidente de Trabalho",
    description: "Todo caso de acidente de trabalho por causas não naturais compreendidas por acidentes e violências (Capítulo XX da CID-10 V01 a Y98), que ocorrem no ambiente de trabalho ou durante o exercício do trabalho quando o trabalhador estiver realizando atividades relacionadas à sua função, ou a serviço do empregador ou representando os interesses do mesmo (Típico) ou no percurso entre a residência e o trabalho (Trajeto) que provoca lesão corporal ou perturbação funcional, podendo causar a perda ou redução temporária ou permanente da capacidade para o trabalho e morte.",
    sections,
});
