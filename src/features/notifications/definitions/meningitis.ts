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
            name: "meningitis",
            label: "Meningite",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "DOENÇA MENINGOCÓCICA" },
                { value: "2", label: "OUTRAS MENINGITES" },
            ],
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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 31, 33 a 39)
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

        // Polissacarídica A/C
        {
            name: "vaccine_polysaccharide_ac",
            label: "Vacina Polissacarídica A/C",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_polysaccharide_ac_doses",
            label: "Polissacarídica A/C - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_polysaccharide_ac_last_dose_date",
            label: "Polissacarídica A/C - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // Polissacarídica B/C
        {
            name: "vaccine_polysaccharide_bc",
            label: "Vacina Polissacarídica B/C",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_polysaccharide_bc_doses",
            label: "Polissacarídica B/C - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_polysaccharide_bc_last_dose_date",
            label: "Polissacarídica B/C - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // Conjugada Meningo C
        {
            name: "vaccine_meningoc_c",
            label: "Vacina Conjugada Meningo C",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_meningoc_c_doses",
            label: "Conjugada Meningo C - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_meningoc_c_last_dose_date",
            label: "Conjugada Meningo C - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // BCG
        {
            name: "vaccine_bcg",
            label: "Vacina BCG",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_bcg_doses",
            label: "BCG - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_bcg_last_dose_date",
            label: "BCG - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // Tríplice
        {
            name: "vaccine_triple",
            label: "Vacina Tríplice",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_triple_doses",
            label: "Tríplice - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_triple_last_dose_date",
            label: "Tríplice - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // Hemófilo (Tetravalente ou Hib)
        {
            name: "vaccine_hib",
            label: "Vacina Hemófilo (Tetravalente ou Hib)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_hib_doses",
            label: "Hemófilo - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_hib_last_dose_date",
            label: "Hemófilo - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // Pneumococo
        {
            name: "vaccine_pneumococcal",
            label: "Vacina Pneumococo",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_pneumococcal_doses",
            label: "Pneumococo - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_pneumococcal_last_dose_date",
            label: "Pneumococo - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },

        // Outra vacina
        {
            name: "vaccine_other",
            label: "Outra Vacina",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "vaccine_other_name",
            label: "Nome da Outra Vacina",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "vaccine_other_doses",
            label: "Outra Vacina - Nº de Doses",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: undefined,
        },
        {
            name: "vaccine_other_last_dose_date",
            label: "Outra Vacina - Data da Última Dose",
            kind: "date",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "preexisting_aids_hiv",
            label: "Doença Pré-existente: AIDS/HIV+",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_immunodepressive",
            label: "Doença Pré-existente: Outras Doenças Imunodepressoras",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_ira",
            label: "Doença Pré-existente: IRA",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_tuberculosis",
            label: "Doença Pré-existente: Tuberculose",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_trauma",
            label: "Doença Pré-existente: Traumatismo",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_hospital_infection",
            label: "Doença Pré-existente: Infecção Hospitalar",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_other",
            label: "Doença Pré-existente: Outro",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "preexisting_other_description",
            label: "Descrição de Outra Doença Pré-existente",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "meningitis_contact_type",
            label: "Contato com Caso Suspeito ou Confirmado de Meningite (até 15 dias antes)",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
            { value: "1", label: "Domicílio" },
            { value: "2", label: "Vizinhança" },
            { value: "3", label: "Trabalho" },
            { value: "4", label: "Creche/Escola" },
            { value: "5", label: "Posto de Saúde/Hospital" },
            { value: "6", label: "Outro Estado/Município" },
            { value: "7", label: "Sem História de Contato" },
            { value: "8", label: "Outro País" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "contact_name",
            label: "Nome do Contato",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "contact_phone",
            label: "Telefone do Contato (DDD)",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "contact_address",
            label: "Endereço do Contato",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
        {
            name: "secondary_case",
            label: "Caso Secundário",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5. DADOS CLÍNICOS (Campo 40)
// -----------------------------------------------------------------------------

const clinicalDataSection = {
    id: "clinical_data",
    title: "Dados Clínicos",
    description: "Dados Clínicos",
    columns: 3,
    fields: [
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
            label: "Vômitos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_neck_stiffness",
            label: "Rigidez de Nuca",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_fontanelle_bulging",
            label: "Abaulamento de Fontanela",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_petechiae_hemorrhage",
            label: "Petéquias/Sufusões Hemorrágicas",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
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
            name: "symptom_convulsions",
            label: "Convulsões",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_kernig_brudzinski",
            label: "Kernig/Brudzinski",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_coma",
            label: "Coma",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_other",
            label: "Outros Sintomas",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "symptom_other_description",
            label: "Descrição de Outros Sintomas",
            kind: "text",
            schema: z.string(),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 6. ATENDIMENTO (Campo 41 a 45)
// -----------------------------------------------------------------------------

const treatmentSection = {
    id: "treatment",
    title: "Tratamento",
    description: "Tratamento",
    columns: 3,
    fields: [
        {
            name: "hospitalization",
            label: "Ocorreu Hospitalização",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "hospitalization_date",
            label: "Data da Internação",
            kind: "date",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "hospital_uf",
            label: "UF do Hospital",
            kind: "text",
            schema: z.string().max(2).optional(),
            defaultValue: "",
        },
        {
            name: "hospital_municipality",
            label: "Município do Hospital",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "hospital_ibge_code",
            label: "Código (IBGE)",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "hospital_name",
            label: "Nome do Hospital",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
    ],    
    
} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 7. DADOS DE LABORATÓRIO (Campo 46 a 49)
// -----------------------------------------------------------------------------

const laboratoryDataSection = {
    id: "laboratory_data",
    title: "Dados do Laboratório",
    description: "Dados do Laboratório",
    columns: 3,
    fields: [
        {
            name: "lumbar_puncture",
            label: "Punção Lombar",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "puncture_date",
            label: "Data da Punção",
            kind: "date",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "liquor_aspect",
            label: "Aspecto do Líquor",
            kind: "select",
            schema: z.string().optional(),
            defaultValue: "",
            options: [
                { value: "1", label: "Límpido" },
                { value: "2", label: "Purulento" },
                { value: "3", label: "Hemorrágico" },
                { value: "4", label: "Turvo" },
                { value: "5", label: "Xantocrômico" },
                { value: "6", label: "Outro" },
                { value: "9", label: "Ignorado" },
            ],
        },
        // Resultados Laboratoriais: CULTURA
        {
            name: "lab_culture_liquor",
            label: "Cultura - Líquor",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_culture_petechial_lesion",
            label: "Cultura - Lesão Petequial",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_culture_blood_serum",
            label: "Cultura - Sangue/Soro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_culture_sputum",
            label: "Cultura - Escarro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },

        // Resultados Laboratoriais: BACTERIOSCOPIA
        {
            name: "lab_bacterioscopy_liquor",
            label: "Bacterioscopia - Líquor",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_bacterioscopy_petechial_lesion",
            label: "Bacterioscopia - Lesão Petequial",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_bacterioscopy_blood_serum",
            label: "Bacterioscopia - Sangue/Soro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_bacterioscopy_sputum",
            label: "Bacterioscopia - Escarro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },

        // Resultados Laboratoriais: CIE
        {
            name: "lab_cie_liquor",
            label: "CIE - Líquor",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_cie_blood_serum",
            label: "CIE - Sangue/Soro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },

        // Resultados Laboratoriais: AGLUTINAÇÃO PELO LÁTEX
        {
            name: "lab_latex_liquor",
            label: "Aglutinação pelo Látex - Líquor",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_latex_blood_serum",
            label: "Aglutinação pelo Látex - Sangue/Soro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },

        // Resultados Laboratoriais: ISOLAMENTO VIRAL
        {
            name: "lab_viral_isolation_liquor",
            label: "Isolamento Viral - Líquor",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_viral_isolation_feces",
            label: "Isolamento Viral - Fezes",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },

        // Resultados Laboratoriais: PCR
        {
            name: "lab_pcr_liquor",
            label: "PCR - Líquor",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_pcr_petechial_lesion",
            label: "PCR - Lesão Petequial",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_pcr_blood_serum",
            label: "PCR - Sangue/Soro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "lab_pcr_sputum",
            label: "PCR - Escarro",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
    ],

} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 8. CASO (Campo 50 a 53)
// -----------------------------------------------------------------------------

const caseSection = {
    id: "case_data",
    title: "Classificação do Caso",
    description: "Classificação do Caso",
    columns: 3,
    fields: [
        {
            name: "case_classification",
            label: "Classificação do Caso",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { value: "1", label: "1 - Confirmado" },
                { value: "2", label: "2 - Descartado" },
            ],
        },
        {
            name: "case_specification",
            label: "Se Confirmado, Especifique",
            kind: "select",
            schema: z.string().optional(),
            defaultValue: "",
            options: [
                { value: "1", label: "1 - Meningococemia" },
                { value: "2", label: "2 - Meningite Meningocócica" },
                { value: "3", label: "3 - Meningite Meningocócica com Meningococemia" },
                { value: "4", label: "4 - Meningite Tuberculosa" },
                { value: "5", label: "5 - Meningite por outras bactérias" },
                { value: "6", label: "6 - Meningite não especificada" },
                { value: "7", label: "7 - Meningite Asséptica" },
                { value: "8", label: "8 - Meningite de outra etiologia" },
                { value: "9", label: "9 - Meningite por Hemófilo" },
                { value: "10", label: "10 - Meningite por Pneumococos" },
            ],
        },
        {
            name: "case_specification_other_bacteria_desc",
            label: "Especificação se 5 (Outras Bactérias)",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "case_specification_aseptic_desc",
            label: "Especificação se 7 (Meningite Asséptica)",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "case_specification_other_etiology_desc",
            label: "Especificação se 8 (Outra Etiologia)",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
        {
            name: "confirmation_criterion",
            label: "Critério de Confirmação",
            kind: "select",
            schema: z.string().optional(),
            defaultValue: "",
            options: [
                { value: "1", label: "1 - Cultura" },
                { value: "2", label: "2 - CIE" },
                { value: "3", label: "3 - Ag. Látex" },
                { value: "4", label: "4 - Clínico" },
                { value: "5", label: "5 - Bacterioscopia" },
                { value: "6", label: "6 - Quimiocitológico do Líquor" },
                { value: "7", label: "7 - Clínico-epidemiológico" },
                { value: "8", label: "8 - Isolamento viral" },
                { value: "9", label: "9 - PCR" },
                { value: "10", label: "10 - Outros" },
            ],
        },
        {
            name: "n_meningitidis_serogroup",
            label: "53 - Se N. meningitidis especificar sorogrupo",
            kind: "text",
            schema: z.string().optional(),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 9. MEDIDAS DE CONTROLE (Campo 54 a 57)
// -----------------------------------------------------------------------------

const controlMeasureSection = {
    id: "control_measure",
    title: "Medidas de Controle",
    description: "Medidas de Controle",
    columns: 3,
    fields: [
          {
            name: "contacts_count",
            label: "Número de Comunicantes",
            kind: "number",
            schema: z.number().int().min(0),
            defaultValue: "",
        },
        {
            name: "chemoprophylaxis_performed",
            label: "Realizada Quimioprofilaxia dos Comunicantes?",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "chemoprophylaxis_date",
            label: "Data da Quimioprofilaxia (se realizada)",
            kind: "date",
            schema: z.string(),
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
    ],

} satisfies NotificationSectionDefinition;


// -----------------------------------------------------------------------------
// 10. CONCLUSÃO (Campo 58 a 60)
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
            { value: "1", label: "Alta" },
            { value: "2", label: "Óbito por Meningite" },
            { value: "3", label: "Óbito por Outra Causa" },
            { value: "9", label: "Ignorado" },
            ],
        },
        {
            name: "evolution_date",
            label: "Data da Evolução",
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

// -----------------------------------------------------------------------------
// 11. INFORMAÇÕES COMPLEMENTARES
// -----------------------------------------------------------------------------

const complementarSection = {
    id: "other_infos",
    title: "Informações complementares e observações",
    description: "Exame Quimiocitológico",
    columns: 3,
    fields: [
        {
            name: "csf_red_blood_cells",
            label: "Hemácias (mm³)",
            kind: "number",
            schema: z.number().min(0),
            defaultValue: undefined,
        },
        {
            name: "csf_leukocytes",
            label: "Leucócitos (mm³)",
            kind: "number",
            schema: z.number().min(0),
            defaultValue: undefined,
        },
        {
            name: "csf_monocytes_pct",
            label: "Monócitos (%)",
            kind: "number",
            schema: z.number().min(0).max(100),
            defaultValue: undefined,
        },
        {
            name: "csf_neutrophils_pct",
            label: "Neutrófilos (%)",
            kind: "number",
            schema: z.number().min(0).max(100),
            defaultValue: undefined,
        },
        {
            name: "csf_eosinophils_pct",
            label: "Eosinófilos (%)",
            kind: "number",
            schema: z.number().min(0).max(100),
            defaultValue: undefined,
        },
        {
            name: "csf_lymphocytes_pct",
            label: "Linfócitos (%)",
            kind: "number",
            schema: z.number().min(0).max(100),
            defaultValue: undefined,
        },
        {
            name: "csf_glucose_mg",
            label: "Glicose (mg)",
            kind: "number",
            schema: z.number().min(0),
            defaultValue: undefined,
        },
        {
            name: "csf_proteins_mg",
            label: "Proteínas (mg)",
            kind: "number",
            schema: z.number().min(0),
            defaultValue: undefined,
        },
        {
            name: "csf_chloride_mg",
            label: "Cloreto (mg)",
            kind: "number",
            schema: z.number().min(0),
            defaultValue: undefined,
        },
        {
            name: "additional_observations",
            label: "Observações Adicionais",
            kind: "textarea",
            schema: z.string(),
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
    caseSection,
    controlMeasureSection,
    conclusionSection,
    laboratoryDataSection,
    complementarSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const diphtheriaNotificationDefinition = defineNotificationType({
    id: 10, //alterar id
    slug: "meningitis",
    label: "Meningite",
    description: "CASO SUSPEITO: Criança acima de nove meses e/ou adulto com febre, cefaléia, vômitos, rigidez de nuca, outros sinais deirritação meníngea (Kernig e Brudzinski), convulsão, sufusões hemorrágicas (petéquias) e torpor.Crianças abaixo de nove meses observar também irritabilidade (choro persistente) ou abaulamento de fontanela.",
    sections,
});
