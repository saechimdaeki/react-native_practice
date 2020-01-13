import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/customButton';
import InfoButton from '../../components/InfoButton';

const SettingScreen = ({navigation})=>{
    
        return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>설정</Text>
            </View>
            <View style={styles.contents}>
                <CustomButton onpress={()=>{}} title='내 프로필' />
                <CustomButton onpress={()=>{}} title='비밀번호 변경' />
                <CustomButton onpress={()=>{}} title='알림 설정' />
                <Text style={styles.subtitle}>프로그램 정보</Text>
                <InfoButton title='버전' subtitle='1.6.0'/>
                <InfoButton title='최신버전' subtitle='1.6.0' color='blue'/>
                <CustomButton onpress={()=>{}} title='이용약관' />
                <CustomButton onpress={()=>{}} title='개인정보 보호정책' />
                <Text style={styles.subtitle}></Text>
                <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Auth')}}>
                    <View style={styles.logout}>
                        <Text style={{fontSize:16,color:'red'}}>로그아웃</Text>
                    </View>
                </TouchableWithoutFeedback>
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
    subtitle:{
        fontSize:16,
        color:'#aaa',
        paddingLeft:15,
        paddingVertical:10,
    },
    logout: {
        width:'100%',
        height:60,
        padding:10,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:0.75,
        borderColor:'#eee',
    }
});
export default SettingScreen;