import { StyleSheet, Text, View } from 'react-native'
import tw from "twrnc"
import React,{useState, useEffect} from 'react'
import auth from '../firebase'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const CustomDrawer = ({navigation}) => {
  const [user,setUser]=useState()
  setInterval(async()=>{
const usersigned=await auth.currentUser
if(auth.currentUser){
     setUser(usersigned.email)
}
else{
  
}
},2000)
console.log(user)

  return (
    <View style={tw` h-full flex  items-center `}>
    <View style={tw`mt-20 flex justify-center items-center text-pink-500 font-bold`}> 
    <Entypo name="user" size={90} color="rgba(209, 24, 200, 1)" /> 
      <Text style={tw` text-pink-500 text-lg font-bold`}>welcome</Text> 
      <Text style={tw` text-pink-500 font-bold`}>{user}</Text>
      </View>
      <View style={tw`w-full  mt-10`}>
        <TouchableOpacity style={tw`bg-pink-500  flex flex-row  p-2 `} onPress={()=>navigation.navigate("Streams",{name:"prime"})} ><Text style={tw`text-white text-lg font-bold ml-8 `} >Prime</Text></TouchableOpacity>
        <TouchableOpacity style={tw`bg-pink-500 flex flex-row  p-2  mt-2`} onPress={()=>navigation.navigate("Streams",{name:"netflix"})}><Text style={tw`text-white text-lg font-bold  ml-8 `} >Netflix</Text></TouchableOpacity>
        <TouchableOpacity style={tw`bg-pink-500 flex flex-row  p-2  mt-2`} onPress={()=>navigation.navigate("Streams",{name:"hulu"})}><Text style={tw`text-white text-lg font-bold  ml-8 `} >Hulu</Text></TouchableOpacity>
        <TouchableOpacity style={tw`bg-pink-500 flex flex-row  p-2  mt-2`} onPress={()=>navigation.navigate("Streams",{name:"hotstar"})}><Text style={tw`text-white text-lg font-bold  ml-8 `} >Hotstar</Text></TouchableOpacity>
       
       </View>
       <TouchableOpacity style={tw`bg-pink-500 rounded-xl flex flex-row  p-2  mt-30`} onPress={()=>auth.signOut()}><AntDesign name="logout" size={24} color="white" /><Text style={tw`text-white text-lg font-bold  ml-8 `} >Logout</Text></TouchableOpacity>

       
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})