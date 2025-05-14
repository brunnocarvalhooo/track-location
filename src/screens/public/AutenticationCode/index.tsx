import { useCallback, useState } from 'react'
import Input from '@components/input'
import Button from '@components/button'
import { useNavigation } from '@react-navigation/native'
import { PublicLayout } from 'src/shared/layouts/public-layout'
import { useToast } from 'src/shared/providers/toast'

const AuthenticationCode = () => {
  const { showErrorToast } = useToast()

  const [code, setCode] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation<any>()

  const handleSubmit = useCallback(() => {
    setIsLoading(true)
    try {
      navigation.navigate('trackLocation')
    } catch (error) {
      showErrorToast('Código de verificação inválido ou expirado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <PublicLayout
      title="Código de verificação"
      subtitle="Insira o código enviado por SMS para o seu celular"
    >
      <Input
        value={code}
        onChangeText={setCode}
        maxLength={6}
        keyboardType="numeric"
      />

      <Button
        disabled={isLoading || code.length !== 6}
        title="Entrar"
        onPress={handleSubmit}
      />
    </PublicLayout>
  )
}

export { AuthenticationCode }
