// @flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import mainLayoutStyle from './styles/mainLayout.js';
import textStyle from './styles/text.js';
import NumberButton from './NumberButton.js';

import Calculator from './Calculator.js';
import colors from './styles/colors.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '',
      clear: false
    };
  }

  isOperator = char => {
    switch (char) {
      case '*':
      case '+':
      case '/':
      case '-':
        return true;
    }
    return false;
  };

  onPress = char => {
    // Clears the notepad if it contains an answer
    if (this.state.clear) {
      if (isNaN(this.state.expression)) {
        this.state.expression = '';
        this.state.clear = false;
      } else {
        this.state.clear = false;
      }
    }

    // Blank button press
    if (char === '') {
      return;
    }

    // Calculate answer
    else if (char === '=') {
      let postfix = Calculator.infixToPostfix(this.state.expression);
      let ans = Calculator.evalPostfix(postfix);
      if (isNaN(ans)) {
        ans = 'Invalid Expression';
      }
      this.setState({ expression: String(ans) });
      this.state.clear = true;
    }

    // Clear notepad
    else if (char === 'C') {
      this.setState({ expression: '' });
    }

    // Backspace
    else if (char === '<') {
      this.setState(previousState => ({
        expression: previousState.expression.slice(0, -1)
      }));
    }

    // operators or numbers
    else {
      let len = this.state.expression.length;
      if (this.isOperator(char)) {
        if (len > 0) {
          let lastChar = this.state.expression[len - 1];
          // checks if the last character was an operator
          if (this.isOperator(lastChar)) {
            // avoids appending two consecutive operators
            // updates expression with the latest selected operator
            this.setState(previousState => ({
              expression: previousState.expression.slice(0, -1)
            }));
          }
        } else {
          return;
        }
      }
      this.setState(previousState => ({
        expression: `${previousState.expression}${char}`
      }));
    }
  };

  render() {
    return (
      <View style={mainLayoutStyle.container}>
        <View style={mainLayoutStyle.notepadRow}>
          <Text style={textStyle.notepad}>{this.state.expression}</Text>
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton
            text="C"
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
          <NumberButton text="" onPress={this.onPress} />
          <NumberButton
            text="<"
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
          <NumberButton
            text="/"
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text="7" onPress={this.onPress} />
          <NumberButton text="8" onPress={this.onPress} />
          <NumberButton text="9" onPress={this.onPress} />
          <NumberButton
            text="*"
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text="4" onPress={this.onPress} />
          <NumberButton text="5" onPress={this.onPress} />
          <NumberButton text="6" onPress={this.onPress} />
          <NumberButton
            text="-"
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text="1" onPress={this.onPress} />
          <NumberButton text="2" onPress={this.onPress} />
          <NumberButton text="3" onPress={this.onPress} />
          <NumberButton
            text="+"
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
        </View>
        <View style={mainLayoutStyle.numberpadRow}>
          <NumberButton text="" onPress={this.onPress} />
          <NumberButton text="0" onPress={this.onPress} />
          <NumberButton text="." onPress={this.onPress} />
          <NumberButton
            text="="
            onPress={this.onPress}
            textColor={colors.THEME_LIGHT_SECONDARY}
          />
        </View>
      </View>
    );
  }
}
