import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Color from '../Utils/Color'
import CourseList from '../Components/CourseList'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor:Color.BLUE,height:250,
        padding:20}}> 
      
      <Header/>
      </View> 
      <View style={{padding:20}}>
        <CourseList level={'kisiselGelisim'}/>
      </View>
    </View>
  )
}