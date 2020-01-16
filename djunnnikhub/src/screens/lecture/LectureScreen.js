import React ,{useState, Fragment,Component} from 'react';

import {SafeAreaView,View,Text,StyleSheet, Image,FlatList, TouchableOpacity, TouchableWithoutFeedback, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserIcon from '../../components/UserIcon';

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
const messagedata =[
    {"group_name":"모바일앱개발연구","user_name":"이동준","reply_count":0,"group_id":1431,"user_id":14585,"comment":"<pre style=\"white-space: pre-wrap;\">khub App과 mobile browser에서 문제점에 대해 알아보고 작성하였습니다.<br><br>확인 부탁드립니다<br /><a href='../common/redirectLink.jsp?p_id=20510&check=4&group_id=1431' target='_blank'><b>Khub_출석_버그_리포팅<\/b><\/a><br><\/pre>","date":"2020-01-08 02:59","post_id":17351,"photo":"https://khub.jbnu.ac.kr/photo/14585/2018031391917271.jpg","post_isopened":true},
    {"group_name":"모바일앱개발연구","user_name":"이동준","reply_count":0,"group_id":1431,"user_id":14585,"comment":"<pre style=\"white-space: pre-wrap;\">리액트 네이티브 ios<br /><a href='../common/redirectLink.jsp?p_id=11994&check=1&group_id=1431' target='_blank'><b>앱개발홀로서기_ReactNative_0_SetUp<\/b><\/a><br><\/pre>","date":"2020-01-06 10:36","post_id":17346,"photo":"https://khub.jbnu.ac.kr/photo/14585/2018031391917271.jpg","post_isopened":true},
    {"group_name":"모바일앱개발연구","user_name":"최세진","reply_count":0,"group_id":1431,"user_id":16832,"comment":"<pre style=\"white-space: pre-wrap;\">2주차 공부한 것 : 개인적으로 JavaScript에 익숙하지 않아 먼저 React를 멋쟁이 사자처럼에서 React를 학습 및 간단한 프로젝트를 진행함으로서 React와 JavaScript에 익숙해지는 시간을 가졌고, React Native를 익히기 위해 유튜브에 있는 React Native 강좌를 따라하며 Component Basic을 실습하며 공부하고 있습니다.<br>React Project - 대나무숲 만들기 : https://github.com/TakeaimK/LikeLion-2sem-final<br>React-Native 학습 : https://github.com/TakeaimK/React-Native_Studty_kaist<br><\/pre>","date":"2020-01-03 05:21","post_id":17343,"photo":"https://khub.jbnu.ac.kr/images/sns/no_photo_small.gif","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"이동준","reply_count":0,"group_id":1431,"user_id":14585,"comment":"<pre style=\"white-space: pre-wrap;\">2주차 <br><br>1. 북마크에 있는 flutter와 react에 대한 비교 강의를 보았습니다.<br>2. Khub 클론 코딩을 통해서 로그인화면, React-native-modal을 이용한 팝업 창, 그리고 Component로 만든 모듈 등을 이용하여 화면을 구성하는 공부를 하였습니다.<br><br>3. 추가적으로 jwt에 대해서 찾아볼 예정입니다.<br><br>하면서 필요한 내용은 여기서 정리 했습니다. https://github.com/Djunnni/react-native-summary<br><\/pre>","date":"2020-01-03 05:19","post_id":17342,"photo":"https://khub.jbnu.ac.kr/photo/14585/2018031391917271.jpg","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"김준성","reply_count":0,"group_id":1431,"user_id":10312,"comment":"<pre style=\"white-space: pre-wrap;\">2주차 공부내용입니다 - https://class.likelion.org/lectures/React-Native/252를 보고 react의 ArrowFunction을 공부하고 TodoApp과 WeatherApp을 expo.io 로 인터넷강의를 통해 따라해보았습니다. 오늘은 Diaryapp을 순수 react-native로 진행해 보았습니다. <br>  <br>공부한 내용 링크입니다:  https://github.com/saechimdaeki/react-native_practice<br><\/pre>","date":"2020-01-03 05:17","post_id":17341,"photo":"https://khub.jbnu.ac.kr/photo/10312/2017101623412340.jpg","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"임유택","reply_count":0,"group_id":1431,"user_id":20193,"comment":"<pre style=\"white-space: pre-wrap;\">제가 참고한 자료 공유합니다.<br>https://www.youtube.com/watch?v=TkuQAjnaSbM<br><\/pre>","date":"2020-01-03 11:13","post_id":17337,"photo":"https://khub.jbnu.ac.kr/images/sns/no_photo_small.gif","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"김준성","reply_count":0,"group_id":1431,"user_id":10312,"comment":"<pre style=\"white-space: pre-wrap;\"><br /><a href='../common/redirectLink.jsp?p_id=11982&check=1&group_id=1431' target='_blank'><b>React Native vs Flutter<\/b><\/a><br><\/pre>","date":"2020-01-03 11:02","post_id":17336,"photo":"https://khub.jbnu.ac.kr/photo/10312/2017101623412340.jpg","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"이동준","reply_count":0,"group_id":1431,"user_id":14585,"comment":"<pre style=\"white-space: pre-wrap;\">키보드 팝업 반응에 대해 설명해 놓았는데 좋은 거 같아 공유합니다 :)<br><br>https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/<br><\/pre>","date":"2019-12-29 10:12","post_id":17327,"photo":"https://khub.jbnu.ac.kr/photo/14585/2018031391917271.jpg","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"김용정","reply_count":4,"group_id":1431,"user_id":2,"comment":"<pre style=\"white-space: pre-wrap;\">이메일 주소를 입력해주세요<br><\/pre>","date":"2019-12-23 11:27","post_id":17303,"photo":"https://khub.jbnu.ac.kr/images/sns/no_photo_small.gif","post_isopened":true},{"group_name":"모바일앱개발연구","user_name":"김용정","reply_count":0,"group_id":1431,"user_id":2,"comment":"<pre style=\"white-space: pre-wrap;\">앱개발 시작후 공부해야할 튜토리얼들 <br><br>React-native 기본 튜토리얼 <br>https://facebook.github.io/react-native/docs/getting-started<br><br>expo 튜토리얼 <br>https://docs.expo.io/versions/v35.0.0/get-started/installation/<br><br>react-hooks 튜토리얼<br>https://ko.reactjs.org/docs/hooks-intro.html<br><br>styled-components 튜토리얼 <br>https://www.styled-components.com/docs/basics#motivation<br><\/pre>","date":"2019-11-04 02:24","post_id":16409,"photo":"https://khub.jbnu.ac.kr/images/sns/no_photo_small.gif","post_isopened":true}];

const LectureScreen = ({navigation,id}) => {
    const alertItemName = (item) => {
        if(item.name=="자료")
        {
            navigation.navigate('Data')
        }
        else if(item.name=="멤버")
        {
            navigation.navigate('Member')
        }
        else if(item.name=="출석체크")
        {
            navigation.navigate('Attendance')
        }
        else if(item.name=="레포트")
        {
            navigation.navigate('Report')
        }
        else if(item.name=="쪽지")
        {
            navigation.navigate('Note')
        }
        else if(item.name=="일정")
        {
            navigation.navigate('Schedule')
        }
        else if(item.name=="북마크")
        {
            navigation.navigate('Bookmark')
        }
        else if(item.name=="공지사항")
        {
            navigation.navigate('Notice')
        }
        else if(item.name=="설문조사")
        {
            navigation.navigate('Survey')
        }
        else if(item.name=="정보수집")
        {
            navigation.navigate('DataCollect')
        }
    };
    const [name,setName] = useState(navigation.getParam('id','123'));
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <FlatList
                    data={messagedata}
                    // 데이터 갱신할 때, 
                    // refreshing={true}
                    // onRefresh={()=>{}}
                    ListHeaderComponent={
                        <View style={styles.header}>
                        <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                            <Icon style={{position:'absolute',zIndex:5,top:5,fontSize:25,padding:5,color:'#fff',left:5}} name='ios-home'/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>Alert.alert('검색')}>
                            <Icon style={{position:'absolute',zIndex:5,top:5,fontSize:25,padding:5,color:'#fff',right:5}}  name='ios-search'/>
                        </TouchableWithoutFeedback>
                        <Image style={styles.background} source={require('../../img/background/default_0.jpg')}/>
                        <View style={styles.lecInfo}>
                                <TouchableWithoutFeedback onPress={()=>Alert.alert('modal')}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={styles.title}>{name}</Text>
                                        <Icon name='md-arrow-dropdown' style={{paddingHorizontal:5,fontSize:18}}/>
                                    </View>
                                </TouchableWithoutFeedback>
                            <View style={{flexDirection:'row'}}>
                                <Text>인원 0</Text>
                                <TouchableWithoutFeedback onPress={()=>Alert.alert('관리')}>
                                    <View style={{marginLeft:10,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                                    <Icon name='ios-settings' style={{color:'#428dd0'}}/>
                                    <Text style={{color:'#428dd0',paddingHorizontal:3}}>관리</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={()=>Alert.alert('주차별 강의 관리')}>
                                    <View style={{position:'absolute',right:0, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                                        <Icon name="ios-paper" style={{color:'#428dd0'}}/>
                                        <Text style={{color:'#428dd0',paddingHorizontal:3}}>주차별 강의 관리</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
        
                        </View>
                        <View style={styles.bar}>
                            <FlatList 
                                data={headata}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item,index})=>{
                                    return(
                                        <View style ={{flex:1,paddingHorizontal:10,justifyContent: 'center', alignItems: 'center'}}>
                                            <TouchableOpacity onPress={()=>alertItemName(item)}>
                                                <Text style={{fontSize:15}}>{item.name} </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }} />
                        </View>
                        <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('WriteScreen')}>
                                <View style={styles.writeButton}>
                                    <Icon style={{color:'#fff',marginRight:3,fontSize:15}} name='md-create'/>
                                    <Text style={{color:'#fff',fontSize:15}} >강의대화에 글쓰기</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    }
                    initialNumToRender={10}
                    keyExtractor={(item)=> item.post_id.toString()}
                    renderItem={({item})=> 
                    <View style={styles.contentItem}>
                        <View style={styles.userInfo}>
                            <View style={{width:70,height:70,justifyContent:'center', alignItems:'center'}}>
                                <UserIcon customStyle={{width:50,height:50,borderRadius:50/2}} Image={item.photo} />
                            </View>
                            <View style={{justifyContent:'center',alignItems:'flex-start', marginLeft:5,flex:1}}>
                                <Text style={{fontWeight:"bold"}}>{item.user_name}</Text>
                                <Text style={{color:'#aaa'}}>{item.date}</Text>
                                <TouchableWithoutFeedback onPress={()=>Alert.alert('더보기')}>
                                <Icon style={{position:'absolute',right:5,fontSize:20,padding:15}}name='md-more'/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={styles.contentInfo}>
                            <Text>{item.comment}</Text>
                        </View>
                        <View style={styles.review}>
                            <TouchableWithoutFeedback onPress={()=>Alert.alert('댓글')}>
                                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                                    <Icon style={{fontSize:13, marginRight:4}} name='md-text'/>
                                    <Text>댓글 {item.reply_count}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={()=>Alert.alert('댓글쓰기')}>
                            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                                    <Icon style={{fontSize:13, marginRight:4}} name='md-create'/>
                                    <Text>댓글 쓰기</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>}/>
                    
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#eee',
    },
    background:{
        width: '100%',
        height:200,
        resizeMode: 'cover',
    },
    header:{
        height:350,
        
    },
    content: {
        width:'100%',
    },
    title: {
        fontSize:18,
        fontWeight:'bold',
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
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:15,
        fontSize:15,
    },
    contentItem:{
        paddingVertical:5,
        backgroundColor:'#fff',
        width:'100%',
        height:250,
        marginVertical:10,
    },
    userInfo: {
        flexDirection:'row',
        width:'100%',
        height:70,
    },
    contentInfo: {
        width:'100%',
        padding:10,
        height:120,
        overflow:'hidden',
    },
    review:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        height:60,
        justifyContent:'space-around',
        alignItems:'center'
    }
});


export default LectureScreen;