import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




const AttendanceScreen = ({navigation})=>{
    
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <View style={{flexDirection:'column',marginLeft:120}}> 
                <Text style={{color:'white',justifyContent:'center',alignSelf:'center'}}>
                    출제된 레포트
                </Text>               
                <Text style={{color:'white',justifyContent:'center',justifyContent:'center',alignSelf:'center'}}>모바일앱개발연구</Text>
                </View>
                <View style={{marginLeft:100}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('createReport')}>
                <Icon name="md-add" size={26} style={{color:'white'}}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contents}>
                <Text>
                    진행중 레포트
                </Text>
                <View style={{borderTopWidth:1,marginTop:10,alignContent:'center',flex:5,borderBottomWidth:1}}>
                    <Text style={{justifyContent:'center',alignSelf:'center',marginTop:30}}>
                        진행중인 레포트가 없습니다.
                    </Text>
                </View>
                <Text style={{marginBottom:5,marginTop:5}}>
                    이전 기록
                </Text>
                <View style={{flex:20,borderTopWidth:1}}>
                    <Text style={{justifyContent:'center',alignSelf:'center',marginTop:30}}>
                        이전 레포트가 없습니다.
                    </Text>
                </View>
                <View>
                    
                        
                
                </View>
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