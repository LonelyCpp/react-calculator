import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback, } from 'react-native';

import mainLayoutStyle from './styles/mainLayout.js'
import textStyle from './styles/text.js'
import NumberButton from './NumberButton.js'

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      expression: ''
    }
  }

  isOperator = (char) => {
    switch(char){
      case '*':
      case '+':
      case '/':
      case '-': return true;
    }
    return false;
  }

  _onPress = (char) => {
      console.log(char);
      if(char == ''){       // Blank button press
        return;
      } 
      else if(char == 'C'){ // Clear screen
        this.setState(previousState => (
          { expression: ''}
        ));
      }
      else if(char == '<'){ // Backspace
        this.setState(previousState => (
          { expression: previousState.expression.slice(0, -1)}
        ));
      } 
      else {                // operators or numbers
        let len = this.state.expression.length;
        if(this.isOperator(char)){
          if(len > 0){
            let lastChar = this.state.expression[len - 1];
            if(this.isOperator(lastChar)){
              this.setState(previousState => (
                { expression: previousState.expression.slice(0, -1)}
              ));
            }
          }
          else {
            return;
          }
        }
        this.setState(previousState => (
          { expression: previousState.expression + char}
        ));
      }
  }
  
  render() {
    return (
      <View style={mainLayoutStyle.container}>
        <View style={mainLayoutStyle.notepadRow}>
          <Text style={textStyle.notepad}>{this.state.expression}</Text>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text='C' onPress={this._onPress}/>
          <NumberButton text='<'  onPress={this._onPress}/>
          <NumberButton text='%' onPress={this._onPress}/>
          <NumberButton text='/' onPress={this._onPress}/>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text='7' onPress={this._onPress}/>
          <NumberButton text='8' onPress={this._onPress}/>
          <NumberButton text='9' onPress={this._onPress}/>
          <NumberButton text='*' onPress={this._onPress}/>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text='4' onPress={this._onPress}/>
          <NumberButton text='5' onPress={this._onPress}/>
          <NumberButton text='6' onPress={this._onPress}/>
          <NumberButton text='-' onPress={this._onPress}/>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text='1' onPress={this._onPress}/>
          <NumberButton text='2' onPress={this._onPress}/>
          <NumberButton text='3' onPress={this._onPress}/>
          <NumberButton text='+' onPress={this._onPress}/>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text='0' onPress={this._onPress}/>
          <NumberButton text=''  onPress={this._onPress}/>
          <NumberButton text='.' onPress={this._onPress}/>
          <NumberButton text='=' onPress={this._onPress}/>
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
