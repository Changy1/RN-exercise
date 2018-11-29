import React, { Component } from 'react'
import { View } from 'react-native'


class Flex extends Component {
    render () {
        return (
            <View style = {{ flex: 1, flexDirection: 'row',justifyContent: 'space-around' }}>
                <View style = {{ height: 50, width: 50, backgroundColor: 'skyblue' }}></View>
                <View style = {{ height: 50, width: 50, backgroundColor: 'powderblue' }}></View>
                <View style = {{ height: 50, width: 50, backgroundColor: 'steelblue' }}></View>
            </View>
        )
    }
}

export default Flex