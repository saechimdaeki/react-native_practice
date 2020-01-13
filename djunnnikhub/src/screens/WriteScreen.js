import React, { Fragment } from 'react';
import {Platform,Image,SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback,ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

let photo = null
class  WriteScreen extends React.Component{
    state = {
        photo: null,
      };
      handleChoosePhoto=() => {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response });
          }
        });
      };
    render(){
        const { photo } = this.state;
    return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Icon onPress={()=>{this.props.navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.title}>글쓰기</Text>
            <Text style={{color:'white',marginLeft:110}}>모바일앱개발연구</Text>
            </View>
            <TouchableOpacity onPress={ToastAndroid.show('내용을 입력하세요',ToastAndroid.SHORT)} >
            <Text  style={{flexDirection:'row-reverse',textAlign:'right',color:'white',marginRight:100}}>
                완료
            </Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:14}}>
            <TextInput style={{marginTop:20}}
                placeholder="멤버들에게 전할 소식을 남기세요."
            >    
            </TextInput>
            <View style={{flex:1,borderTopWidth:1}}>
            {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
            </View>
        </View>
        <View style={{flex:1.5,flexDirection:'row',borderTopWidth:1}}>
            <TouchableOpacity>
            <Icon name="ios-camera" size={50} onPress={this.handleChoosePhoto} style={{marginLeft:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name="ios-clipboard" size={50} style={{marginLeft:20}}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
        }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:130
        
    },
    header:{
        flex:1.5,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        paddingTop:15,
    },
    subtitle:{
        fontSize:16,
        color:'#aaa',
        paddingLeft:15,
        paddingVertical:10,
    },
  
});
export default WriteScreen;