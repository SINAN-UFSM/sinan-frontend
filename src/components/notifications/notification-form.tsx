"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ClipboardList, Save } from "lucide-react"
import * as React from "react"
import { useForm, useWatch, type Resolver } from "react-hook-form"

import { DateField } from "@/components/forms/date-field"
import { InputField } from "@/components/forms/input-field"
import { SelectField } from "@/components/forms/select-field"
import { TextareaField } from "@/components/forms/textarea-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { usePatients } from "@/hooks/use-patients"
import { useUnits } from "@/hooks/use-units"
import {
  getNotificationTypeDefinition,
  notificationStatusOptions,
  notificationTypeOptions,
} from "@/lib/notification-types"
import {
  notificationSchema,
  type NotificationSchema,
} from "@/schemas/notification.schema"
import type {
  NotificationStatus,
  NotificationTypeSlug,
} from "@/types/notification"
import type { Patient } from "@/types/patient"
import type { Unit } from "@/types/unit"

const defaultNotificationType: NotificationTypeSlug = "aids"
const emptyPatients: Patient[] = []
const emptyUnits: Unit[] = []

type NotificationFormValues = {
  patient_id?: number
  unit_id?: number
  notification_type_slug: NotificationTypeSlug
  status: NotificationStatus
  notification_date: string
  occurrence_date?: string
  notes?: string
  form_data: Record<string, string | number | undefined>
}

function buildFormDataDefaults(
  notificationType: NotificationTypeSlug,
  patient?: Patient
): NotificationFormValues["form_data"] {
  const definition = getNotificationTypeDefinition(notificationType)
  const defaults = { ...definition.defaultValues }

  if (notificationType === "aids" && patient) {
    return {
      ...defaults,
      patient_name: patient.name,
      patient_cpf: patient.document ?? "",
      patient_birth_date: patient.birth_date ?? "",
    }
  }

  return defaults
}

function getSectionGridClass(columns: 1 | 2 | 3 = 2) {
  if (columns === 1) {
    return "grid-cols-1"
  }

  if (columns === 3) {
    return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
  }

  return "grid-cols-1 md:grid-cols-2"
}

function getFieldSpanClass(columns: 1 | 2 | 3 = 2) {
  if (columns === 3) {
    return "md:col-span-2 xl:col-span-3"
  }

  if (columns === 2) {
    return "md:col-span-2"
  }

  return "col-span-1"
}

export function NotificationForm({
  onSubmit,
  isSubmitting,
}: NotificationFormProps) {
  const patientsQuery = usePatients()
  const unitsQuery = useUnits()
  const patients = patientsQuery.data?.data ?? emptyPatients
  const units = unitsQuery.data?.data ?? emptyUnits

  const form = useForm<NotificationFormValues>({
    resolver:
      zodResolver(notificationSchema) as unknown as Resolver<NotificationFormValues>,
    defaultValues: {
      patient_id: patients[0]?.id,
      unit_id: units[0]?.id,
      notification_type_slug: defaultNotificationType,
      status: "pending",
      notification_date: new Date().toISOString().slice(0, 10),
      occurrence_date: "",
      notes: "",
      form_data: buildFormDataDefaults(defaultNotificationType),
    },
  })

  const selectedType = useWatch({
    control: form.control,
    name: "notification_type_slug",
  })
  const selectedPatientId = useWatch({
    control: form.control,
    name: "patient_id",
  })

  const selectedPatient = patients.find(
    (patient) => patient.id === selectedPatientId
  )
  const definition = getNotificationTypeDefinition(
    selectedType ?? defaultNotificationType
  )
  const status = useWatch({
    control: form.control,
    name: "status",
  })

  React.useEffect(() => {
    if (patients.length === 0 || units.length === 0) {
      return
    }

    if (!form.getValues("patient_id")) {
      form.setValue("patient_id", patients[0].id)
    }

    if (!form.getValues("unit_id")) {
      form.setValue("unit_id", units[0].id)
    }
  }, [patients, units, form])

  React.useEffect(() => {
    if (selectedType !== "aids" || !selectedPatient) {
      return
    }

    const currentFormData = form.getValues("form_data")

    if (!("patient_name" in currentFormData)) {
      return
    }

    form.setValue("form_data", {
      ...currentFormData,
      patient_name: currentFormData.patient_name || selectedPatient.name,
      patient_cpf: currentFormData.patient_cpf || selectedPatient.document || "",
      patient_birth_date:
        currentFormData.patient_birth_date || selectedPatient.birth_date || "",
    })
  }, [selectedPatient, selectedType, form])

  const patientOptions = patients.map((patient) => ({
    label: patient.name,
    value: String(patient.id),
  }))

  const unitOptions = units.map((unit) => ({
    label: `${unit.name} - ${unit.city}/${unit.state}`,
    value: String(unit.id),
  }))

  const submitLabel =
    status === "resolved"
      ? "Finalizar notificacao"
      : status === "in_review"
        ? "Salvar e enviar para analise"
        : "Salvar pendente"

  return (
    <Form {...form}>
      <form
        className="grid gap-6"
        onSubmit={form.handleSubmit((values) =>
          onSubmit(notificationSchema.parse(values))
        )}
      >
        <section className="grid gap-4 rounded-2xl border border-border bg-muted/30 p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-brand-soft p-2 text-brand">
              <ClipboardList className="size-5" />
            </div>
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Identificacao da notificacao</h2>
              <p className="text-sm text-muted-foreground">
                Selecione o formulario epidemiologico e vincule paciente,
                unidade e etapa do fluxo.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SelectField
              control={form.control}
              name="patient_id"
              label="Paciente"
              placeholder="Selecione um paciente"
              options={patientOptions}
              parseValue={Number}
              disabled={patientsQuery.isLoading}
              description={
                patientsQuery.isLoading
                  ? "Carregando pacientes..."
                  : undefined
              }
            />
            <SelectField
              control={form.control}
              name="unit_id"
              label="Unidade notificadora"
              placeholder="Selecione uma unidade"
              options={unitOptions}
              parseValue={Number}
              disabled={unitsQuery.isLoading}
              description={
                unitsQuery.isLoading ? "Carregando unidades..." : undefined
              }
            />
            <SelectField
              control={form.control}
              name="notification_type_slug"
              label="Tipo de formulario"
              options={notificationTypeOptions}
              onValueChange={(value) => {
                form.setValue(
                  "form_data",
                  buildFormDataDefaults(
                    value as NotificationTypeSlug,
                    value === "aids" ? selectedPatient : undefined
                  ),
                  {
                    shouldDirty: true,
                    shouldValidate: true,
                  }
                )
              }}
            />
            <SelectField
              control={form.control}
              name="status"
              label="Status do fluxo"
              options={notificationStatusOptions}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <DateField
              control={form.control}
              name="notification_date"
              label="Data da notificacao"
            />
            <DateField
              control={form.control}
              name="occurrence_date"
              label="Data da ocorrencia"
            />
          </div>

          <div className="rounded-2xl border border-brand/20 bg-card p-4">
            <p className="text-sm font-medium text-brand">{definition.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {definition.description}
            </p>
          </div>
        </section>

        {definition.sections.map((section) => (
          <section
            key={section.id}
            className="grid gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <div className="grid gap-1">
              <h3 className="text-base font-semibold">{section.title}</h3>
              <p className="text-sm text-muted-foreground">
                {section.description}
              </p>
            </div>

            <div className={`grid gap-4 ${getSectionGridClass(section.columns)}`}>
              {section.fields.map((field) => {
                const name = `form_data.${field.name}` as never

                return (
                  <div
                    key={field.name}
                    className={field.fullWidth ? getFieldSpanClass(section.columns) : ""}
                  >
                    {field.kind === "select" ? (
                      <SelectField
                        control={form.control}
                        name={name}
                        label={field.label}
                        placeholder={field.placeholder}
                        options={field.options ?? []}
                      />
                    ) : field.kind === "textarea" ? (
                      <TextareaField
                        control={form.control}
                        name={name}
                        label={field.label}
                        placeholder={field.placeholder}
                      />
                    ) : field.kind === "date" ? (
                      <DateField
                        control={form.control}
                        name={name}
                        label={field.label}
                      />
                    ) : (
                      <InputField
                        control={form.control}
                        name={name}
                        label={field.label}
                        placeholder={field.placeholder}
                        type={field.kind === "number" ? "number" : "text"}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <section className="grid gap-4 rounded-2xl border border-border bg-card p-5">
          <TextareaField
            control={form.control}
            name="notes"
            label="Observacoes gerais"
            placeholder="Registre complementos relevantes sobre a notificacao."
          />
        </section>

        <Button
          type="submit"
          className="w-fit"
          disabled={
            isSubmitting || patientsQuery.isLoading || unitsQuery.isLoading
          }
        >
          <Save data-icon="inline-start" />
          {submitLabel}
        </Button>
      </form>
    </Form>
  )
}
type NotificationFormProps = {
  onSubmit: (values: NotificationSchema) => void | Promise<void>
  isSubmitting?: boolean
}
