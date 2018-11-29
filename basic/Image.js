import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

class ImageBox extends Component {
    render () {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <Image source={pic} style = {styles.images}/>
        )
    }
}

const styles = StyleSheet.create({
    images: {
        width: 193,
        height: 110
    }
})

export default ImageBox