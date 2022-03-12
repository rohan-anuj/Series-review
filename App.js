import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './NavigationScreens/StackNavigation';
import DrawerNavigation from './NavigationScreens/DrawerNavigation';
import { enableScreens } from 'react-native-screens';
import auth from "./firebase"
enableScreens()

export default function App() {
   const [Auth,setAuth]=useState(false)
   
   
   
   setInterval(async()=>{ 
     
    await  auth
     .onAuthStateChanged(user=>{
       if(user){
         setAuth(true)
       }
       else{
         setAuth(false)
       }
     })
     
      
   },4000)

  
    
  






  return (
   <NavigationContainer>
     {Auth?<DrawerNavigation/>:<StackNavigation/>}
   
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
