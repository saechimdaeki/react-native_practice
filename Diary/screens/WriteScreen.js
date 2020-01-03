import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import WriteHeader from '../components/WriteHeader';
export default class WriteScreen extends React.Component {
    static navigationOptions = {
         tabBarIcon: ({tintColor}) => (
           <Icon name="bookmark" size={30} style={{color:tintColor}}/>
         ),
         tabBarOnPress:({navigation}) => {
             navigation.navigate('Write')
         }
       }
     render(){
     return (
         <SafeAreaView style= {styles.container}>
             <WriteHeader/>
                 <Text style={styles.textst}>Write scrrrrrrrreenn</Text>
 
         </SafeAreaView>
 
         );
     }
 }

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:50,
        backgroundColor:'pink',
    },
    textst:{
        fontSize:20,
        fontWeight:'bold',
    },
})