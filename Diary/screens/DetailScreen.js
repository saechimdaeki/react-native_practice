import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default function DetailScreen() {
    return (
        <SafeAreaView style= {styles.container}>
                <Text>DetailScrrrrrrreen</Text>

        </SafeAreaView>

    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
})