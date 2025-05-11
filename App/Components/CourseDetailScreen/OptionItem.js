import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OptionItem({icon,value}) {
  return (
    <View style={{display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between'}}>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
      gap: 5,marginTop: 5
     }}> 
    <Ionicons name={icon} size={18} color="black" />
    <Text style={{fontFamily:'outfit'}}> {value} </Text>
    </View>
    </View>
  )
}