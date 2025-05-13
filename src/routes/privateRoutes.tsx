import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from 'src/screens'

const Stack = createNativeStackNavigator()

export function PrivateRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="location" component={Login} />
    </Stack.Navigator>
  )
}
