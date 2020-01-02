import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
export default function weather({temp,title}) {
  
  return (
    <LinearGradient
          colors={['#4c669f'/*시작부분 */, '#3b5998'/*중간부분*/, '#ffffff']}
          style={styles.weatherback}>
            <View style={styles.iconarea}>
            <Text style={styles.iconcustom}>
              {title}
            </Text>
            </View>
            <View style={styles.textarea}>
            <Text style={styles.textcustom} >
              {temp}
            </Text>
            </View>
        </LinearGradient>
  );
}


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
