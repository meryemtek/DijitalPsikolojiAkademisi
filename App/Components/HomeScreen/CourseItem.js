import { View, Text, Image } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import { Ionicons } from '@expo/vector-icons'

export default function CourseItem({ item }) {
  return (
    <View style={{
      padding: 10,
      backgroundColor: Color.WHİTE, 
      marginRight: 15,
      borderRadius: 15
    }}>
      <Image 
          source={{ uri: item?.banner?.url }}
          style={{ width: 180, height: 170, borderRadius: 10 }}
      />
      <View style={{ padding: 7 }}>
          <Text style={{
              fontFamily: 'Outfit-medium',
              fontSize: 17
          }}>
              {item.name}
          </Text>
      </View>
          
      <View style={{display: 'flex', flexDirection: 'row',
              justifyContent: 'space-between'}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
            gap: 5,marginTop: 5
           }}> 
          <Ionicons name="book" size={18} color="black" />
          <Text style={{fontFamily:'Outfit-Medium'}}> {item?.chapters?.length} Seans</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
            gap: 5,marginTop: 5
           }}> 
          <Ionicons name="time-outline" size={18} color="black" />
          <Text style={{fontFamily:'Outfit-Bold'}}>{item?.time}</Text>
          </View>
      </View>
    </View>
  )
}