import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const BookMark = () => {
    return (
        <View style={styles.container}>
            <Text>BookMark</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
export default BookMark;