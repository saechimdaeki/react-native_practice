import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default function MainScreen() {
    return (
        <SafeAreaView style= {styles.container}>
                <Text>main scrrrrrrrreenn</Text>

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