import { View, Text,Image,TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Color from '../../Utils/Color';
import Star from '../../../assets/images/star.png';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Header() {
    const {isLoaded, isSignedIn, user}=useUser();
    return  isLoaded&&(
      <View>
      <View style ={[{justifyContent:"space-between"},styles.rowStyle]}>
        <View style={styles.rowStyle}>
          <Image source ={{uri:user?.imageUrl}}
          style={{width:50,height:50,borderRadius:99}}/>
          <View>
               <Text style={{color:Color.WHITE,
                fontSize:20,fontFamily:'Outfit-Black',}}>{user?.fullName}</Text>
              
            </View>
      </View>
      <View>
        <Image source={Star} style={{flexDirection:"row",alignItems:"center",width:20,height:20,marginLeft:6,marginTop:8}}   />
        <Text style={{ marginLeft:4,marginBottom:8,fontFamily:"Outfit-Bold"}}>3500</Text>
      </View>
    </View>

  <View style={{backgroundColor:Color.WHİTE,paddingLeft:20,
    paddingRight:5,marginTop:25,
    borderRadius:99,
    display:"flex",flexDirection:"row",justifyContent:"space-between"
    }}>
     <TextInput placeholder='Kurs Ara' 
     style={{fontFamily:'outfit',fontSize:18}}/>
     <Ionicons name="search-circle" size={50} color={Color.BLUE} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  mainText:{
    color:Color.WHITE,
    fontSize:20,
    fontFamily:'Outfit-Black',
  },
  rowStyle:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }
})
