import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default function DetailScreen() {
    return (
        <SafeAreaView style= {styles.container}>
                <Text style={styles.textst}>DetailScrrrrrrreen</Text>

        </SafeAreaView>

    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
    },
    textst:{
        fontSize:20,
        fontWeight:"bold",
    },
})