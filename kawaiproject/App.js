import React from 'react';
import {TextInput, StyleSheet, Text, View,StatusBar, Dimensions , Platform} from 'react-native';
const { height, width} = Dimensions.get("window");
export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.title}>Kawai TODO </Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"new to do"}/>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title:{
    color:"white",
    fontSize:30,
    marginTop:50,
    fontWeight:"200",
    marginBottom:30
  },
  card: {
    backgroundColor: "white",
    flex:1,
    width:width-25,
    borderRadius:10,
    borderTopRightRadius:10,
    ...Platform.select({
      ios:{
        shadowColor:"rgba(50,50,50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:0
        }
        
      },
      android: {
        elevation:3
      }
    })
  }
});
