import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020202',
    flexDirection: 'column'
  },

  notepadRow: {
    flex: 3,
    backgroundColor: '#020202',
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 10
  },

  numberpadRow: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },

  numberButton: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020202'
  }
});
