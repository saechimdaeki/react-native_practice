import React, { useState,Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,Image,FlatList,Alert,TouchableOpacity,TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/customButton';
import InfoButton from '../../components/InfoButton';
//import { TouchableOpacity } from 'react-native-gesture-handler';

//https://khub.jbnu.ac.kr/mobile/appdbbroker/web_notice/list.jsp?BKQW5HD=true&group_id=0&reload=1&user_id=16832&version=20200103
const list = [
    {
        "total": 0
        ,"active_ck": 1
        ,"groupPath": "/테슿트"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "김준성"
        ,"photo": "default_5.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1444
        ,"admin": 10312
        ,"name": "테슿트"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_5.jpg"
    },
    {
        "total": 0
        ,"active_ck": 0
        ,"groupPath": "/모바일앱개발연구/에러 레포트"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "강혜경"
        ,"photo": "default_0.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1443
        ,"admin": 29
        ,"name": "에러 레포트"
        ,"joinStatus": 1
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_0.jpg"
    },
    {
        "total": 0
        ,"active_ck": 0
        ,"groupPath": "/테스트"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "이동준"
        ,"photo": "default_5.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1442
        ,"admin": 14585
        ,"name": "테스트"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_5.jpg"
    },
    {
        "total": 0
        ,"active_ck": 1
        ,"groupPath": "/2019-겨울계절-공수1"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "정수미"
        ,"photo": "default_9.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1439
        ,"admin": 635
        ,"name": "2019-겨울계절-공수1"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_9.jpg"
    },
    {
        "total": 0
        ,"active_ck": 1
        ,"groupPath": "/2019-겨울계절-공수2"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "정수미"
        ,"photo": "default_5.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1438
        ,"admin": 635
        ,"name": "2019-겨울계절-공수2"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_5.jpg"
    },
    {
        "total": 0
        ,"active_ck": 1
        ,"groupPath": "/2019-2중국산문사전제연구"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "최영준"
        ,"photo": "default_7.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1437
        ,"admin": 642
        ,"name": "2019-2중국산문사전제연구"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_7.jpg"
    },
    {
        "total": 0
        ,"active_ck": 0
        ,"groupPath": "/의료포털"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "양재동"
        ,"photo": "default_0.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1436
        ,"admin": 7
        ,"name": "의료포털"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_0.jpg"
    },
    {
        "total": 0
        ,"active_ck": 1
        ,"groupPath": "/수학"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "성영재"
        ,"photo": "default_6.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1433
        ,"admin": 15726
        ,"name": "수학"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_6.jpg"
    },
    {
        "total": 0
        ,"active_ck": 1
        ,"groupPath": "/2019인문고전26반"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "김은모"
        ,"photo": "default_8.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1432
        ,"admin": 10089
        ,"name": "2019인문고전26반"
        ,"joinStatus": 0
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_8.jpg"
    },
    {
        "total": 0
        ,"active_ck": 0
        ,"groupPath": "/모바일앱개발연구"
        ,"favorite_ck": false
        ,"authority_ck": 0
        ,"admin_name": "강혜경"
        ,"photo": "default_0.jpg"
        ,"depth": 0
        ,"superId": 0
        ,"id": 1431
        ,"admin": 29
        ,"name": "모바일앱개발연구"
        ,"joinStatus": 1
        ,"owner": 0
        ,"groupAdmin": false
        ,"super_id": 0
        ,"photoUrl": "https://khub.jbnu.ac.kr/img/group/background/default_0.jpg"
    },
    

]



const GroupSearchScreen = ({navigation}) => {

    const [state,setState] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>강의 검색</Text>
            </View>
            <View style={styles.contents}>
                <TextInput style={styles.search} 
                    placeholder="강의명, 개설자로 검색" 
                    onChangeText={(text)=>setState({text})} />
                <View style={styles.list}>
                    <FlatList
                        data ={list}
                        numColumns={1}
                        renderItem = {({item})=>
                        <View style={styles.list_content}>
                            <Image source={{uri: item.photoUrl}} style={{width:70, height:70}} />
                            <View>
                                <Text numberOfLines={1} style={{fontSize:20}}>
                                    {item.name}
                                </Text>
                                <Text style={{fontSize:12}}>
                                    {item.admin_name} | {item.groupPath}
                                </Text>
                            </View>
                            <View style={{aligenSelf:'flex-end'}}>
                                <TouchableOpacity
                                    onPress={()=>{}}
                                    underlayColor="white"
                                >
                                    <View style={styles.touch}>
                                        <Text style={{fontSize:20, color:'powderblue'}}>가입</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        }
                        keyExtractor = {(item,index)=>item.index}
                    />
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch',
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
    search:{
        height:40, 
        borderWidth:1, 
        borderColor:'gray', 
        paddingHorizontal:10, 
        marginHorizontal:10,
    },
    list:{
        flex:1,
        marginTop:10,
        
    },
    list_content:{
        flexDirection: 'row',
        flex:1,
        padding:10,  
        borderWidth:1,
        borderColor: 'gray'
        
    },
    touch:{
        width:70,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderRadius:15,
        borderColor:'powderblue',
        backgroundColor:'white',
      },
});
export default GroupSearchScreen;