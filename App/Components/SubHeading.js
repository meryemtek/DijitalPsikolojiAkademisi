import { View, Text } from 'react-native'
import React from 'react'
import Color from '../Utils/Color'

export default function SubHeading({text,color=Color.BLACK}) {
  return (
    <View>
      <Text style={{
        fontFamily:"Outfit-Bold",
        fontSize:23,
        color:color
     }}>{text}</Text>
    </View>
  )
}