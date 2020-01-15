import React, {useState,useEffect, Fragment} from 'react';
import {View,SafeAreaView, StyleSheet, Text, Alert,TouchableWithoutFeedback,TouchableOpacity,Dimensions, FlatList,ImageBackground,BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

import CustomStatusBar from '../../components/customStatusBar';
import UserIcon from '../../components/UserIcon';
// 과목 수정할 것!
// 기존 과목들은 favorite:0 ,즐겨찾기 추가시 favorite:1
const datas = [
    {"id":14142,"group_name":"테스트","total":2,"admin_ck":1,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_5.jpg","name":"테스트","group_id":14142,"favorite_ck":false,"date":"20200107","admin":"admin","goal":"모바일앱개발연구","favorite":"0"},
    {"id":13322,"group_name":"2019-2 정보검색(1분반)","total":29,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_1.jpg","name":"2019-2 정보검색(1분반)","group_id":17322,"favorite_ck":false,"date":"20190905","admin":"이경순","goal":"정보검색","favorite":"0"},
    {"id":5571,"group_name":"평생지도교수","total":50,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_8.jpg","name":"평생지도교수(양재동)","group_id":5791,"favorite_ck":false,"date":"20180316","admin":"양재동","goal":"Khub연구","favorite":"0"},
]
const datas2 = {
    login_id: "123412312",
    user_name: "홍길동",
    user_photo_url: 'https://khub.jbnu.ac.kr/photo/14585/2018031391917271.jpg',
    user_photo: "2018031391917271.jpg",
    user_id: 0
}
const PrefFavoriteScreen = ({navigation}) => {
    const appName ='JBNUHub';
    const [modal,setModal] = useState(false);
    const [canMakeGroup,setCanMakeGroup] = useState(false);
    /**
     * modal screen 변수
     * const {deviceWidth} = 디바이스의 너비 얻기
     * const {deviceHeight} = 디바이스의 높이 얻기
     */
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
      ? Dimensions.get("window").height
      : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");
    /**
     * back button handler
     * for => app exit
     */

    /**
     * modal 화면 이동
     * @param {int} val = type value
     */
    const moveModal = (val) => {
        if(val==null || val==''){
            return false;
        }
        setModal(false);
        switch(val){
            case 1: 
                navigation.navigate('Setting');
                break;
            case 2:
                navigation.navigate('Notice');
                break;
            case 3:
                navigation.navigate('PrefHiddenGroup');
                break;
            case 4:
                navigation.navigate('PrefFavorite');
                break;
        }
    }
    /**
     * return
     */
    return (


        <SafeAreaView style={styles.container}>
                <CustomStatusBar backgroundColor="#428ed0" />
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{appName}</Text>
                <View style={styles.titleItem}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('MyPage')}}>
                        <UserIcon customStyle={{width:35,height:35,borderRadius:35/2,marginRight:5}} Image={datas2.user_photo_url}/>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Note')}}>
                        <Icon style={styles.titleIcon} name='ios-mail'/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('GroupMake')}}>
                        <Icon style={styles.titleIcon} name='md-add' />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('GroupSearch')}}>
                        <Icon style={styles.titleIcon} name='ios-search' />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{setModal(true)}}>
                        <Icon style={styles.titleIcon} name='md-more'/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            
            {/* Contents View */}

            <View style={styles.favorite}>
                <Text>
                    즐겨찾기 관리
                </Text>
            </View>

            <View style={styles.contents}>

                    <FlatList
                            data ={datas}
                            numColumns={1}
                            renderItem = {({item})=>
                            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Lecture',{id:item.name})}>
                                <View style={styles.item}>
                                    <View style={styles.itemBackground}>
                                        <ImageBackground style={styles.itemImage} source={{uri:item.group_photo}}/>
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text numberOfLines={3} style={{fontSize:14}}>
                                            {item.name}{"\n"}
                                            <Icon style={styles.itemIcon} name='md-person'/>{"  "}{item.admin}{"\n"}
                                            <Icon style={styles.itemIcon} name='md-airplane'/>{"  "}{item.goal}</Text>
                                    </View>
                                    
                                    <TouchableOpacity style={styles.button} onPress={()=>{
                                        Alert.alert('`' + item.name + '` 과목이 즐겨찾기에 추가되었습니다.')                                        
                                        }}>
                                        <Text style={styles.buttontext}>추가</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                            }
                            keyExtractor = {(item,index)=>item.id}

                    />
            </View>


             {/* Modal View */}
             <Modal style={styles.modal} 
                    isVisible={modal} 
                    onBackdropPress={() => setModal(false)} 
                    deviceHeight={deviceHeight}
                    deviceWidth={deviceWidth}>
                <View style={styles.modalview}>
                    <TouchableWithoutFeedback onPress={() => {moveModal(1)}}>
                        <Text style={styles.modalitem}>설정</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(2)}}>
                        <Text style={styles.modalitem}>공지사항</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(3)}}>
                        <Text style={styles.modalitem}>숨긴 강의 관리</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(4)}}>
                        <Text style={styles.modalitem}>즐겨찾기 관리</Text>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        flex:1.5,
        fontSize:22,
        color:'#fff',
        fontWeight:'bold',
    },
    titleItem:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
    },
    titleIcon:{
        height:35,
        paddingHorizontal:15,
        paddingVertical:5,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        fontSize:26,
    },
    itemIcon:{
        color:'black'
    },
    header:{
        flex:1,
        paddingLeft:15,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        alignItems:'center',
        padding:5,
    },
    modal : {
        flex:1,
        width:'70%',
        marginHorizontal:'15%',
    },
    modalview : {
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:5,
    },
    modalitem : {
        width:'100%',
        fontSize:18,
        textAlign:'center',
        paddingVertical:10,
    },
    item: {
        flexDirection:"row",
        width:380,
        height:110,
        borderRadius:10,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.75,
        borderColor:'#eee',
        borderStyle:'dotted',
        padding: 15
    },
    itemBackground:{
        flex:25,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        height:90,
        borderBottomStartRadius:10,
        borderTopStartRadius:10
    },
    itemImage: {
        height:'80%',
        width:'80%',
        resizeMode:'contain'
    },
    itemInfo:{
        flex:70,
        backgroundColor:'#fff',
        justifyContent:'center',
        width:133,
        height:90,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    button:{
        backgroundColor:"#428ed0",
        height:20,
        width:30
    },
    buttontext:{
        color:"#fff"
    },
    favorite:{
        width:380,
        padding:10,
        justifyContent:'center'
    }
});

export default PrefFavoriteScreen;
