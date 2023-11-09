'use client'

import { BadgeAlert, BadgeCheck } from 'lucide-react'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

type ToastProviderProps = {
  children: ReactNode
}
export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster position="top-right" reverseOrder />
    </>
  )
}

type ToastProps = {
  type?: 'success' | 'error'
  heading: string
  description: string
  onClose: () => void
}
export function Toast({
  type = 'success',
  onClose,
  heading,
  description,
}: ToastProps) {
  return (
    <div className="pointer-events-auto flex w-full max-w-md bg-gray-700 shadow-2xl">
      <div className="w-0 flex-1 p-4">
        <div className="flex items-center">
          {type === 'success' && (
            <BadgeCheck size={32} className="text-teal-500" />
          )}
          {type === 'error' && (
            <BadgeAlert size={32} className="text-red-500" />
          )}
          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold">{heading}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l-2 border-gray-900">
        <button
          type="button"
          onClick={onClose}
          className="flex w-full items-center justify-center rounded-none border border-transparent p-4 text-sm font-medium text-orange-500 hover:text-orange-500/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}
