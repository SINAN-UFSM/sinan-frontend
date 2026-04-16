export const notificationStatuses = [
  "pending",
  "in_review",
  "resolved",
] as const

export type NotificationStatus = (typeof notificationStatuses)[number]

export const notificationTypeSlugs = [
  "aids",
  "venomous_animal",
] as const

export type NotificationTypeSlug = (typeof notificationTypeSlugs)[number]

type NotificationBaseFields = {
  patient_id: number
  unit_id: number
  status: NotificationStatus
  notification_date: string
  occurrence_date?: string
  notes?: string
}

export type AidsNotificationFormData = {
  patient_name: string
  patient_cpf: string
  patient_birth_date: string
  sex: string
  race_color: string
  education_level: string
  sus_card_number: string
  residence_city: string
  residence_state: string
  vertical_transmission: string
  sexual_exposure: string
  injecting_drug_use: string
  other_exposure_notes?: string
  diagnosis_date: string
  screening_test_result: string
  ministry_protocol_status: string
  hiv_lab_evidence: string
  treatment_performed: string
  health_outcome: string
  outcome_details?: string
}

export type VenomousAnimalNotificationFormData = {
  accident_type: string
  accident_location: string
  bite_site: string
  time_to_care_hours?: number
  local_symptoms: string
  systemic_symptoms?: string
  antivenom_administered: string
  antivenom_ampoules?: number
  case_classification: string
  local_complications?: string
  systemic_complications?: string
  final_diagnosis: string
  outcome_details?: string
}

export type NotificationFormDataMap = {
  aids: AidsNotificationFormData
  venomous_animal: VenomousAnimalNotificationFormData
}

export type NotificationFormData =
  NotificationFormDataMap[NotificationTypeSlug]

export type AidsNotificationInput = NotificationBaseFields & {
  notification_type_slug: "aids"
  form_data: AidsNotificationFormData
}

export type VenomousAnimalNotificationInput = NotificationBaseFields & {
  notification_type_slug: "venomous_animal"
  form_data: VenomousAnimalNotificationFormData
}

export type NotificationInput =
  | AidsNotificationInput
  | VenomousAnimalNotificationInput

type NotificationMetadata = {
  id: number
  notification_type_id: number
  created_at: string
}

export type Notification = NotificationInput & NotificationMetadata

export type NotificationWithRelations = Notification & {
  patient_name: string
  unit_name: string
  notification_type: string
}
