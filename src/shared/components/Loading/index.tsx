import { styles } from './style'
import { ActivityIndicator, View } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

export { Loading }
