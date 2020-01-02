import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function input({value,changeText,addtodoitem}) {
  
  return (
    <TextInput
    value={value}
    onChangeText={changeText}
    onEndEditing={addtodoitem}

    style={styles.input}
    placeholder={"할일을 입력해주세요"}
    maxLength={30}
    returnKeyType="done"
    />
    
     
  );
}

const styles = StyleSheet.create({
  
    input:{
        fontSize:17,
        fontWeight:'bold',
        paddingTop:5,
    },
  });
