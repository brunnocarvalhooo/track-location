import React from 'react'
import { TextInput, View, StyleSheet, Text, TextInputProps } from 'react-native'
import {
  formatCEP,
  formatDocumento,
  formatTelefone,
} from 'src/shared/utils/masks'

export enum InputMasks {
  DOCUMENT = 'document',
  TELEFONE = 'telefone',
  CEP = 'cep',
}

interface InputProps extends TextInputProps {
  label?: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  mask?: InputMasks
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
  mask,
  ...props
}) => {
  function handleChangeValue(newValue: string) {
    let formattedValue = newValue

    switch (mask) {
      case InputMasks.DOCUMENT:
        formattedValue = formatDocumento(newValue)
        break
      case InputMasks.TELEFONE:
        formattedValue = formatTelefone(newValue)
        break
      case InputMasks.CEP:
        formattedValue = formatCEP(newValue)
        break
      default:
        break
    }

    onChangeText(formattedValue)
  }

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={handleChangeValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
        keyboardType={mask ? 'numeric' : props.keyboardType}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 50,
    minWidth: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 22,
  },
})

export default Input
