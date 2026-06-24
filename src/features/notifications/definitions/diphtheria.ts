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
// 4. ANTECEDENTES EPIDEMIOLÓGICOS (Campo 31 a 37)
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
            name: "expouse_confirmated_suspect",
            label: "Contato com Caso Suspeito ou Confirmado de Difteria (até 14 dias antes do início dos sinais e sintomas)",
            kind: "select",
            schema: "",
            defaultValue: "",
            options: [
                { label: "1 - Domicílio", value: "1" },
                { label: "2 - Vizinhança", value: "2" },
                { label: "3 - Trabalho", value: "3" },
                { label: "4 - Creche/Escola", value: "4"},
                { label: "5 - Posto de Saúde/Hospital", value: "5"},
                { label: "6 - Outro Estado/Município", value: "6"},
                { label: "7 - Outro", value: "7"},
                { label: "8 - Sem História de Contato", value: "8"},
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "name_contact",
            label: "Nome do Contato",
            kind: "text",
            schema: z.string().min(2, "Nome Obrigatório"),
            defaultValue: "",
        },
        {
            name: "address_contact",
            label: "Endereço do contato (Rua, Av., Apto., Bairro, Localidade, etc)",
            kind: "text",
            schema: z.string().min(2, "Endereço Obrigatório"),
            defaultValue: "",
        },
        {
            name: "doses_number",
            label: "Nº de Doses da Vacina Tríplice (DTP)ou Tetravalente (DTP+Hib) ou Dupla (DT ou dT)",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatório"),
            defaultValue: "",
            options: [
                { label: "1 - Uma", value: "1" },
                { label: "2 - Duas", value: "2" },
                { label: "3 - Três", value: "3" },
                { label: "4 - Três + Um reforço", value: "4"},
                { label: "5 - Três + Dois reforço", value: "5"},
                { label: "6 - Nunca Vacinado", value: "6"},
                { label: "9 - Ignorado", value: "9"},
            ],
        },

    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 5 e 6. DADOS CLÍNICOS E ATENDIMENTO (Campo 38 a 46)
// -----------------------------------------------------------------------------

const clinicalDataSection = {
    id: "clinical_data",
    title: "Dados Clínicos",
    description: "Dados Clínicos",
    columns: 3,
    fields: [
        {
            name: "signs_symptoms",
            label: "Sinais e Sintomas",
            kind: "multiselect",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1 - Edema Ganglionar", value: "1" },
                { label: "2 - Prostração", value: "2" },
                { label: "3 - Edema de Pescoço", value: "3" },
                { label: "4 - Pseudomembrana", value: "4"},
                { label: "5 - Febre", value: "5"},
                { label: "6 - Palidez", value: "6"},
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "body_temperature",
            label: "Temperatura Corporal",
            kind: "number",
            schema: z.string().min(2, "Temperatura Obrigatório"),
            defaultValue: "",
        },
        {
            name: "pseudomembrane_region",
            label: "Localização da Pseudomembrana (Placas)",
            kind: "multiselect",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1- Cavidade Nasal", value: "1" },
                { label: "2- Amígdalas", value: "2" },
                { label: "3- Órgãos Genitais", value: "3" },
                { label: "4- Pálato", value: "4"},
                { label: "5- Laringe", value: "5"},
                { label: "6- Conduto Auditivo", value: "6"},
                { label: "7- Faringe", value: "7"},
                { label: "8- Traquéia", value: "8"},
                { label: "10- Pele", value: "10"},
                { label: "11 - Conjuntiva", value: "11"},
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "complications",
            label: "Complicações: Existiram",
            kind: "multiselect",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1- Miocardite", value: "1" },
                { label: "2- Nefrite", value: "2" },
                { label: "3- Paralisia Bilateral e Simétrica das Extremidades", value: "3" },
                { label: "4- Paralisia do Palato (Regurgitação,Líquido Pelo Nariz, Voz Anasalada)", value: "4"},
                { label: "5- Arritmias Cardíacas", value: "5"},
                { label: "6- Paralisia dos Músculos Intercostais e Diafragma", value: "6"},
                { label: "7- Outras", value: "7"},
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "hospitalization_occurred",
            label: "Ocorreu Hospitalização",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatório"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "hospitalization_date",
            label: "Data da Internação",
            kind: "date",
            schema: z.string().min(2, "Data obrigatória"),
            defaultValue: "",
        },
        {
            name: "hospital_state",
            label: "UF do Hospital",
            kind: "text",
            schema: z.string().min(2, "UF obrigatória"),
            defaultValue: "",
        },
        {
            name: "hospital_city",
            label: "Município do Hospital",
            kind: "text",
            schema: z.string().min(1, "Município obrigatório"),
            defaultValue: "",
        },
        {
            name: "hospital_name",
            label: "Nome do Hospital",
            kind: "text",
            schema: z.string().min(1, "Nome obrigatório"),
            defaultValue: "",
        },
    ],
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 7. DADOS DE LABORATÓRIO (Campo 47 a 50)
// -----------------------------------------------------------------------------

const laboratoryDataSection = {
    id: "laboratory_data",
    title: "Dados do Laboratório",
    description: "Dados do Laboratório",
    columns: 3,
    fields: [
        {
            name: "collect_material",
            label: "Material Coletado",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1 - Orofaringe", value: "1" },
                { label: "2 - Nasofaringe", value: "2" },
                { label: "3 - Orofaringe e Nasofaringe", value: "3" },
                { label: "4 - Não Coletado", value: "4"},,
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "collect_date",
            label: "Data da Coleta",
            kind: "date",
            schema: z.string().min(2, "Data Obrigatório"),
            defaultValue: "",
        },
        {
            name: "diphteria_culture",
            label: "Cultura para Difteria",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1- Positiva", value: "1" },
                { label: "2- Negativa", value: "2" },
                { label: "3- Não Realizada", value: "3" },,
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "toxic_prove",
            label: "Provas de Toxigenicidade",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1- Positiva", value: "1" },
                { label: "2- Negativa", value: "2" },
                { label: "3- Não Realizada", value: "3" },,
                { label: "9 - Ignorado", value: "9"},
            ],
        },
    ],

} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 8. TRATAMENTO (Campo 51 a 53)
// -----------------------------------------------------------------------------

const treatmentSection = {
    id: "treatment",
    title: "Tratamento",
    description: "Tratamento",
    columns: 3,
    fields: [
        {
            name: "serum_date",
            label: "Data da Aplicação do Soro",
            kind: "date",
            schema: z.string().min(2, "Data obrigatória"),
            defaultValue: "",
        },
        {
            name: "antibiotic",
            label: "Antibiótico",
            kind: "select",
            schema: z.string().min(2, "Campo obrigatória"),
            defaultValue: yesNoUnknownOptions,
        },
        {
            name: "antibiotic_date",
            label: "Data de Adm. do Antibiótico",
            kind: "date",
            schema: z.string().min(2, "Data obrigatória"),
            defaultValue: "",
        },
    ],    
    
} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 8. MEDIDAS DE CONTROLE (Campo 54 a 60)
// -----------------------------------------------------------------------------

const controlMeasureSection = {
    id: "control_measure",
    title: "Medidas de Controle",
    description: "Medidas de Controle",
    columns: 3,
    fields: [
        {
            name: "close_communicants",
            label: "Realizada Identificação dos Comunicantes Íntimos",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "close_communicants_true",
            label: "Se Sim, Quantos? (Realizada Identificação dos Comunicantes Íntimos)",
            kind: "number",
            schema: z.string().min(2, "Número Obrigatório"),
            defaultValue: "",
        },
        {
            name: "second_cases_confirmed",
            label: "Quantos Casos Secundários Foram Confirmados entre os Comunicantes",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "0- nenhum", value: "0" },
                { label: "1- Um", value: "1" },
                { label: "2- Dois ou mais", value: "2" },
                { label: "9 - Ignorado", value: "9"},
            ],
        },
        {
            name: "second_communicants_material",
            label: "Realizada Coleta de Materialdos Comunicantes",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "second_communicants_material_true",
            label: "Se Sim, Quantos? (Realizada Coleta de Material dos Comunicantes)",
            kind: "number",
            schema: z.string().min(2, "Número Obrigatório"),
            defaultValue: "",
        },
        {
            name: "communicants_identified_number",
            label: "Quantos portadores foram identificados entre os comunicantes?",
            kind: "number",
            schema: z.string().min(2, "Número Obrigatório"),
            defaultValue: "",
        },
        {
            name: "control_measures",
            label: "Medidas de prevenção/controle",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1- Bloqueio Vacinal", value: "1" },
                { label: "2 -Quimioprofilaxia", value: "2" },
                { label: "3 - Ambos", value: "3" },
                { label: "4 - Não", value: "4" },
                { label: "9 - Ignorado", value: "9"},
            ],
        },
    ],

} satisfies NotificationSectionDefinition;

// -----------------------------------------------------------------------------
// 9. CONSLUSÃO (Campo 61 a 66)
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
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1- Confirmado", value: "1" },
                { label: "2- Descartado", value: "2" },
            ],
        },
        {
            name: "confirmation_criteria",
            label: "Critério de Confirmação/Descarte",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1-Cultura c/ Prova de Toxigenicidade", value: "1" },
                { label: "2-Cultura s/ Prova de Toxigenicidade", value: "2" },
                { label: "3-Clínico-epidemiológico", value: "3" },
                { label: "4-Morte Pós Clínica Compatível", value: "4" },
                { label: "5-Clínico", value: "5" },
                { label: "6-Necrópsia", value: "6" },
            ],
        },
        {
            name: "work_disease",
            label: "Doença Relacionada ao Trabalho",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options: yesNoUnknownOptions,
        },
        {
            name: "evolution",
            label: "Evolução",
            kind: "select",
            schema: z.string().min(1, "Campo obrigatorio"),
            defaultValue: "",
            options:  [
                { label: "1 - Cura com Sequela", value: "1" },
                { label: "2 - Cura sem Sequela", value: "2" },
                { label: "3 - Óbito por difteria", value: "3" },
                { label: "4 - Óbito por outras causas ", value: "4" },
                { label: "9 - Ignorado", value: "9"},
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
    treatmentSection,
    epidemiologicalbackgroundSection,
    clinicalDataSection,
    conclusionSection,
    controlMeasureSection,
    laboratoryDataSection,
] as const satisfies readonly NotificationSectionDefinition[];

export const diphtheriaNotificationDefinition = defineNotificationType({
    id: 10, //alterar id
    slug: "diphtheria",
    label: "Difteria",
    description: "Toda pessoa que, independente da idade e estado vacinal, apresenta quadro agudo de infecção da orofaringe,com presença de placas aderentes ocupando as amígdalas, com ou sem invasão de outras áreas da faringe(pálato e úvula), ou outras localizações (ocular, nasal, vaginal, pele, etc), com comprometimento do estado geral e febre moderada",
    sections,
});
