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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 31, 33 a 35)
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
        {
            name: "main_activity_last_15_days",
            label: "Principal Atividade nos Últimos 15 Dias",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1",  label: "Agricultura" },
            { value: "2",  label: "Pecuária" },
            { value: "3",  label: "Doméstica" },
            { value: "4",  label: "Turismo" },
            { value: "5",  label: "Garimpagem" },
            { value: "6",  label: "Exploração vegetal" },
            { value: "7",  label: "Caça/Pesca" },
            { value: "8",  label: "Const. estrad./Barragens" },
            { value: "9",  label: "Mineração" },
            { value: "10", label: "Viajante" },
            { value: "11", label: "Outros" },
            { value: "12", label: "Motorista" },
            { value: "99", label: "Ignorado" },
            ],
        },
        {
            name: "slide_type",
            label: "Tipo de Lâmina",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "1- BP" },
            { value: "2", label: "2- BA" },
            { value: "3", label: "3- LVC" },
            ],
        },
        {
            name: "symptoms_present",
            label: "Sintomas",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Com Sintomas" },
            { value: "2", label: "Sem Sintomas" },
            ],
        },

    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS DO EXAME (Campo 36 a 39)
// -----------------------------------------------------------------------------

const laboratoryDataSection = {
    id: "laboratory_data",
    title: "Dados do Laboratório",
    description: "Dados do Laboratório",
    columns: 3,
    fields: [
        {
            name: "exam_date",
            label: "Data do Exame",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "exam_result",
            label: "Resultado do Exame",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1",  label: "Negativo" },
            { value: "2",  label: "F" },
            { value: "3",  label: "F+FG " },
            { value: "4",  label: "V" },
            { value: "5",  label: "F+V" },
            { value: "6",  label: "V+FG" },
            { value: "7",  label: "FG" },
            { value: "8",  label: "M" },
            { value: "9",  label: "F+M" },
            { value: "10", label: "O" },
            ],
        },
        {
            name: "parasites_per_mm3",
            label: "Parasitos por mm³",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: "",
        },
        {
            name: "parasitemia_crosses",
            label: "Parasitemia em \"Cruzes\"",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "< +/2 (menor que meia cruz)" },
            { value: "2", label: "+/2 (meia cruz)" },
            { value: "3", label: "+ (uma cruz)" },
            { value: "4", label: "++ (duas cruzes)" },
            { value: "5", label: "+++ (três cruzes)" },
            { value: "6", label: "++++ (quatro cruzes)" },
            ],
        },
    ],

} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 6. TRATAMENTO (Campo 40 a 41)
// -----------------------------------------------------------------------------

const treatmentSection = {
    id: "treatment",
    title: "Tratamento",
    description: "Tratamento",
    columns: 3,
    fields: [
         // ── 40 ── Esquema de Tratamento
        {
            name: "treatment_scheme",
            label: "Esquema de Tratamento (Manual de Terapêutica da Malária)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1",  label: "Pv com Cloroquina 3 dias + Primaquina 7 dias" },
            { value: "2",  label: "Pf com Quinina 3 dias + Doxiciclina 5 dias + Primaquina 6º dia" },
            { value: "3",  label: "Mista Pv+Pf com Mefloquina dose única + Primaquina 7 dias" },
            { value: "4",  label: "Pm com Cloroquina 3 dias" },
            { value: "5",  label: "Pv em crianças com vômitos — Artesunato 4 dias + Primaquina 7 dias" },
            { value: "6",  label: "Pf com Mefloquina dose única + Primaquina 2º dia" },
            { value: "7",  label: "Pf com Quinina 7 dias" },
            { value: "8",  label: "Pf em crianças — Artesunato 4 dias + Mefloquina 3º dia + Primaquina 5º dia" },
            { value: "9",  label: "Mista Pv+Pf com Quinina 3 dias + Doxiciclina 5 dias + Primaquina 7 dias" },
            { value: "10", label: "Prevenção de recaída de Pv com Cloroquina semanal 3 meses" },
            { value: "11", label: "Malária grave e complicada" },
            { value: "12", label: "Pf com Artemeter+Lumerfantrina 3 dias" },
            { value: "99", label: "Outro esquema (por médico)" },
            ],
        },
        {
            name: "treatment_scheme_other_description",
            label: "Descrição de Outro Esquema de Tratamento",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "treatment_start_date",
            label: "Data Início do Tratamento",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
    ],    
    
} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 7. CONCLUSÃO (Campo 42 a 50)
// -----------------------------------------------------------------------------

const conclusionSection = {
    id: "conclusion",
    title: "Conclusão",
    description: "Conclusão",
    columns: 3,
    fields: [
        {
            name: "final_classification",
            label: "Classificação Final",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Confirmado" },
            { value: "2", label: "Descartado" },
            ],
        },
        {
            name: "autochthonous_municipality",
            label: "O Caso é Autóctone do Município de Residência?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "infection_uf",
            label: "UF Provável de Infecção",
            kind: "text",
            schema: z.string().length(2).toUpperCase(),
            defaultValue: "",
        },
        {
            name: "infection_country",
            label: "País Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_municipality",
            label: "Município Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_district",
            label: "Distrito Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_neighborhood",
            label: "Bairro Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_locality",
            label: "Localidade Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "closure_date",
            label: "Data de Encerramento",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
    ],

} satisfies NotificationSectionDefinition;

//Seçao Complementar

const sections = [
    generalSection,
    patientSection,
    residenceSection,
    treatmentSection,
    epidemiologicalbackgroundSection,
    conclusionSection,
    laboratoryDataSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const diphtheriaNotificationDefinition = defineNotificationType({
    id: 10, //alterar id
    slug: "malaria",
    label: "Malária",
    description: "CASO SUSPEITO (área não endêmica):Toda pessoa residente ou que tenha se deslocado para área onde haja transmissão de malária, no período de 8 a 30 dias anterior à data dos primeiros sintomas, e que apresente febre acompanhada ou não dos seguintes sintomas: cefaléia, calafrios, sudorese, cansaço, mialgia; ou toda pessoa testada para malária durante investigação epidemiológica.",
    sections,
});
