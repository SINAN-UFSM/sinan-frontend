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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 31, 33 e 34)
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
            name: "risk_flood_water_mud",
            label: "Contato/Limpeza: Água ou Lama de Enchente",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_cesspool_grease_sewer",
            label: "Contato/Limpeza: Fossa, Caixa de Gordura ou Esgoto",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_river_stream_lake",
            label: "Contato/Limpeza: Rio, Córrego, Lagoa ou Represa",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_vacant_lot",
            label: "Contato/Limpeza: Terreno Baldio",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_animal_breeding",
            label: "Contato/Limpeza: Criação de Animais",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_rodent_signs_location",
            label: "Contato/Limpeza: Local com Sinais de Roedores",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_direct_rodents",
            label: "Contato/Limpeza: Roedores Diretamente",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_garbage_rubble",
            label: "Contato/Limpeza: Lixo/Entulho",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_water_tank",
            label: "Contato/Limpeza: Caixa d'Água",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_planting_harvest",
            label: "Contato/Limpeza: Plantio/Colheita (Lavoura)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_grain_food_storage",
            label: "Contato/Limpeza: Armazenamento de Grãos/Alimentos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_other",
            label: "Outras Situações de Risco",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "risk_other_description",
            label: "Descrição de Outras Situações de Risco",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "previous_human_cases",
            label: "Casos Anteriores de Leptospirose — Casos Humanos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "previous_animal_cases",
            label: "Casos Anteriores de Leptospirose — Casos Animais",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS CLÍNICOS (Campo 35 a 36)
// -----------------------------------------------------------------------------

const clinicalDataSection = {
    id: "clinical_data",
    title: "Dados Clínicos",
    description: "Dados Clínicos",
    columns: 3,
    fields: [
        {
            name: "care_date",
            label: "Data de Atendimento",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "symptom_fever",
            label: "Febre",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_conjunctival_congestion",
            label: "Congestão Conjuntival",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_jaundice",
            label: "Icterícia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_pulmonary_hemorrhage",
            label: "Hemorragia Pulmonar",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_myalgia",
            label: "Mialgia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_calf_pain",
            label: "Dor na Panturrilha",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_renal_insufficiency",
            label: "Insuficiência Renal",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_other_hemorrhages",
            label: "Outras Hemorragias",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_headache",
            label: "Cefaléia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_vomiting",
            label: "Vômito",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_respiratory_changes",
            label: "Alterações Respiratórias",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_meningism",
            label: "Meningismo",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_prostration",
            label: "Prostração",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_diarrhea",
            label: "Diarréia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_cardiac_changes",
            label: "Alterações Cardíacas",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_other",
            label: "Outros Sinais e Sintomas",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_other_description",
            label: "Descrição de Outros Sinais e Sintomas",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 6. ATENDIMENTO (Campo 37 a 42)
// -----------------------------------------------------------------------------

const treatmentSection = {
    id: "treatment",
    title: "Atendimento",
    description: "Atendimento",
    columns: 3,
    fields: [
         {
            name: "hospitalization_occurred",
            label: "Ocorreu Hospitalização?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "hospitalization_date",
            label: "Data da Internação",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "discharge_date",
            label: "Data de Alta",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "hospital_uf",
            label: "UF do Hospital",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "hospital_municipality",
            label: "Município do Hospital",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "hospital_name",
            label: "Nome do Hospital",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
    ],    
    
} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 7. DADOS DE LABORATÓRIO (Campo 43 a 60)
// -----------------------------------------------------------------------------

const laboratoryDataSection = {
    id: "laboratory_data",
    title: "Dados do Laboratório",
    description: "Dados do Laboratório",
    columns: 3,
    fields: [
         {
            name: "elisa_igm_s1_collection_date",
            label: "Sorologia IgM ELISA - Data da Coleta 1ª Amostra",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "elisa_igm_s1_result",
            label: "Sorologia IgM ELISA - Resultado 1ª Amostra",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Reagente" },
                { value: "2", label: "Não Reagente" },
                { value: "3", label: "Inconclusivo" },
                { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "elisa_igm_s2_collection_date",
            label: "Sorologia IgM ELISA - Data da Coleta 2ª Amostra",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "elisa_igm_s2_result",
            label: "Sorologia IgM ELISA - Resultado 2ª Amostra",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Reagente" },
                { value: "2", label: "Não Reagente" },
                { value: "3", label: "Inconclusivo" },
                { value: "4", label: "Não Realizado" },
            ],
        },
        // Microaglutinação 
        {
            name: "micro_s1_collection_date",
            label: "Microaglutinação - Data da Coleta 1ª Amostra",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "micro_s1_serovar_1",
            label: "Microaglutinação 1ª Amostra - 1º Sorovar",
            kind: "checkbox",
            schema: z.boolean(),
            defaultValue: false,
        },
        {
            name: "micro_s1_titer_1",
            label: "Microaglutinação 1ª Amostra - Título do 1º Sorovar",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "micro_s1_serovar_2",
            label: "Microaglutinação 1ª Amostra - 2º Sorovar",
            kind: "checkbox",
            schema: z.boolean(),
            defaultValue: false,
        },
        {
            name: "micro_s1_titer_2",
            label: "Microaglutinação 1ª Amostra - Título do 2º Sorovar",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "micro_s1_result",
            label: "Resultado Microaglutinação 1ª Amostra",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Reagente" },
                { value: "2", label: "Não Reagente" },
                { value: "3", label: "Não Realizada" },
                { value: "9", label: "Ignorado" },
                ],
        },
        {
            name: "micro_s2_collection_date",
            label: "Microaglutinação - Data da Coleta 2ª Amostra",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "micro_s2_serovar_1",
            label: "Microaglutinação 2ª Amostra - 1º Sorovar",
            kind: "checkbox",
            schema: z.boolean(),
            defaultValue: false,
        },
        {
            name: "micro_s2_titer_1",
            label: "Microaglutinação 2ª Amostra - Título do 1º Sorovar",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "micro_s2_serovar_2",
            label: "Microaglutinação 2ª Amostra - 2º Sorovar",
            kind: "checkbox",
            schema: z.boolean(),
            defaultValue: false,
        },
        {
            name: "micro_s2_titer_2",
            label: "Microaglutinação 2ª Amostra - Título do 2º Sorovar",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "micro_s2_result",
            label: "Resultado Microaglutinação 2ª Amostra",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Reagente" },
                { value: "2", label: "Não Reagente" },
                { value: "3", label: "Não Realizada" },
                { value: "9", label: "Ignorado" },
            ],
        },

        // Isolamento 
        {
            name: "isolation_collection_date",
            label: "Isolamento - Data da Coleta",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "isolation_result",
            label: "Isolamento - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Inconclusivo" },
                { value: "4", label: "Não Realizado" },
            ],
        },

        //  Imunohistoquímica
        {
            name: "immunohistochemistry_collection_date",
            label: "Imunohistoquímica - Data da Coleta",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "immunohistochemistry_result",
            label: "Imunohistoquímica - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Inconclusivo" },
                { value: "4", label: "Não Realizado" },
            ],
        },

        // RT-PCR 
        {
            name: "rt_pcr_collection_date",
            label: "RT-PCR - Data da Coleta",
            kind: "date",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "rt_pcr_result",
            label: "RT-PCR - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Inconclusivo" },
                { value: "4", label: "Não Realizado" },
            ],
        },
    ],

} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 8. CONSLUSÃO (Campo 61 a 74)
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
            name: "confirmation_criteria",
            label: "Critério de Confirmação ou Descarte",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Clínico-Laboratorial" },
            { value: "2", label: "Clínico-Epidemiológico" },
            ],
        },
        {
            name: "autochthonous_municipality",
            label: "O Caso é Autóctone do Município de Residência?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Sim" },
            { value: "2", label: "Não" },
            { value: "3", label: "Indeterminado" },
            ],
        },
        {
            name: "infection_uf",
            label: "UF do Local Provável de Infecção",
            kind: "text",
            schema: z.string().length(2).toUpperCase(),
            defaultValue: "",
        },
        {
            name: "infection_country",
            label: "País do Local Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_municipality",
            label: "Município do Local Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_district",
            label: "Distrito do Local Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_neighborhood",
            label: "Bairro do Local Provável de Infecção",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "infection_area_type",
            label: "Área Provável de Infecção",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Urbana" },
            { value: "2", label: "Rural" },
            { value: "3", label: "Peri-Urbana" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "infection_environment",
            label: "Ambiente da Infecção",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Domiciliar" },
            { value: "2", label: "Trabalho" },
            { value: "3", label: "Lazer" },
            { value: "4", label: "Outro" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "work_related_disease",
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
            { value: "1", label: "Cura" },
            { value: "2", label: "Óbito por Leptospirose" },
            { value: "3", label: "Óbito por Outras Causas" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "death_date",
            label: "Data do Óbito",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "closure_date",
            label: "Data do Encerramento",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
    ],

} satisfies NotificationSectionDefinition;


//Seção Complementar

const sections = [
    generalSection,
    patientSection,
    residenceSection,
    treatmentSection,
    epidemiologicalbackgroundSection,
    clinicalDataSection,
    conclusionSection,
    laboratoryDataSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const diphtheriaNotificationDefinition = defineNotificationType({
    id: 10, //alterar id
    slug: "leptospirosis",
    label: "Leptospirose",
    description: "",
    sections,
});
