"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Save } from "lucide-react"
import { useForm } from "react-hook-form"

import { DateField } from "@/components/forms/date-field"
import { InputField } from "@/components/forms/input-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { patientSchema, type PatientSchema } from "@/schemas/patient.schema"
import { Input } from "../ui/input"
import { SelectField } from "../forms/select-field"
import { Select } from "radix-ui"
import { educationLevelOptions, raceColorOptions, sexOptions } from "@/features/notifications/definitions/shared"

type PatientFormProps = {
  onSubmit: (values: PatientSchema) => void | Promise<void>
  isSubmitting?: boolean
}

export function PatientForm({ onSubmit, isSubmitting }: PatientFormProps) {
  const form = useForm<PatientSchema>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      document: "",
      sus_card: "",
      birth_date: "",
      phone: "",
    },
  })

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <InputField control={form.control} name="name" label="Nome" />
        <div className="grid gap-4 sm:grid-cols-3">
          <InputField control={form.control} name="document" label="CPF" />
          <InputField control={form.control} name="sus_card" label="Cartão SUS" />
          <DateField
            control={form.control}
            name="birth_date"
            label="Nascimento"
          />
          <InputField control={form.control} name="birth_city" label="Cidade de Nascimento" />
          <InputField control={form.control} name="current_address" label="Endereço Atual" />
          <InputField control={form.control} name="phone" label="Telefone" />
          <SelectField control={form.control} name="gender" label="Gênero" options={sexOptions} />
          <SelectField control={form.control} name="race_color" label="Raça/Cor" options={raceColorOptions} />
          <SelectField control={form.control} name="education_level" label="Escolaridade" options={educationLevelOptions} ></SelectField>
        </div>
        <Button type="submit" className="w-fit" disabled={isSubmitting}>
          <Save data-icon="inline-start" />
          Salvar
        </Button>
      </form>
    </Form>
  )
}
