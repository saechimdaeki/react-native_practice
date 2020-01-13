import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/customButton';
import InfoButton from '../../components/InfoButton';

const NoteScreen = ({navigation})=>{
    
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>쪽지</Text>
                <Icon onPress={()=>{Alert.alert('쪽지 만들기')}} name='md-add' style={{color:'#fff',fontSize:26, position:'absolute',right:15,}} /> 
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
export default NoteScreen;