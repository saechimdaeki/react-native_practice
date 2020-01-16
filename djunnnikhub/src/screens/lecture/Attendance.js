import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Attendance= () => {
    return (
        <View style={styles.container}>
            <Text>AttendanceScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
export default Attendance;