import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import WEATHER from './app/Weather';
import * as Location from 'expo-location';

const API_KEY="637ece8e9acd7936fbcef19ee8215dd5"
const API_KEY2="4716c24d34633a1fb730d59f9519d65e";

export default  class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isloaded :false,
    }
  }
  componentDidMount(){
    
    this._getweather()
  }

  _getweather = async() =>{ //이아래가 처리될때까지 다음으로 넘어가지않겟다
    await Location.requestPermissionsAsync()
  const _location =await Location.getCurrentPositionAsync()
  //console.log(_location)
  const {coords: {latitude,longtitude}}=_location
  const _response =  await fetch('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=637ece8e9acd7936fbcef19ee8215dd5&units=metric')
  const _json= await _response.json() //json으로 바꿔줌 

  //console.log(_response)
 // console.log(_json)
 this.setState( {isloaded: true,temp: Math.floor(_json.main.temp),title: _json.weather[0].main})
 // console.log(Math.floor(_json.main.temp))
  //console.log(_json.weather[0].main)
  }
  render(){
  return (
    console.log(this.state),
    <View style={styles.container}>
      {this.state.isloaded ? <WEATHER temp={this.state.temp}  title={this.state.title}/> :<ActivityIndicator style={styles.indicator} color='black' size="large"/> }
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  indicator:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
});
