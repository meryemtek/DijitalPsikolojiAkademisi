import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import ProfileScreen from '../Screen/ProfileScreen';
import LeaderBoard from '../Screen/LeaderBoard';
import { Ionicons } from '@expo/vector-icons'; // Düzeltilmiş
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Kurslarım"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Skor Tablosu"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="leaderboard" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) =>
             <FontAwesome5 name="user-cog" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
