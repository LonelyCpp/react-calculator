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
        backgroundColor: 'orange', 
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
        borderBottomWidth: 2,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
  });