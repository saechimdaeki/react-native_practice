import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class MainScreen extends React.Component {
   static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
          <Icon name="bookmark" size={30} style={{color:tintColor}}/>
        }
      }
    render(){
    return (
        <SafeAreaView style= {styles.container}>
                <Text style={styles.textst}>main scrrrrrrrreenn</Text>

        </SafeAreaView>

        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    textst:{
        fontSize:20,
        fontWeight:"bold",
    },
})