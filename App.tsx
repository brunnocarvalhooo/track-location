import React from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from 'src/shared/components/Loading'
import { AppProvider } from 'src/shared/providers/app'
import { Routes } from '@routes/index'

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <AppProvider>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="transparent"
      />
      {fontLoaded ? <Routes /> : <Loading />}
    </AppProvider>
  )
}
