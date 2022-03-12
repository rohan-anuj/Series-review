import React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import tw from "twrnc"
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { Formik } from 'formik'
import auth from '../firebase'

const SignUp = ({navigation}) => {
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
    onSubmit={values => {
      auth
      .createUserWithEmailAndPassword(values.email,values.password)
      .then(UserCredential=>console.log(UserCredential.user))
      .catch(err=>console.log(err))
      console.log(values.email,values.password)
        
      }
    }>
    {({ handleChange, handleSubmit, values }) =><View style={tw`flex bg-gray-800  h-full `}>
      <Text style={{color:"white",marginTop:60,fontFamily:'Ubuntu',fontSize:28}}>SignUp</Text> 
      <View style={tw`flex   mt-40  items-center    border-white  `}>
         <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:-200,marginBottom:-20}}>Email</Text>
        <LinearGradient colors={['rgba(209, 26, 202, 1)','rgba(228, 212, 228, 0)']}
        style={tw`w-72 flex items-center  m-5 rounded-xl h-20`}>
      
          <TextInput placeholder='Your Email here' textAlign='center' id="email" name="email" onChangeText={handleChange('email')} value={values.email}  placeholderTextColor="white"   style={tw` border-white mt-2 rounded-xl text-white h-16 bg-gray-800 w-68`}/>

        </LinearGradient>
        <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:-200,marginBottom:-20}}>Password</Text>
     
        <LinearGradient colors={['rgba(209, 26, 202, 1)','rgba(228, 212, 228, 0)']}
        style={tw`w-72 flex items-center  m-5 rounded-xl h-20`}>
      
          <TextInput placeholder='Your Password Here' textAlign='center' onChangeText={handleChange('password')} value={values.password}  secureTextEntry={true} placeholderTextColor="white"   style={tw` border-white mt-2 rounded-xl text-white h-16 bg-gray-800 w-68`}/>

        </LinearGradient>
        <TouchableOpacity onPress={()=>handleSubmit()} style={{backgroundColor:"rgba(209, 26, 202, 1)",padding:20,borderRadius:10,marginTop:30,width:200,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20}} >SignUp</Text></TouchableOpacity>
      
        
      </View>
    </View>}
    </Formik>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})