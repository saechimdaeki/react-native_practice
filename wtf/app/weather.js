import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function weather() {
  
  return (
    <LinearGradient
          colors={['#4c669f', '#3b5998', '#ffffff']}
          style={styles.weatherback}>
          
        </LinearGradient>
  );
}


const styles = StyleSheet.create({
  weatherback:{
    flex:1,

  },
});
