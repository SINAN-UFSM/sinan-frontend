import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import type { NotificationSchema } from "@/schemas/notification.schema"
import { notificationService } from "@/services/notification.service"
import type { NotificationStatus } from "@/types/notification"

export function useNotifications() {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: notificationService.list,
  })
}

export function useCreateNotification() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: NotificationSchema) =>
      notificationService.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
    },
  })
}

export function useUpdateNotificationStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: number
      status: NotificationStatus
    }) => notificationService.updateStatus(id, status),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
      queryClient.invalidateQueries({ queryKey: ["notifications", variables.id] })
      queryClient.invalidateQueries({ queryKey: ["dashboard"] })
    },
  })
}
