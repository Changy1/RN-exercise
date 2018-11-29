import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, FlatList, SectionList } from 'react-native'
import ImageBox from './basic/Image'
import AllBlink from './basic/Blink'
import Flex from './basic/Flex'
import Input from './basic/Input'
import ButtonBox from './basic/ButtonBox'

class App extends Component {
  render () {
    return ( 
        <View style = {styles.container}>
          <SectionList
            sections = {[
              {title: 'A', data: ['Devin','HAHA','HEHE','YIYI','ZZZZ']},
              {title: 'B', data: ['你好', '世界', '我是', '一个', '前端', '工程师']}
            ]}
            renderItem = {({item}) => <Text style = {styles.item}>{item}</Text>}
            renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}>{section.title}</Text>}
            keyExtractor = {(item,index) => index}
          />
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader : {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default App