import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Blink extends Component {
    constructor (props){
        super(props)
        this.state = {
            isShow: true
        }

        setInterval( () => {
            this.setState({
                isShow: !this.state.isShow
            })
        },1000)
    }
    render () {
        return (
            <View>
                <Text style = { this.state.isShow ? { display: 'flex' } : { display: 'none' }}>{this.props.children}</Text>
            </View>
        )
    }
}

class AllBlink extends Component {
    render () {
        return (
            <View>
                <Blink>我是你爸爸</Blink>
                <Blink>我是你爷爷</Blink>
                <Blink>我是你爷爷</Blink>
            </View>
        )
    }
}

export default AllBlink