import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY="637ece8e9acd7936fbcef19ee8215dd5";
export default class extends React.Component {
  state={
    isLoading: true
  };
  getWeather=async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };
  getLocation= async () => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      //send to api 
     // console.log(coords.latitude, coords.longitude);
      this.getWeather(latitude,longitude);
      this.setState({ isLoading : false });
    }catch(error){
      Alert.alert("can't find you.","so sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading}=this.state;
    return isLoading? <Loading/> :null;
  }

}

