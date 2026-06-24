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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 31 a 40)
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
            name: "displacement",
            label: "Deslocamento (viagens para áreas infestadas até 120 dias antes do início dos sintomas)",
            kind: "text",
            schema: z.string().min(2, "Município e UF Obrigatórios"),
            defaultValue: "",
        },
        {
            name: "triatomine_bugs_in_home",
            label: "Presença de Vestígios de Triatomídeos Intra-Domicílio",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Não Realizado", value: "3" },
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "remains_found",
            label: "Data de encontro dos vestígios",
            kind: "Date",
            schema: z.string().min(2, "Data Obrigatória"),
            defaultValue: "",
        },
        {
            name: "blood_use_history",
            label: "História de Uso de Sangue ou Hemoderivados nos Últimos 120 Dias",
            kind: "select",
            schema: z.string().min(2, "Campo Obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "serological_control",
            label: "Existência de Controle Sorológico na Unidade de Hemoterapia",
            kind: "select",
            schema: z.string().min(2, "Campo Obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Não Realizado", value: "3" },
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "contact_material_cruzi",
            label: "Manipulação/Contato de Material com T. cruzi",
            kind: "select",
            schema: z.string().min(2, "Campo Obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Não Realizado", value: "3" },
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "mother_hagas_disease",
            label: "Menor ou igual a 9 meses de idade: Mãe com Infecção Chagásica",
            kind: "select",
            schema: z.string().min(2, "Campo Obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Sim", value: "1" },
                { label: "2 - Não", value: "2" },
                { label: "3 - Não Realizado", value: "3" },
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "oral_transmission",
            label: "Possibilidade de transmissão por via oral",
            kind: "select",
            schema: z.string().min(2, "Campo Obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS CLÍNICOS (Campo 41)
// -----------------------------------------------------------------------------

const clinicalDataSection = {
    id: "clinical_data",
    title: "Dados Clínicos",
    description: "Dados Clínicos",
    columns: 3,
    fields: [
        {
            name: "assintomatic",
            label: "Assintomático",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "persistent_fever",
            label: "Febre Persistente",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "face_limb_edema",
            label: "Edema de Face/Membros",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "hepatomegaly",
            label: "Hepatomegalia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "splenomegaly",
            label: "Esplenomegalia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "chagoma_romana_sign",
            label: "Chagoma de Inoculação/Sinal de Romaña",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "polyadenopathy",
            label: "Poliadenopatia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "asthenia",
            label: "Astenia",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "icc_signs",
            label: "Sinais de ICC",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "tachycardia_arrhythmia",
            label: "Taquicardia Persistente/Arritmias",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "meningoencephalitis_signs",
            label: "Sinais de Meningoencefalite",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "other_symptoms",
            label: "Outros",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 6. DADOS DE LABORATÓRIO (Campo 42 a 52)
// -----------------------------------------------------------------------------

const laboratoryDataSection = {
    id: "laboratory_data",
    title: "Dados do Laboratório",
    description: "Dados do Laboratório",
    columns: 3,
    fields: [
        {
            name: "collection_date",
            label: "Data da Coleta",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "parasitological_direct_fresh_exam",
            label: "Exame a Fresco / Gota Espessa / Esfregaço",
            kind: "select",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Não Realizado" },
            ],
        },
        {
            name: "parasitological_direct_strout",
            label: "Strout / Microhematócrito / QBC",
            kind: "select",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Não Realizado" },
            ],
        },
        {
            name: "parasitological_direct_other",
            label: "Outro (Parasitológico Direto)",
            kind: "select",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Não Realizado" },
            ],
        },
        {
            name: "collection_date_parasito_indirect",
            label: "Data da Coleta (Parasitológico Indireto)",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "parasitological_indirect_xenodiagnosis",
            label: "Xenodiagnóstico",
            kind: "select",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Não Realizado" },
            ],
        },
        {
            name: "parasitological_indirect_hemoculture",
            label: "Hemocultivo",
            kind: "select",
            schema:  z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "Positivo" },
                { value: "2", label: "Negativo" },
                { value: "3", label: "Não Realizado" },
            ],
        },
        {
            name: "collection_date_elisa_s1",
            label: "Data da Coleta S1 (ELISA)",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "collection_date_elisa_s2",
            label: "Data da Coleta S2 (ELISA)",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "elisa_igm_s1",
            label: "ELISA IgM S1",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "elisa_igm_s2",
            label: "ELISA IgM S2",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "elisa_igg_s1",
            label: "ELISA IgG S1",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "elisa_igg_s2",
            label: "ELISA IgG S2",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "hemagglutination_igm_s1",
            label: "Hemaglutinação IgM S1",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "hemagglutination_igm_s2",
            label: "Hemaglutinação IgM S2",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "hemagglutination_igg_s1",
            label: "Hemaglutinação IgG S1",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "hemagglutination_igg_s2",
            label: "Hemaglutinação IgG S2",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "ifi_igm_s1_result",
            label: "Imunofluorescência Indireta (IFI) IgM S1 - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ]
        },
        {
            name: "ifi_igm_s1_titer",
            label: "IFI IgM S1 - Título",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "ifi_igm_s2_result",
            label: "IFI IgM S2 - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "ifi_igm_s2_titer",
            label: "IFI IgM S2 - Título",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "ifi_igg_s1_result",
            label: "IFI IgG S1 - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "ifi_igg_s1_titer",
            label: "IFI IgG S1 - Título",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "ifi_igg_s2_result",
            label: "IFI IgG S2 - Resultado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Reagente" },
            { value: "2", label: "Não-Reagente" },
            { value: "3", label: "Inconclusivo" },
            { value: "4", label: "Não Realizado" },
            ],
        },
        {
            name: "ifi_igg_s2_titer",
            label: "IFI IgG S2 - Título",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "collection_date_histopathology",
            label: "Data da Coleta do Histopatológico",
            kind: "date",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "histopathology_result",
            label: "Resultado do Histopatológico (Biópsia/Necropsia)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Positivo" },
            { value: "2", label: "Negativo" },
            { value: "3", label: "Não Realizado" },
            { value: "9", label: "Ignorado" },
            ],
        },
    ],

} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 7. TRATAMENTO (Campo 53 a 55)
// -----------------------------------------------------------------------------

const treatmentSection = {
    id: "treatment",
    title: "Tratamento",
    description: "Tratamento",
    columns: 3,
    fields: [
        {
            name: "treatment_specific",
            label: "Tratamento Específico",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "treatment_symptomatic",
            label: "Tratamento Sintomático",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "specific_treatment_drug",
            label: "Droga Utilizada no Tratamento Específico",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Benznidazol" },
            { value: "2", label: "Outro" },
            ],
        },
        {
            name: "treatment_duration_days",
            label: "Tempo de Tratamento (em dias)",
            kind: "number",
            schema:  z.string().min(1, "Número obrigatório"),
            defaultValue: "",
        }
    ],    
    
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 8. MEDIDAS DE CONTROLE (Campo 56)
// -----------------------------------------------------------------------------

const controlMeasureSection = {
    id: "control_measure",
    title: "Medidas de Controle",
    description: "Medidas de Controle",
    columns: 3,
    fields: [
        {
            name: "control_triatomid",
            label: "Controle de Triatomídeos",
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
            name: "control_hemotherapy_inspection",
            label: "Fiscalização Sanitária em Unidade de Hemoterapia",
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
            name: "control_biosafety_lab",
            label: "Implantação de Normas de Biossegurança em Laboratório",
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
            name: "control_other",
            label: "Outros (Medidas de Controle)",
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
// 10. CONSLUSÃO (Campo 57 a 70)
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
            label: "Critério de Confirmação/Descarte",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Laboratório" },
            { value: "2", label: "Clínico-Epidemiológico" },
            { value: "3", label: "Clínico" },
            ],
        },
        {
            name: "case_evolution",
            label: "Evolução do Caso",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Vivo" },
            { value: "2", label: "Óbito por D. Chagas Aguda" },
            { value: "3", label: "Óbito por outras causas" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "death_date",
            label: "Data do Óbito",
            kind: "date",
            schema: z.string().min(1, "Data obrigatório"),
            defaultValue: "",
        },
        {
            name: "probable_infection_mode",
            label: "Modo Provável da Infecção",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Transfusional" },
            { value: "2", label: "Vetorial" },
            { value: "3", label: "Vertical" },
            { value: "4", label: "Acidental" },
            { value: "5", label: "Oral" },
            { value: "6", label: "Outra" },
            { value: "9", label: "Ignorada" },
            ],
        },
        {
            name: "probable_infection_mode_other",
            label: "Outro Modo de Infecção (especificar)",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "probable_infection_location",
            label: "Local Provável da Infecção (no período de 120 dias)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Unidade de Hemoterapia" },
            { value: "2", label: "Domicílio" },
            { value: "3", label: "Laboratório" },
            { value: "4", label: "Outro" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "autochthonous_municipality",
            label: "O caso é autóctone do município de residência?",
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
            label: "UF (Local Provável da Infecção)",
            kind: "text",
            schema: z.string().min(1, "UF obrigatório"),
            defaultValue: "",
        },
        {
            name: "infection_country",
            label: "País (Local Provável da Infecção)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infection_municipality",
            label: "Município (Local Provável da Infecção)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infection_district",
            label: "Distrito (Local Provável da Infecção)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
        },
        {
            name: "infection_neighborhood",
            label: "Bairro (Local Provável da Infecção)",
            kind: "text",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
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
            name: "closure_date",
            label: "Data do Encerramento",
            kind: "date",
            schema: z.string().min(1, "Data obrigatória"),
            defaultValue: "",
        },
        {
            name: "complementary_info",
            label: "Observações",
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
    treatmentSection,
    epidemiologicalbackgroundSection,
    clinicalDataSection,
    conclusionSection,
    controlMeasureSection,
    laboratoryDataSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const chagasNotificationDefinition = defineNotificationType({
    id: 10,
    slug: "chagas_disease",
    label: "Doença de Chagas",
    description: "CASO SUSPEITO: - Febre prolongada (>7 dias) e quadro clínico sugestivo de DCA, na presença de dados epidemiológicos compatíveis, como: residente ou visitante de área com ocorrência de triatomíneos; ou antecedente recente de transfusão sanguínea ou transplante de órgão; ou ingestão de alimento suspeito de contaminação pelo T.cruzi; ou recém nascido de mãe infectada. CASO CONFIRMADO: a- Critério laboratorial: paciente com exame parasitológico direto positivo com ou sem sintomas OU sorologia positiva com anticorpos anti T. cruzi classe IgM no sangue periférico OU sorologia positiva com anticorpos da classe IgG, com alteração na concentração de pelo menos três títulos em um intervalo mínimo de 21 dias em amostras pareadas OU achados necroscópicos positivos. b- Critério clínico-epidemiológico: vínculo epidemiológico com casos confirmados de DCA em surtos da doença",
    sections,
});
