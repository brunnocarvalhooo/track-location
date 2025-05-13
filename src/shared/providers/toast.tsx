import React, { createContext, useContext } from 'react'
import { View, Text } from 'react-native'
import Toast, { ToastConfig } from 'react-native-toast-message'

type ToastContextData = {
  showSuccessToast: (message: string, description?: string) => void
  showErrorToast: (message: string, description?: string) => void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const toastConfig: ToastConfig = {
  success: ({ text1, text2 }) => (
    <View
      style={{
        height: 60,
        width: '80%',
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {text1}
      </Text>
      {text2 && <Text style={{ color: 'white', fontSize: 14 }}>{text2}</Text>}
    </View>
  ),
  error: ({ text1, text2 }) => (
    <View
      style={{
        height: 60,
        width: '80%',
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {text1}
      </Text>
      {text2 && <Text style={{ color: 'white', fontSize: 14 }}>{text2}</Text>}
    </View>
  ),
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const showSuccessToast = (message: string, description?: string) => {
    Toast.show({
      type: 'success',
      text1: message,
      text2: description,
    })
  }

  const showErrorToast = (message: string, description?: string) => {
    Toast.show({
      type: 'error',
      text1: message,
      text2: description,
    })
  }

  return (
    <ToastContext.Provider value={{ showSuccessToast, showErrorToast }}>
      {children}
      <Toast config={toastConfig} />
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
