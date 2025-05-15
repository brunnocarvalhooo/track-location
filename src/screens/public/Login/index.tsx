import { useCallback, useState } from 'react'
import Input, { InputMasks } from '@components/input'
import Button from '@components/button'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { PublicLayout } from 'src/shared/layouts/public-layout'
import { APP_NAME } from 'App'
import { useToast } from 'src/shared/providers/toast'
import { api } from 'src/api'

const Login = () => {
  const { showErrorToast, showSuccessToast } = useToast()

  const [cpf, setCpf] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { navigate } = useNavigation<NavigationProp<ParamListBase>>()

  const handleSubmit = useCallback(async () => {
    setIsLoading(true)
    try {
      await api.auth.login(cpf)

      showSuccessToast(
        'Enviamos um código de verificação por SMS para o seu celular',
      )

      navigate('AuthenticationCode')
    } catch (error) {
      showErrorToast('Erro ao enviar CPF, tente novamente')
    } finally {
      setIsLoading(false)
    }
  }, [cpf, navigate, showErrorToast, showSuccessToast])

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
        disabled={cpf.length !== 14 || isLoading}
        title="Enviar"
        onPress={handleSubmit}
      />
    </PublicLayout>
  )
}

export { Login }
