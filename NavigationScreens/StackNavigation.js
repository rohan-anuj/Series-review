import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Sigin from '../screens/Sigin'
import SignUp from '../screens/SignUp';
import Stream from '../screens/Stream';
const stack=createStackNavigator()



const StackNavigation = () => {
  return (
    <stack.Navigator 
    screenOptions={{headerShown:true,headerStyle:{
    backgroundColor:"#9AC4F8"

    }, headerTintColor: "white",headerTitleAlign:"center",headerShown:false}}>
       <stack.Screen name="signin" component={Sigin} />
    <stack.Screen name="signUp" component={SignUp} />
    <stack.Screen name="Streams" component={Stream}/>
   
   
    
</stack.Navigator>

  )
}

export default StackNavigation

const styles = StyleSheet.create({})