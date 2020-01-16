import React, { Fragment } from 'react';
import {CheckBox,Image,SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback,ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
class  QuizScreen extends React.Component{
  constructor(props){
    super(props);

  }
    render(){
        
    return (
    
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Icon onPress={()=>{this.props.navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.title}>출제된 퀴즈</Text>
            <Text style={{color:'white',fontWeight:'normal',alignContent:'center',justifyContent:'center',alignSelf:'center'}}>모바일앱개발연구</Text>
             {/*여기 값받아오는거 어떻게하는지 모르겟음...*/}
            </View>
            
        </View>
        <View style={{flex:14}}>
          <View style={{flex:4,marginBottom:50}}>
         <Text style={{fontSize:20,borderBottomWidth:1}}>
           진행중 퀴즈 
         </Text>
         <View style={{alignItems:'center',justifyContent:'center',flex:10}}>
           <Text style={{}}>
             진행중인 퀴즈가 없습니다.
           </Text>
         </View>
         </View>
            <View style={{flex:15,borderTopWidth:1}}>
              <View style={{marginTop:10}}>
            <Text style={{borderBottomWidth:1}}>
              이전 기록
            </Text>
         </View>
         <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
           <Text>
             이전 퀴즈가 없습니다
           </Text>
         </View>

            </View>
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
        marginLeft:10
        
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
export default QuizScreen;