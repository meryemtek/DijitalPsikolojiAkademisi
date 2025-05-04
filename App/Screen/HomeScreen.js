import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Color from '../Utils/Color'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor:Color.GREEN,height:250,borderRadius:9,
        padding:20}}> 
      
      <Header/>
      </View> 
      <View style={{padding:20}}>
        <CourseList level={'kisiselGelisim'}/>
      </View>
     <CourseList level={'sosyalPsikoloji'}/>
    </View>
  )
}