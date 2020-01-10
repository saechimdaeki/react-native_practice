import React, {Component} from 'react';
import {View,TextInput,Text,SafeAreaView ,TouchableOpacity,Image,Linking,Button,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground} from 'react-native';
import {HeaderButton,HeaderButtons,Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native'
import Home from '../Home/index'




let deviceWidth = Dimensions.get('window').width


const searchurl="https://khub.jbnu.ac.kr/mobile/web/app/#/group/search"

const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

class additional extends React.Component {
  
    render(){
        return(
            <View>
                <Text>
                    hellllo test
                </Text>
            </View>
            )
}
}
export default additional
// 스타일 퍼옴 링크:
//https://github.com/Djunnni/react-native-summary/blob/master/khub/src/screens/MainScreen.js
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        flex:1,
        fontSize:22,
        color:'#fff',
        marginTop:10,
        marginLeft:5,
        fontWeight:'bold',
    },
    titleItem:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    titleIcon:{
        paddingHorizontal:15,
        color:'#fff',
        fontSize:26,
    },
    header:{
        flex:1,
        paddingLeft:15,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        alignItems:'center',
        padding:15,
    },
    modal : {
        flex:1,
        width:'70%',
        marginHorizontal:'15%',
    },
    modalview : {
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:5,
    },
    modalitem : {
        fontSize:18,
        paddingVertical:10,
    },
    item:{
        
        width:132,
        height:150,
        margin:5,
        marginLeft:20,
        borderRadius:10,
        overflow:'hidden',

    },
    itemImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain',
    },
    itemInfo:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:131,
        height:40,
    },
    end:{
        
    }
});
