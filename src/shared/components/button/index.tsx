import { theme } from '@theme/index'
import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'

// Tipos das propriedades
interface ButtonProps {
  title: string
  onPress: () => void
  style?: ViewStyle // Estilos para o botão
  textStyle?: TextStyle // Estilos para o texto do botão
  disabled?: boolean // Controle de desativação do botão
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]} // Se estiver desabilitado, aplica o estilo de desabilitado
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.COLORS.PRIMARY, // Cor padrão do botão
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.COLORS.GRAY_50,
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9', // Cor do botão quando desabilitado
  },
})

export default Button
