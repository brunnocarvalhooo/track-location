import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, TrackLocation } from 'src/screens'

const Stack = createNativeStackNavigator()

export function OpenRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" component={Login} />
      <Stack.Screen name="trackLocation" component={TrackLocation} />
    </Stack.Navigator>
  )
}
