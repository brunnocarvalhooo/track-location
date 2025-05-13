import React from 'react'
import { ToastProvider } from './toast'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ToastProvider>{children}</ToastProvider>
}
