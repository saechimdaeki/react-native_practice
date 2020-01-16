import React ,{useState, Fragment,Component} from 'react';

import {SafeAreaView,View,Text,StyleSheet,Dimensions ,Image,FlatList, TouchableOpacity, TouchableWithoutFeedback, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

const data = {"result":"success","groupId":21,"ownerName":"000","groupName":"모바일앱개발연구","ownerId":2,"memberLength":38,"groupPath":"/앱연구","groupPhoto":"https://khub.jbnu.ac.kr/img/group/background/default_0.jpg","isAdmin":false,"isJoin":true,"groupAuth":0}
const headata=[
    {
        "key":"1",
        "name":"강의대화"
    },
    {
        "key":"2",
        "name":"자료"
    },
    {
        "key":"3",
        "name":"멤버"
    },
    {
        "key":"4",
        "name":"출석체크"
    },
    {
        "key":"5",
        "name":"레포트"
    },
    {
        "key":"6",
        "name":"쪽지"
    },
    {
        "key":"7",
        "name":"정보수집"
    },
    {
        "key":"8",
        "name":"일정"
    },
    {
        "key":"9",
        "name":"북마크"
    },
    {
        "key":"10",
        "name":"공지사항"
    },
    {
        "key":"11",
        "name":"설문조사"
    }
]

const LectureScreen = ({navigation,id}) => {
    const [modal,setModal] = useState(false);
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
    const alertItemName = (item) => {
       // alert(item.name)
        if(item.name=="자료")
        {
            navigation.navigate('data')
        }
        else if(item.name=="멤버")
        {
            navigation.navigate('member')
        }
        else if(item.name=="출석체크")
        {
            navigation.navigate('attendance')
        }
        else if(item.name=="레포트")
        {
            setModal(true)
        }
        else if(item.name=="쪽지")
        {
            navigation.navigate('note')
        }
        else if(item.name=="일정")
        {
            navigation.navigate('schedule')
        }
        else if(item.name=="북마크")
        {
            navigation.navigate('bookmark')
        }
        else if(item.name=="공지사항")
        {
            navigation.navigate('notice')
        }
        else if(item.name=="설문조사")
        {
            navigation.navigate('survey')
        }
        else if(item.name=="정보수집")
        {
            navigation.navigate('datacollect')
        }
    };
    const [name,setName] = useState(navigation.getParam('id','123'));
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
                navigation.navigate('report');
                break;
            case 2:
                navigation.navigate('quizScreen');
                break;
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                    <Icon style={{position:'absolute',zIndex:5,top:5,fontSize:25,padding:5,color:'#fff',left:5}} name='ios-home'/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Alert.alert('검색')}>
                    <Icon style={{position:'absolute',zIndex:5,top:5,fontSize:25,padding:5,color:'#fff',right:5}}  name='ios-search'/>
                </TouchableWithoutFeedback>
                <Image style={styles.background} source={require('../img/background/default_0.jpg')}/>
                <View style={styles.lecInfo}>

                    <Text style={styles.title}>{name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>인원 0</Text>
                        <TouchableWithoutFeedback onPress={()=>Alert.alert('관리')}>
                            <Text style={{color:'blue',marginLeft:10}}>관리</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>Alert.alert('주차별 강의 관리')}>
                            <Text style={{color:'blue',position:'absolute',right:0}}>주차별 강의 관리</Text>
                        </TouchableWithoutFeedback>
                    </View>

                </View>
                <View style={styles.bar}>
                    <FlatList 
                        data={headata}
                        horizontal={true}
                        renderItem={({item,index})=>{
                            return(
                                <View style ={{flex:1,marginRight: 20,marginBottom:10,justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={()=>alertItemName(item)}>
                                <Text>{item.name} </Text>
                                </TouchableOpacity>
                                </View>
                            )
                        }}
                        />
                </View>
            </View>
            <View style={styles.content}>
                <TouchableOpacity onPress={()=>navigation.navigate('writescreen')}>
                    <Text style={styles.writeButton}>강의대화에 글쓰기</Text>
                    </TouchableOpacity>
                    <View style={styles.contentItem}>
                        <View style={styles.userInfo}>
                            <Image/>
                            <View style={{}}>

                            </View>
                        </View>
                        <View style={styles.contentInfo}>

                        </View>
                        <View style={styles.review}>
                            <Text>댓글 0</Text>
                            <Text>댓글 쓰기</Text>
                        </View>
                    </View>
            </View>
           
            {/* Modal View */}
            <Modal style={styles.modal} 
                    isVisible={modal} 
                    onBackdropPress={() => setModal(false)} 
                    deviceHeight={deviceHeight}
                    deviceWidth={deviceWidth}>
                <View style={styles.modalview}>
                    <TouchableWithoutFeedback onPress={() => {moveModal(1)}}>
                        <Text style={styles.modalitem}>레포트</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(2)}}>
                        <Text style={styles.modalitem}>퀴즈</Text>
                    </TouchableWithoutFeedback>
                
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee',
    },
    background:{
        width: '100%',
        height:'60%',
        resizeMode: 'cover',
    },
    header:{
        height:'40%',
        
    },
    content: {
        alignItems:'center',
        paddingTop:10,
    },
    footer: {

    },
    title: {
        fontSize:18,
    },
    lecInfo: {
        padding:10,
        backgroundColor:'#fff',
    },
    bar: {
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        padding:5,
        borderWidth:0.5,
        borderColor:'#eee',
        backgroundColor:'#fff',
    },
    barItem: {
        fontSize:15,
        paddingHorizontal:10,
    },
    writeButton:{
        backgroundColor:'#428ed0',
        color:'#fff',
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:15,
        fontSize:15,
    },
    contentItem:{
        padding:10,
        backgroundColor:'#fff',
        width:'100%',
        height:220,
        marginVertical:10,
    },
    userInfo: {
        flexDirection:'row',
        width:'100%',
        height:'30%',
        borderWidth:1,
    },
    contentInfo: {
        height:'50%',
        borderWidth:1,
    },
    review:{
        flex:1,
        flexDirection:'row',
        height:'20%',
        borderWidth:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    modal : {
        flex:1,
        justifyContent:'flex-end',
        width:'80%',
        marginHorizontal:'10%',
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
        width:132,
        height:160,
        margin:10,
        borderRadius:10,
        overflow:'hidden',
        borderWidth:0.75,
        borderColor:'#eee',
        borderStyle:'dotted'
    },
});

export default LectureScreen;