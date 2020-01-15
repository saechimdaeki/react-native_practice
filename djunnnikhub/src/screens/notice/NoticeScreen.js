import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet,FlatList,Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/customButton';
import InfoButton from '../../components/InfoButton';

//https://khub.jbnu.ac.kr/mobile/appdbbroker/web_notice/list.jsp?BKQW5HD=true&group_id=0&reload=1&user_id=16832&version=20200103
const notice_list = [
    {"user_name": "ADMIN"
    ,"body": "안녕하세요.케이허브 관리자입니다.금일 12월20일(금)전산원 IDC 네트워크 문제로 인해 오전 5시~ 오전 9시까지 서비스 접속이 정상 운영되지 못했습니다.오전 9시 이후에 정상적으로 서비스 접속이 이루어지도록 복구되었습니다.이용에 불편을 드려 죄송합니다.감사합니다."
    ,"title": "JBNUHUB 서비스 접속 복구 안내"
    ,"count": 8
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 11278
    ,"date": "2019-12-20"},
    {"user_name": "ADMIN"
    ,"body": "안녕하세요JBNUHUB 관리자입니다.오늘 JBNUHUB 모바일앱을 이용해주시는 분들에게모바일앱 오류로 인한 불편을 드린 점 사과의 말씀 드립니다.(Mismatch of CPU Architecture) 오류는 안드로이폰에 한하여 발생된 것으로,구글 플레이(Google Play) 운영정책 변경에 따른 문제로 확인되었습니다.2019년 9월 4일 (수) 오전 9:00 에 복구가 완료되어 정상적으로 작동되오니,안드로이드폰으로 JBNUHUB 모바일앱을 이용하는 분들께서는앱 업데이트를 진행해주시기를부탁드립니다.그리고 신규 이용자분들께서는 JBNUHUB 모바일앱을 설치하신 후, 이용 부탁드립니다.안드로이드폰 JBNUHUB 모바일앱 설치 후, 실행시 (Mismatch of CPU Architecture) 가보이시는 분들은 아래 업데이트 방법을 참고하여 시행해주시기 바랍니다.1) Play스토어 또는 구글 플레이(Google Play) 앱 실행2) 왼쪽 상단의 \"가로줄 3개\" 인 아이콘 클릭 > 내 앱/게임 메뉴 클릭3) JBNUHUB 앱을 찾기 > 오른쪽의 \"업데이트\" 버튼이 보이면 \"업데이트\" 버튼 클릭앱 업데이트를 해도 (Mismatch of CPU Architecture) 가 계속 나타나는 경우에는(Mismatch of CPU Architecture) 경고창 하단의 get CrossWalk 버튼을 눌러[Crosswalk Project 64bit] 앱를 설치하신 후, JBNUHUB 모바일앱을 재실행해주시기 바랍니다.앞으로 더욱 노력하는 JBNUHUB 시스템이 되도록 하겠습니다.다시 한번 불편을 드려 죄송합니다.감사합니다.JBNUHUB 관리자 드림.* 모바일웹 오류 해결 안내모바일웹상의 회원정보수정 및 강의가입이 안되는 오류가 발견되어2019.09.04 (수) 새벽 2시경에 수정되었사오니, 이 점 참고 부탁드립니다."
    ,"title": "[복구] JBNUHUB 모바일앱 오류 해결 안내 (Mismatch of CPU Architecture)"
    ,"count": 35
    ,"group_id": 0
    ,"user_id": 1
    ,"post_id": 10937
    ,"date": "2019-09-04"
    },
    {"user_name": "ADMIN"
    ,"body": "안녕하세요 JBNUHUB 관리자입니다.전북대학교 정보전산원에서 노후 UPS 장비 교체 작업을 실시함에 따라교내 서비스(오아시스, 도서관, 포털 등 구성원 인증서비스 전체) 뿐 아니라KHUB 서비스도 일시적으로 이틀동안 중단되오니, 회원님들의 양해 부탁드립니다.◎서비스 중단 일시 :2019년 8월 31일 (토) ~ 9월 1일 (일)감사합니다."
    ,"title": "전북대학교 정보전산원 교체작업에 따른 일시적 서비스 중단 안내"
    ,"count": 14
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10927
    ,"date": "2019-08-27"
    },
    {"user_name": "ADMIN"
    ,"body": "안녕하세요.케이허브 관리자입니다. 금일6월 8일(토)전산원 IDC 전원 재부팅 도중 케이허브 데이터베이스 시스템이 재부팅 과정에서데이터베이스가 기동되지 않는 문제가 발생하였습니다.백업된 데이터베이스(금일 오전3시 기준)를 복원하여 케이허브 서비스를다시 정상 운영되도록 하였습니다.오전 3시 이후에 레포트 및 기타 콘텐츠를 등록하신 사용자 분들은 재등록해주시면 감사하겠습니다.이용에 불편을 드려 죄송합니다. 감사합니다."
    ,"title": "KHUB 서비스 접속장애 복구 안내"
    ,"count": 24
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10884
    ,"date": "2019-06-08"
    },
    {"user_name": "ADMIN"
    ,"body": "안녕하세요 K-HUB 관리자 입니다. 서비스안정화를 위해매주 금요일 오전에 서버 점검을 진행합니다.이로 인해 일정 시간 동안 K-HUB 서비스가잠시 중단되오니,서비스 이용에참고해주시기 바랍니다. ◎ 서비스 중단 일시    - 매주 금요일오전 02:00 ~02:30 (30분)"
    ,"title": "서비스 안정화를 위한 서버 정기 점검 안내"
    ,"count": 8
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10787
    ,"date": "2019-03-21"
    },
    {"user_name": "ADMIN"
    ,"body": "안녕하세요 K-HUB 관리자 입니다.﻿서비스안정화를 위해서버 업그레이드를 진행하고자 합니다.이로 인해 일정시간동안 K-HUB 서비스가잠시 중단되오니,서비스 이용에참고해주시기 바랍니다. ◎ 서비스 중단 일시    - 2018년 2월 26일(월) 17:00 ~18:00 (1시간)"
    ,"title": "서버 업그레이드로 인한 서비스 중단 안내"
    ,"count": 72
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10287
    ,"date": "2018-02-23"
    },
    {"user_name": "ADMIN"
    ,"body": "KHUB 가 10월 28 (토) 대학 외부에서 접속이 안되고 있습니다만 휴일인 관계로 전산원과 연락이 어려워정확한 장애원인 파악이 어려운 상황입니다. 월요일 오전에 담당자와 연락되는대로 신속히 고치도록 하겠습니다. 이용에 불편을 드려 죄송합니다.크롬브라우저로는 접속이 되오니, 참고하시기 바랍니다."
    ,"title": "KHUB 휴일접속장애 "
    ,"count": 40
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10208
    ,"date": "2017-10-28"
    },
    {user_name: "ADMIN"
    ,"body": "전북대 수업효율화프로그램을 통해신청해주신 강의과목의 경우,수강신청변경기간 종료에 따라 보안을 위해강의가입방식을인증가입으로 변경 처리가 된 상태입니다.이에 따라 학생들이 [강의가입]창에서 [가입]버튼을 누를 경우,\"인증을 통해 가입이 가능한 강의입니다. 강의인증 및 가입을 요청하였습니다.\" 란 알림창이 보여지면서가입 승인을 기다리는 상태가 됩니다.교수님께서는 로그인하신 후, 아래의 방법을 통해 \"가입을 요청한 학생\" 들의가입을 승인 또는 거절하실 수 있습니다.1. 상단의[강의관리] > [멤버관리] 메뉴 클릭2. 왼쪽의 \"그룹리스트\"에서 해당 그룹 클릭3. 오른쪽의 \"가입요청자\" Tab 클릭4. 학생의 리스트를 확인하신 후, 체크박스를 클릭하여 [가입승인] 또는 [가입거절] 버튼을 클릭만약 \"인증가입\" 방식이 불편하신 교수님께서는 아래 방법을 통해 변경하실 수도 있사오니참고 부탁드립니다.★강의가입방식 변경방법 안내  (강의과목(그룹)을 만든 사람 및해당 강의(그룹)관리자만 변경 가능)1. 로그인2. 강의관리 > 강의 만들기&관리 클릭!3. 왼쪽 그룹리스트 중 원하는 그룹 선택!4. [강의가입시 인증여부] 옆의 YES, NO 선택5. 수정버튼 클릭!"
    ,"title": "수업효율화프로그램 관련 강의그룹 운영 안내"
    ,"count": 21
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10187
    ,"date": "2017-10-13"
    },
    {user_name: "ADMIN"
    ,"body": "중요한 공지사항 및 강의대화, 댓글 등에 대하여이메일 및 푸쉬알림 서비스를 받기 위해서는 [회원정보]에 최소한 이메일정보가 있어야만합니다.현재 이메일이 입력되지 않은 회원이신 경우, 로그인하면 회원정보 수정창으로 이동되는 점참고 부탁드립니다.회원정보 변경방법은 아래와 같습니다.1. 로그인2. [마이페이지 -회원정보 수정] 창에서이메일, 휴대폰번호, 소속정보 등을입력3. 하단의 수정버튼 클릭"
    ,"title": "알림서비스를 위한 이메일 입력 안내"
    ,"count": 10
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10186
    ,"date": "2017-10-13"
    },
    {user_name: "ADMIN"
    ,"body": " 개인정보 보호법에 따른 시스템 보안점검을위해 개인정보 동의절차를 진행하고 있음을안내드립니다.- KHUB 첫 화면 로그인창1. 오아시스에서 쓰는 학번, 비밀번호 입력 2. 로그인 버튼 클릭! 3.  개인정보 수집 및 이용약관창: 모두 동의 체크! ->동의 버튼클릭!  (비회원인 경우, 자동 회원가입완료) 4. 회원정보 수정창으로 이동 5. 이메일, 전화번호, 사진, 소속입력 6. 수정버튼 클릭! 이메일 및 푸쉬알림 서비스 이용을 위해[마이페이지 > 회원정보 수정] 창에서이메일, 휴대폰번호를 꼭! 입력해주세요.※ 로그인시, 전북대학교 오아시스 연동은해당 개인정보를 가져오는 방식이 아니라 단순히 전북대학교 소속인지 판별하는 용도로만진행되고 있음을 안내드립니다. "
    ,"title": "회원가입 및 로그인 절차 상세 안내"
    ,"count": 50
    ,"group_id": 0
    ,"user_id": 1
    ,post_id: 10142
    ,"date": "2017-09-06"
    },

]

const NoticeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>공지사항</Text>
            </View>
            <View style={styles.contents}>
            <FlatList
                            data ={notice_list}
                            numColumns={1}
                            renderItem = {({item})=>
                            <View style={styles.list}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('NoticeDetail',{
                                        title: item.title,
                                        body: item.body,
                                        user_name: item.user_name,
                                        date: item.date,
                                        count: item.count,
                                    })
                                    }>
                                            <Text numberOfLines={1} style={{fontSize:20}}>
                                                {item.title}
                                            </Text>
                                            <Text style={{fontSize:12}}>
                                                {item.user_name} | {item.date} | {item.count}
                                            </Text>
                                        
                            </TouchableOpacity>
                            </View>
                            }
                            keyExtractor = {(item,index)=> {return item.post_id.toString()}}
                    />
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
    },
    list:{
        backgroundColor:'#fff',
        padding:10, 
        borderStyle: 'solid', 
        borderWidth:0.3 ,
        borderColor: '#aaa'
    },
});
export default NoticeScreen;