import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons,Feather} from '@expo/vector-icons';


const weather ={
  Sunny: {
    icon:'sun',
    colors:['#F37335','#FDC830'],
  },
  
  Mist: {
    icon:'md-sunny',
    colors:['#4c669f','#3b5998'],
  },
  Clouds: {
    icon:'cloud',
    colors:['#FFFDE4','#005AA7'],
  },
  Rain: {
    icon:'cloud-rain',
    colors:['#000046','#1CB5E0'],
  },
  Drizzle:{
    icon:'cloud-drizzle',
    colors:['#00d2ff','#928DAB'],
  },
  thunderstorm:{
    icon:'cloud-lightning',
    colors:['#73C8A9','#373B44'],
  },
  snow:{
    icon:'cloud-snow',
    colors:['#44A08D','#093637']
  },
  
}


export default function Weather({temp,title}) {

    
  
   
  
  return (
    //console.log(weather),
    <LinearGradient
          colors={weather[title].colors}
          style={styles.weatherback}>
            <View style={styles.iconarea}>
            <Text style={styles.iconcustom}>
              <Feather name={weather[title].icon} size={150}/>
            </Text>
            </View>
            <View style={styles.textarea}>
            <Text style={styles.textcustom} >
              {title}
              
            </Text>
            <Text style={styles.textcustom} >
              {temp}°C 
            </Text>
            </View>
        </LinearGradient>
  );
}
//sunny rain thunder  MaterialcommuniyuIcon

const styles = StyleSheet.create({
  weatherback:{
    flex:1,

  },
  iconarea:{
    flex:2,
    justifyContent:"center",
    alignItems:"center",

  },
  textarea:{
    flex:1,
    alignItems:"flex-end",
    paddingRight:80,

  },
  textcustom:{
    fontSize:40,
    fontWeight:"bold",
    color:'white',
  },
  iconcustom:{
    fontSize:30,
    color:'white',
  },

});
