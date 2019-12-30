import React, { Component } from 'react';
import { Button,Text, View,TextInput, Image,StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


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
        <Text style={{marginLeft:100,alignItems:"center",justifyContent:"center"}}>플립드 러닝을 위한 포털</Text>
        <TextInput style={{backgroundColor:'white'}}>
          직번(학번)
        </TextInput>
        <TextInput style={{marginTop:20,backgroundColor:'white'}}>
          비밀번호
        </TextInput>

        <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"CheckBox"}
/>

        <View style={{marginTop:10}}>
          <Button
          
            onPress={this._onPressButton}
            title="로그인"
            color="blue"
          />
         
        </View>
         <View style={{flex:1}}>
           <Text>dada13131313</Text>
           
        </View>
        
        </View>
       
       
       
  
    )
  }
}