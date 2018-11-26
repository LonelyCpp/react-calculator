import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback, } from 'react-native';
import mainLayoutStyle from './styles/mainLayout.js'
import textStyle from './styles/text.js'

export default class NumberButton extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}} 
                background={TouchableNativeFeedback.Ripple('orange', true)}>
                <View style={mainLayoutStyle.numberButton}>
                    <Text style={textStyle.numberPad}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}