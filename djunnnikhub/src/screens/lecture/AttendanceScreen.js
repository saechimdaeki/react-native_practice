import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




const AttendanceScreen = ({navigation})=>{
    
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <View style={{flexDirection:'column',marginLeft:120}}> 
                <Text style={{color:'white'}}>
                    출석체크(관리자)
                </Text>               
                <Text style={{color:'white',justifyContent:'center'}}>모바일앱개발연구</Text>
                </View>
                <View style={{marginLeft:100}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('createAttendance')}>
                <Icon name="md-add" size={26} style={{color:'white'}}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contents}>
                <Text style={{alignSelf:'center'}}>
                    출석부가 없습니다.
                </Text>
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
        fontSize:19,
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
export default AttendanceScreen;