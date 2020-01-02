import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

export default function Subtitle({title}) {
  
  return (
    <View >
      <Text style={styles.subtitletext}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  
  subtitletext:{
      fontSize:18,
      fontWeight:'bold',
      color:'#3f4e66'
  },
});