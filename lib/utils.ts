// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { isAfter } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTaskStatus(dueDate: Date, completed: boolean): '完了' | '期限切れ' | '未完了' {
  if (completed) return '完了'
  return isAfter(new Date(), dueDate) ? '期限切れ' : '未完了'
}