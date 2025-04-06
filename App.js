import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from 'expo-font';
import LoginScreen from "./App/Screen/LoginScreen";
//import { ClerkProvider } from "@clerk/clerk-expo";
import { ClerkProvider, SignedIn , SignedOut} from '@clerk/clerk-expo';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";


export default function App() {
  const [fontsLoaded] = useFonts({
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Light": require("./assets/fonts/Outfit-Light.ttf"),
    "Outfit-Black": require("./assets/fonts/Outfit-Black.ttf"),
    "Outfit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  
  return (
    <ClerkProvider publishableKey={"pk_test_Y2VydGFpbi1mZXJyZXQtMjIuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <View style={styles.container}>
    
    <SignedIn>
      <NavigationContainer>
         <TabNavigation/>
      </NavigationContainer>
    </SignedIn>
    <SignedOut>
      <LoginScreen/>
    </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:20
   
  },
});
