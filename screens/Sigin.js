import React, {useState} from 'react'
import Checkbox from 'expo-checkbox'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import tw from "twrnc"
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { Formik } from 'formik'
import auth from '../firebase'
import { Alert } from 'react-native-web'

const Sigin = ({navigation}) => {
  const [selected,setselected]=useState(false)
  console.log(selected)
  
  const [loaded] = useFonts({
    Ubuntu: require('../assets/fonts/UbuntuMono-Regular.ttf'),
    Ubuntuitalic:require("../assets/fonts/UbuntuMono-Italic.ttf")
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <View>
    <Formik 
    initialValues={{ email:'',password:''}} 
    onSubmit={async(values) => {
      await auth
      .signInWithEmailAndPassword(values.email,values.password)
      .then(UserCredentials=>{UserCredentials.user
      const user=UserCredentials.user 
    console.log(user.email)})
      .catch(err=>{console.log(err)})
      console.log(values.email,values.password)
        
      }
    }>
    {({ handleChange, handleSubmit, values }) =><View style={tw`flex bg-gray-800  h-full `}>
      <Text style={{color:"white",marginTop:60,fontFamily:'Ubuntu',fontSize:28}}>Login</Text> 
      <View style={tw`flex   mt-40  items-center    border-white  `}>
         <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:-200,marginBottom:-20}}>Email</Text>
        <LinearGradient colors={['rgba(209, 26, 202, 1)','rgba(228, 212, 228, 0)']}
        style={tw`w-72 flex items-center  m-5 rounded-xl h-20`}>
      
          <TextInput placeholder='Your Email here' textAlign='center' id="email" name="email" onChangeText={handleChange('email')} value={values.email}  placeholderTextColor="white"   style={tw` border-white mt-2 rounded-xl text-white h-16 bg-gray-800 w-68`}/>

        </LinearGradient>
        <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:-200,marginBottom:-20}}>Password</Text>
     
        <LinearGradient colors={['rgba(209, 26, 202, 1)','rgba(228, 212, 228, 0)']}
        style={tw`w-72 flex items-center  m-5 rounded-xl h-20`}>
      
          <TextInput placeholder='Your Password Here' textAlign='center' onChangeText={handleChange('password')} value={values.password}  secureTextEntry={!selected} placeholderTextColor="white"   style={tw` border-white mt-2 rounded-xl text-white h-16 bg-gray-800 w-68`}/>

        </LinearGradient>
        <View style={tw`flex flex-row justify-between`}><Checkbox 
        value={selected}
        onValueChange={setselected}  color={selected ?'rgba(209, 26, 202, 1)':undefined}/><Text style={tw`text-white ml-2`}>Check Password</Text></View>
        <TouchableOpacity onPress={()=>handleSubmit()} style={{backgroundColor:"rgba(209, 26, 202, 1)",padding:20,borderRadius:10,marginTop:30,width:200,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20}} >Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("signUp")} ><Text style={tw`text-white`}>Dont Have an Account ? create One</Text></TouchableOpacity>
        
      </View>
    </View>}
    </Formik>
    </View>
  )
}

export default Sigin

const styles = StyleSheet.create({})