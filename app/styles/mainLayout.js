import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.THEME_DARK,
    flexDirection: 'column'
  },

  notepadRow: {
    flex: 3,
    backgroundColor: colors.THEME_DARK,
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderColor: colors.THEME_LIGHT,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 10
  },

  numberpadRow: {
    flex: 1,
    backgroundColor: colors.THEME_LIGHT,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },

  numberButton: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.THEME_DARK
  }
});
