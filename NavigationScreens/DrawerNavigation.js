import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer'
import BottomNavigation from './BottomNavigation'
import { enableScreens } from 'react-native-screens'
import Stream from '../screens/Stream'
import Home from '../screens/Home'
import Search from '../screens/Search'
const Drawer=createDrawerNavigator()

enableScreens()
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><CustomDrawer {...props} />}>
        <Drawer.Screen name="navigation"  component={BottomNavigation} />
        <Drawer.Screen name="Streams" component={Stream} />

    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})