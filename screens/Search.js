import { StyleSheet,ActivityIndicator, Text,Image, View,TouchableOpacity, Button,ScrollView,ScrollAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '../firebase'
import { enableScreens } from 'react-native-screens'
import tw from 'twrnc'
import axios from "axios"
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'
import {api_key} from "@env"


const Search = () => {
  const [latest,setLatest]=useState()
  const [keyword,setkeyword]=useState()
  const [data,setdata]=useState([])
  

 async function searchedData(){
  var options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/search',
    params: {title: keyword, page: '1'},
    headers: {
      'x-rapidapi-host': 'ott-details.p.rapidapi.com',
      'x-rapidapi-key': '246051ccd0mshd148d7d4de29b14p179a86jsn856e27f2df24'
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

  return (
    <View>
      <View  style={tw`p-2 rounded-full flex flex-row  w-72 justify-center items-center  my-2 border-gray-300 border-2 `}><TextInput placeholder='search keyword'  style={tw`p-2 w-40   text-lg`} placeholderTextColor={`rgba(209, 26, 202, 1)`} textAlign='center' value={keyword} onChangeText={setkeyword} /><TouchableOpacity onPress={searchedData}><AntDesign name="search1" style={tw`p-2 rounded-full ml-2 border-gray-300 border-2`} size={24} color="silver" /></TouchableOpacity></View><Text style={tw`text-gray-500 mx-2  `}>Type in the keyword & Just Search The movie/series You want</Text><ScrollView style={tw`h-full `}>{latest?data.map(movie=>{return <View key={movie.imdbid} style={tw` my-2 flex flex-row justify-between  items-center  w-full bg-gray-300  h-40`}>
        <Image source={{uri:movie.imageurl===" " || !movie.imgurl?"https://cdn.codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png":`${movie.imageurl}`}} style={tw`w-32 rounded h-40 `} />
      <View style={tw` flex flex-col justify-between w-72 items-center`}><Text style={tw`font-bold text-pink-500`}>{movie.title}</Text><Text style={tw`font-bold text-gray-500`}>Genre: {movie.genre}</Text><Text style={tw`font-bold  text-yellow-600`}>Imdbrating: {movie.imdbrating}/10 ⭐</Text><Text style={tw`text-gray-500 ml-2 `}>{movie.synopsis}</Text></View></View>}):<View style={tw`m-10 `}><ActivityIndicator size="large" color="rgba(209, 26, 202, 1)" /></View>}</ScrollView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})