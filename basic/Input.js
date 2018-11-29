import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class Input extends Component {
    constructor () {
        super() 
        this.state = {
            text: ''
        }
    }
    render () {
        return (
            <View style = {{ padding: 10 }}>
                <TextInput
                    style = {{ height: 40 }}
                    placeholder = '请输入'
                    onChangeText = { (text) => this.setState({ text }) }
                />
                <Text style = {{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        )
    }
}

export default Input