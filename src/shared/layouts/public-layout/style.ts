import { StyleSheet } from 'react-native'
import { theme } from 'src/shared/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_50,
    paddingInline: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.COLORS.PRIMARY,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 12,
  },
  subtitle: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.GRAY_300,
  },
  ChildrenContainer: {
    width: '100%',
    marginTop: 'auto',
    backgroundColor: theme.COLORS.GRAY_50,
    paddingBottom: 24,
    gap: 12,
  },
})
