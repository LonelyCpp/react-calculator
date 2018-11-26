import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback, } from 'react-native';

import mainLayoutStyle from './styles/mainLayout.js'
import textStyle from './styles/text.js'
import NumberButton from './NumberButton.js'

type Props = {};
export default class App extends Component<Props> {
  _onPress = () => {
      
  }
  render() {
    return (
      <View style={mainLayoutStyle.container}>
        <View style={mainLayoutStyle.notepadRow}>
          <Text style={textStyle.notepad}>1 + 1</Text>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text='C'/>
          <NumberButton text=''/>
          <NumberButton text='%'/>
          <NumberButton text='/'/>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>7</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>8</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>9</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>x</Text>
          </View>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>4</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>5</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>6</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>-</Text>
          </View>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>1</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>2</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>3</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>+</Text>
          </View>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>0</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}></Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>.</Text>
          </View>
          <View style={mainLayoutStyle.numberButton}>
            <Text style={textStyle.numberPad}>=</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
});
