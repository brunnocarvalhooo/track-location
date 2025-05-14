import { useState } from 'react'
import Input, { InputMasks } from '@components/input'
import Button from '@components/button'
import { useNavigation } from '@react-navigation/native'
import { PublicLayout } from 'src/shared/layouts/public-layout'
import { APP_NAME } from 'App'

const Login = () => {
  const [cpf, setCpf] = useState('')

  const navigation = useNavigation<any>()

  return (
    <PublicLayout title={`Bem vindo ao ${APP_NAME}`}>
      <Input
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={setCpf}
        mask={InputMasks.DOCUMENT}
        maxLength={14}
      />

      <Button
        style={{ width: '100%' }}
        disabled={cpf.length !== 14}
        title="Enviar"
        onPress={() => navigation.navigate('AuthenticationCode')}
      />
    </PublicLayout>
  )
}

export { Login }
