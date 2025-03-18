import { View, Text, Image } from 'react-native'
import React from 'react'
import app from './../../assets/images/ekran.jpg'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Color from '../Utils/Color'
import google from './../../assets/images/google.png'

export default function LoginScreen() {
  return (
    <View style={{display: "flex", alignItems: "center"}}>
      <Image source={app}
      style={{width: 250, height:500,
        objectFit: "contain",marginTop:70,
      }} />
      <View style={{
        height:400,
        backgroundColor:Color.GREEN,
        width:'100%',
        marginTop:-80,
        padding:20
      }}>
        <Text style={{textAlign:'center',fontsize:25, color:Color.WHİTE,
          fontFamily:'Outfit-Bold'
        }}>CODEBOX</Text>
        <Text style={{textAlign:'center',fontsize:20,
           marginTop:20,
           color:Color.LİGHT_PRİMARY,
           fontFamily:'Outfit'}}>Your Ultimate

        </Text>
        <View>
          <Image source={google}
          style={{width: 40, height:40}}/>
          <Text >
            Google ile giriş yap
          </Text>
        </View>
      </View>
    </View>
    
  )
}