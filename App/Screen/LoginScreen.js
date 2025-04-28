import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import app from './../../assets/images/ekran.jpg';
import google from './../../assets/images/google.png';
import Color from '../Utils/Color';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={app}
        style={{ height: '100%', width: '100%',  resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
        imageStyle={{ opacity: 0.7 }} // Resme şeffaflık
      >
        <View style={{
          height: 300,
          backgroundColor: Color.BLUE,
          width: '90%',
          marginTop: -50,
          padding: 30,
          borderRadius: 20,
          opacity: 0.9, // Kutuyu hafif şeffaf yapabilirsin istersen
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 30,
            marginTop: 20,
            color: Color.WHİTE,
            fontFamily: 'Outfit-Bold'
          }}>
            Mind Path
          </Text>

          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: Color.WHİTE,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: 10,
              borderRadius: 99,
              marginTop: 30
            }}
          >
            <Image
              source={google}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{
              fontSize: 20,
              color: Color.GREEN,
              fontFamily: 'Outfit'
            }}>
              Google ile giriş yap
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
