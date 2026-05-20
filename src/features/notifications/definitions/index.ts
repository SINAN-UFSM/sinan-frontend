import { aidsNotificationDefinition } from "@/features/notifications/definitions/aids"
import { venomousAnimalNotificationDefinition } from "@/features/notifications/definitions/venomous-animal"

import { botulismNotificationDefinition } from "@/features/notifications/definitions/botulism"
import { choleraNotificationDefinition } from "@/features/notifications/definitions/cholera"
import { whoopingCoughNotificationDefinition } from "@/features/notifications/definitions/whooping-cough"
import { dengueChikungunyaNotificationDefinition } from "@/features/notifications/definitions/dengue"

export { aidsNotificationDefinition, venomousAnimalNotificationDefinition, botulismNotificationDefinition, choleraNotificationDefinition, whoopingCoughNotificationDefinition, dengueChikungunyaNotificationDefinition }
export * from "@/features/notifications/definitions/shared"

export const notificationTypeDefinitionList = [
  aidsNotificationDefinition,
  venomousAnimalNotificationDefinition,
  botulismNotificationDefinition,
  choleraNotificationDefinition,
  whoopingCoughNotificationDefinition,
  dengueChikungunyaNotificationDefinition,
] as const

export const notificationTypeDefinitions = {
  aids: aidsNotificationDefinition,
  venomous_animal: venomousAnimalNotificationDefinition,
  botulism: botulismNotificationDefinition,
  cholera: choleraNotificationDefinition,
  whooping_cough: whoopingCoughNotificationDefinition,
  dengue_chikungunya: dengueChikungunyaNotificationDefinition,
} as const
