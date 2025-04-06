import { View, Text, Image } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import app from './../../assets/images/ekran.jpg'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Color from '../Utils/Color'
import { useOAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import google from './../../assets/images/google.png'
import { TouchableOpacity } from 'react-native';
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = 
      await startOAuthFlow();
      
      
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        
      }
    } catch (err) {
     
      console.error("OAuth error", err);
    }
  }, [])

  return (
    <View style={{display: "flex", alignItems: "center"}}>
      <Image source={app}
      style={{width:800, height:500,
        objectFit: "contain",marginTop:70,
      }} />
      <View style={{
        height:400,
        backgroundColor:Color.BLUE,
        width:'100%',
        marginTop:-50,
        padding:50
      }}>

        <Text style={{textAlign:'center',fontSize:30,
           marginTop:20,
           color:Color.WHİTE,
           fontFamily:'Outfit-Bold'}}>Mind Path</Text>

      <TouchableOpacity
      onPress={onPress}
      style = {{backgroundColor:Color.WHİTE,
          display:'flex',flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          gap:10,
          padding:10,
          borderRadius:99,marginTop:30
        }}>
          <Image source={google}
          style={{width: 40, height:40}}/>
          <Text style={{fontSize:20,
            color:Color.GREEN,
            fontFamily:'outfit',
          }}>
            Google ile giriş yap
          </Text>
           </TouchableOpacity>
      </View>
    </View>

  )
}