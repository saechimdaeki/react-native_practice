import React, {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AnimatedSwitch from '../../components/AnimatedSwitch';

const NoteScreen = ({navigation})=>{

    return (

        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
            <Text style={styles.title}>쪽지</Text>
            <Text onPress={()=>{Alert.alert('쪽지 보내기 완료')}} style={{color:'#fff',fontSize:22, position:'absolute',right:15,}}>완료</Text> 
        </View>
        <View style={styles.contents}>
        <View style={styles.SpaceContainer}>
            <View style={styles.containernull}>
                <AnimatedSwitch/>
            </View>
            <View style={styles.SpaceContainer}>
                <Text>
                    보관함에 쪽지가 없습니다.
                </Text>
            </View>
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
    containernull:{
        paddingTop: 10,
        paddingRight: 180,
    },
    SpaceContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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