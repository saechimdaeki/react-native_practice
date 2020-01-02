import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Subtittle from './app/components/Subtitle';
import Input from './app/components/input';
import ListItem from './app/components/Listitem';
import {AntDesign} from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View stlyle={styles.headercenter}>
           <Header/>
      </View>
      <View style={styles.subtitlepos}>
        <Subtittle title="해야할일"/>
        <Input/>
      </View>
      <View style={styles.subtitlepos}>
        <Subtittle title="해야할일 목록"/>
        <ListItem/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  
    
  },
  headercenter:{
    alignItems:"center",
  },
  subtitlepos:{
    marginLeft:20,
  },
  

});
