import { StyleSheet } from 'react-native'
import { theme } from 'src/shared/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    paddingInline: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  title: {
    marginBottom: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: theme.COLORS.GREEN_700,
  },
  logs: {
    marginTop: 20,
  },
})
