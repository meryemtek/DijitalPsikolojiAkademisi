import { View, Text, Image } from 'react-native'
import React from 'react'
import app from './../../assets/images/ekran.jpg'

export default function LoginScreen() {
  return (
    <View style={{display: "flex", alignItems: "center"}}>
      <Image source={app}
      style={{width: 250, height: 500,
        objectFit: "contain",marginTop:50,
      }} />
    </View>
  )
}