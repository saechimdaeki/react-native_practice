import React, { useState, Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,FlatList,Alert, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/customButton';
import InfoButton from '../../components/InfoButton';
//import { TouchableOpacity } from 'react-native-gesture-handler';


const NoticeDetailScreen = ({navigation, id}) => {
        const [title,setTitle] = useState(navigation.getParam('title','null'));
        const [body,setBody] = useState(navigation.getParam('body','null'));
        const [user_name,setUserName] = useState(navigation.getParam('user_name','null'));
        const [date,setDate] = useState(navigation.getParam('date','null'));
        const [count,setCount] = useState(navigation.getParam('count','null'));
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>공지사항 내용</Text>
            </View>
            <View style={styles.contents}>
                <ScrollView>
                    <View style={styles.subTitle}>
                        <Text style={{fontSize:22}}>{title}</Text>
                    </View>
                    <View style={styles.adminAndDate}>
                        <Text style={{fontSize:14}}>{user_name}  |  {date}  |  조회수 : {count}</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <Text style={{fontSize:16, color:'white'}}>{body}</Text>
                    </View>
                </ScrollView>
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
        margin:0,
        height:250,
        width:'100%',
        backgroundColor:'#eee',
        paddingTop:15,
    },
    subTitle:{
        padding:10,
        justifyContent:'center',
    },
    adminAndDate:{
        padding:10,
    },
    mainContent:{
        padding:10,
        margin:10,
        backgroundColor:'gray',
    },
});
export default NoticeDetailScreen;