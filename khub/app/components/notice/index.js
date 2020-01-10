import React, {Component} from 'react';
import {View,TextInput,Text,SafeAreaView ,TouchableOpacity,Image,Linking,Button,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground} from 'react-native';
import {HeaderButton,HeaderButtons,Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

import { Dimensions } from 'react-native'




let deviceWidth = Dimensions.get('window').width


const searchurl="https://khub.jbnu.ac.kr/mobile/web/app/#/group/search"

const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

class notice extends React.Component {
  back(){
    this.props.navigation.goBack()
  }
  state = {
    names: [
       {
          id: 0,
          name: 'JBNUHUB 서비스 접속 복구 안내',
          accout:'ADMIN | 2019-12-20 | 조회 7'
       },
       {
          id: 1,
          name: '[복구] JBNUHUB 모바일앱 오류 해결 ...',
          accout:'ADMIN | 2019-09-04 | 조회 32'
       },
       {
          id: 2,
          name: '전북대학교 정보전산원 교체작업에 따...',
          accout:'ADMIN | 2019-08-27 | 조회 14'
       },
       {
          id: 3,
          name: 'KHUB 서비스 접속장애 복구 안내',
          accout:'ADMIN | 2019-06-08 | 조회 24',
       },
       {
          id: 4,
          name: '서비스 안정화를 위한 서버 정기 점검 ...',
          accout:'ADMIN | 2019-03-21 | 조회 8',
       }, 
       {
        id: 5,
        name:'서버 업그레이드로 인한 서비스 중단 ...',
        accout:'ADMIN | 2018-02-23 | 조회 72',
      },
      {
        id: 6,
        name: 'KHUB 휴일접속장애',
        accout:'ADMIN | 2017-10-28 | 조회 40',
      },
      {
        id: 7,
        name: '수업효율화프로그램 관련 강의그룹 운...',
        accout:'ADMIN | 2017-10-13 | 조회 21',
      },
    ]
 }
 alertItemName = (item) => {
    alert(item.name)
 }
    render(){
        return(
          <View>
          <View style={{height:"8%",flexDirection:'row',backgroundColor:'#1f8dd6'}}>
                <TouchableOpacity onPress={_=>this.back()} style={{marginLeft:10,justifyContent:'center',flex:1}}>
                  <Icon name="md-arrow-back" size={28} color="white" />
                </TouchableOpacity>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',flex:17}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:19}}>
                        공지사항
                      </Text>
                      <Text>
                        JBNUHub
                      </Text>
                </View>
                <View>
          
         </View>
                
          </View>
          
          {
               this.state.names.map((item, index) => (
                  
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style={{}}>
                        {item.name}
                     </Text>
                     <Text style={{fontSize:12}}>
                        {item.accout}
                     </Text>
                  </TouchableOpacity>
               ))
               }
               {/*
            <FlatList
              data ={this.state.names}
            >

            </FlatList>
               */ }
          </View>
           )
}
}
export default notice

const styles = StyleSheet.create({
     container: {
      padding: 15,
      marginTop: 3,
      backgroundColor: 'white',
      
      borderBottomWidth:1,
   },
});
