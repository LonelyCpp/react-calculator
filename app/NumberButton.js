

import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback, } from 'react-native';

import mainLayoutStyle from './styles/mainLayout.js'
import textStyle from './styles/text.js'

/**
 * UI component that represent the buttons on a calculator
 * 
 * Takes two props
 * 1. A string prop to display on the button
 * 2. A function that takes one parameter. 
 * (calls the function when the button is pressed with the string prop)
 */
export default class NumberButton extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableNativeFeedback
                onPress={() => {this.props.onPress(this.props.text)}} 
                background={TouchableNativeFeedback.Ripple('orange', true)}>
                <View style={mainLayoutStyle.numberButton}>
                    <Text style={textStyle.numberPad}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}