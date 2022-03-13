import { StyleSheet, Text,Button,Image ,ScrollView,ActivityIndicator, View } from 'react-native'
import React, {useState} from 'react'
import tw from "twrnc"
import axios from "axios"
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import {api_key} from "@env"

const Stream = ({navigation,route}) => {
    const [latest,setLatest]=useState(false)
    const [data,setdata]=useState([])
    const [page,setPage]=useState(0)
async function DataExtract(){
    var options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        params: {
          country: 'us',
          service: name,
          type: 'series',
          genre: '18',
          page: page,
          output_language: 'en',
          language: 'en'
        },
        headers: {
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          'x-rapidapi-key': api_key
        }
      };
      
      axios.request(options).then(function (response) {
          if(response){
              setLatest(true)
          }
          setdata(response.data.results);
      }).catch(function (error) {
          console.error(error);
      });

}
console.log(data)
    const {name}=route.params
  return (
    <View style={tw`flex flex-col justify-between h-full mt-10 items-center`}>
        <View style={tw`flex flex-row justify-between  mb-10 w-72 items-center `}><TouchableOpacity onPress={()=>{navigation.navigate("navigation")
    setdata([])
    setPage(0)
    setLatest(false)}}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
    <View style={tw`flex flex-row justify-between items-center w-20`}><TouchableOpacity onPress={()=>{setPage(prev=>prev<1?1:prev-1)
    DataExtract()}}  style={tw` p-2 border  border-pink-500 `}><FontAwesome5 name="less-than" size={20} color="silver" /></TouchableOpacity><Text> page {page} </Text><TouchableOpacity style={tw` p-2 border  border-pink-500 `}  onPress={()=>{setPage(prev=>prev>=4?4:prev+1) 
    DataExtract()}}><FontAwesome5 name="greater-than" size={20} color="silver" /></TouchableOpacity></View>
    {/* <TouchableOpacity onPress={DataExtract} ><Ionicons name="reload" size={24} color="black" /></TouchableOpacity> */}
        </View>
        
        <View style={tw`w-full flex flex-row items-center justify-center`}><Text style={tw`text-pink-600 font-bold text-lg`}>All {name} Series Review </Text></View>
        <ScrollView style={tw`h-full `}>{latest?data.map(movie=>{return <View  key={movie.imdbID} style={tw` my-2 flex flex-row justify-between  items-center  w-full bg-gray-300  h-40`}>
        <Image source={{uri:`${movie.posterURLs.original}`}} style={tw`w-32 rounded h-40 `} />
      <View style={tw` flex flex-col justify-between w-72 items-center`}><Text style={tw`font-bold text-pink-500`}>{movie.originalTitle}</Text><Text style={tw`font-bold text-gray-500`}>Year: {movie.year}</Text><Text style={tw`font-bold  text-yellow-600`}>Imdbrating: {movie.imdbRating/10}/10 ⭐</Text><Text style={tw`text-gray-500 ml-2 `}>{movie.overview.substr(0,80)}</Text><Text  style={tw`text-gray-600 font-bold  ml-2 `}>cast: {movie.cast}</Text></View></View>}):<View style={tw`m-10 `}><ActivityIndicator size="large" color="rgba(209, 26, 202, 1)" /></View>}</ScrollView>
    </View>
  )
}

export default Stream

const styles = StyleSheet.create({})