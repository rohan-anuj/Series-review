import { StyleSheet,ActivityIndicator, Text,Image, View,TouchableOpacity, Button,ScrollView,ScrollAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '../firebase'
import { enableScreens } from 'react-native-screens'
import tw from 'twrnc'
import axios from "axios"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {api_key} from "@env"



enableScreens()
const Home = ({navigation}) => {
  const [latest,setLatest]=useState(false)
  const [data,setdata]=useState([])
  const [user, setUser] = useState()
  

  var options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '5',
      max_imdb: '9.8',
      genre: 'action',
      language: 'english',
      type: 'show',
      sort: 'latest',
      page: '1'
    },
    headers: {
      'x-rapidapi-host': 'ott-details.p.rapidapi.com',
      'x-rapidapi-key': api_key
    }
  };
  
  

  async function promisedata({navigation}){ axios(options).then(async function (response) {
   
    const datas=await response.data
    setdata(datas.results)
    if(response.data){
      setLatest(true)
    };
  }).catch(function (error) {
    console.log(error);
  });}
    console.log(latest)


  console.log(data)

  

  return (
    <View style={tw`h-full  `}>
     <View style={tw`flex flex-row items-center justify-center p-2 bg-gray-200`}><TouchableOpacity style={tw`rounded-full shadow-xl w-10 h-10 mx-2  flex flex-col justify-center bg-pink-500 items-center `} onPress={promisedata}><AntDesign name="reload1" size={24} color="white" /></TouchableOpacity>
      <Text style={tw`text-pink-800`}>Press here to load data</Text></View> 
      <View style={tw`flex flex-row bg-gray-300 justify-evenly p-2 items-center`}>
       <TouchableOpacity onPress={()=>navigation.navigate("Streams",{name:"prime"})}><Image source={require(`../assets/images/amazon_2.jpg`)} style={tw`w-20 h-20  rounded-full border-4 border-pink-400`} /></TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("Streams",{name:"hulu"})}><Image source={require(`../assets/images/Hulu.png`)} style={tw`w-20 h-20  rounded-full border-4 border-pink-400`} /></TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("Streams",{name:"netflix"})}><Image source={require(`../assets/images/netflix.webp`)} style={tw`w-20 h-20  rounded-full border-4 border-pink-400`} /></TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("Streams",{name:"disney"})}><Image source={require(`../assets/images/disney.webp`)} style={tw`w-20 h-20  rounded-full border-4 border-pink-400`} /></TouchableOpacity>
       </View><Text style={tw`font-bold text-pink-600`}>latest Shows-:</Text><ScrollView style={tw`h-full `}>{latest?data.map(movie=>{return <View key={movie.imdbid} style={tw` my-2 flex flex-row justify-between  items-center  w-full bg-gray-300  h-40`}><Image source={{uri:`${movie.imageurl[0]}`}} style={tw`w-32 rounded h-40 `} /><View style={tw` flex flex-col justify-between w-72 items-center`}><Text style={tw`font-bold text-pink-500`}>{movie.title}</Text><Text style={tw`font-bold text-gray-500`}>Genre: {movie.genre}</Text><Text style={tw`font-bold  text-yellow-600`}>Imdbrating: {movie.imdbrating}/10 ⭐</Text><Text style={tw`text-gray-500 ml-2 `}>{movie.synopsis.substr(0,90)}</Text></View></View>}):<View style={tw`m-10 `}><Text style={tw`text-pink-600 ml-30 font-bold`}>Data loading.......</Text><ActivityIndicator size="large" color="rgba(209, 26, 202, 1)" /></View>}</ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})