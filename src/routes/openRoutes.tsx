import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthenticationCode, Login, TrackLocation } from 'src/screens'

const Stack = createNativeStackNavigator()

export function OpenRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="AuthenticationCode" component={AuthenticationCode} />
      <Stack.Screen name="trackLocation" component={TrackLocation} />
    </Stack.Navigator>
  )
}
