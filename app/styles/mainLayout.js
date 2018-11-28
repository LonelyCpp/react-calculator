import {StyleSheet,} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'column'
    },

    notepadRow: {
        flex: 3, 
        backgroundColor: '#f3a712', 
        alignSelf: 'stretch',
        borderBottomWidth: 3,
        borderColor: '#000000',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    numberpadRow: {
        flex: 1, 
        backgroundColor: 'white', 
        alignSelf: 'stretch',
        flexDirection: 'row'
    },

    numberButton: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#29335c'
    },
  });