import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext} >ToDoList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headercontainer: {
        marginTop:50,
        marginBottom:50,
        alignItems:"center"

  
    },
    headertext:{
        fontSize:25,
        fontWeight:'bold',
        color:'#3f4e66'
    },
  });