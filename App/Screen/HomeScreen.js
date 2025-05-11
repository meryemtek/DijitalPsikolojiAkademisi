import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Color from '../Utils/Color'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{
        backgroundColor: Color.GREEN,
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20
      }}> 
        <Header/>
      </View> 
      <View style={{ padding: 20 }}>
        <CourseList level={'Önerilen Kurslar'}/>
      </View>
      <View style={{ padding: 20 }}>
        <CourseList level={'Sosyal Psikoloji'}/>
      </View>
    </ScrollView>
  )
}