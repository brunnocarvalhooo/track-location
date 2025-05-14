import { ReactNode } from 'react'
import { styles } from './style'
import { Image, Text, View } from 'react-native'

import logo from '../../../assets/logo.png'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
}

const PublicLayout = ({ children, title, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      <View style={styles.ChildrenContainer}>{children}</View>
    </View>
  )
}

export { PublicLayout }
