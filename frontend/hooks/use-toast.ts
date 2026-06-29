'use client'

import { toast as sonnerToast } from 'sonner'

export function toast(props: Parameters<typeof sonnerToast>[0]) {
  const id = sonnerToast(props)
  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (props: Parameters<typeof sonnerToast>[0]) =>
      sonnerToast(props as any, { id } as any),
  }
}

export function useToast() {
  return {
    toast,
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
  }
}