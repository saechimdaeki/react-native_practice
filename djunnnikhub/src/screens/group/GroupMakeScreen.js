import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/customButton';
import InfoButton from '../../components/InfoButton';

const GroupMakeScreen = ({navigation})=>{
    
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>강의 만들기</Text>
                <Text onPress={()=>{Alert.alert('강의 만들기 완료')}} style={{color:'#fff',fontSize:22, position:'absolute',right:15,}}>완료</Text> 
            </View>
            <View style={styles.contents}>
           
            </View>
        </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff'
    },
    header:{
        flex:1,
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
});
export default GroupMakeScreen;