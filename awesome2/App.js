import React, { Component } from 'react';
import { Button,Text, View,TextInput, Image,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';



const styles=StyleSheet.create({
  abc:{
  },
  for_login:{
      flex:1,
      alignItems:'center'
  },
});



export default class dimension extends Component{
  
    
  _onPressButton(){
    alert('tapped the button')
    
  }
  
  render(){
    return (
        <View style={styles.Container}>
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{marginLeft:120,width: 100, height: 100,alignContent:"center",justifyContent:"center"}} />
        <Text style={{marginLeft:100,alignContent:"center",justifyContent:"center"}}>플립드 러닝을 위한 포털</Text>
        <TextInput style={{backgroundColor:'white'}}>
          직번(학번)
        </TextInput>
        <TextInput style={{marginTop:20,backgroundColor:'white'}}>
          비밀번호
        </TextInput>

     

        <View style={{marginTop:10}}>
          <Button
           onPress={()=>this.props.navigation.navigate('Details')}
            title="로그인"
            color="blue"
             />
        </View>
         <View style={{marginTop:20,flex:1,backgroundColor:'gray', flexDirection:'row' ,dimension:1}}>
         <Image source={require('./image/android.png')}
       style={{width:'40%' ,height: 100}} />
       <Image source={require('./image/iphone.png')}
       style={{marginLeft:40,width:'40%' ,height: 100}} />
        <View style={{flex:1, flexDirection:'row'}}>
            <Text style={{fontSize:5}}>회원가입</Text>
            <Text style={{marginLeft:5,fontSize:10}}>아이디/비밀번호 찾기</Text>
        </View>
          </View>

        </View>
    )
  }
}