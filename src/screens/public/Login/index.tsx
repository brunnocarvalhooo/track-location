import { View, Text } from 'react-native'
import { styles } from './style'
import { useState } from 'react'
import Input, { InputMasks } from '@components/input'
import Button from '@components/button'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [cpf, setCpf] = useState('')

  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao TrackLocation</Text>

      <View style={styles.FormContainer}>
        <Input
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={setCpf}
          mask={InputMasks.DOCUMENT}
          maxLength={14}
        />

        <Button
          disabled={cpf.length !== 14}
          title="Entrar"
          onPress={() => navigation.navigate('trackLocation')}
        />
      </View>
    </View>
  )
}

export { Login }
