import { StyleSheet } from 'react-native'
import { theme } from 'src/shared/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.FONT_SIZE.XL,
    fontWeight: 'bold',
    color: theme.COLORS.GRAY_50,
  },
})
