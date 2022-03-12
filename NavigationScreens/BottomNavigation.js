import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";


const Tab=createBottomTabNavigator()

const BottomNavigation = () => {
  return (
   <Tab.Navigator  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (route.name === 'Search') {
        iconName = focused ? 'search-outline' : 'search';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerTitleAlign:'center',
    headerStyle:{backgroundColor:"#FF1493"},
    headerTitleStyle:{color:"white"},
    tabBarActiveTintColor: '#FF1493',
    tabBarInactiveTintColor: 'gray',
  })}>
       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Search" component={Search} />
   </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})