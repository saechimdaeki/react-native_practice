import React, { Fragment } from 'react';
import {Platform,SafeAreaView,View,Text,StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const ScheduleScreen = ({navigation})=>{
    
        return (
        
            <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
              <View style={{flexDirection:'column',marginLeft:120}}>
              <Text style={styles.title}>그룹일정</Text>
              <Text style={{color:'white',fontWeight:'normal'}}>모바일앱개발연구</Text>
               {/*여기 값받아오는거 어떻게하는지 모르겟음...*/}
                
              </View>
              <View style={{marginLeft:100}}>
                <TouchableOpacity>
              <Icon name="md-add" size={26} style={{color:'white'}}/>
              </TouchableOpacity> 
              </View>  
          </View>
          
          <View style={{flex:14}}>
          <View style={{  flex: 5 }}>
            
        <Calendar
          current={'2020-01'}
          minDate={'2000-01'}
          maxDate={'2200-12'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          monthFormat={'yyyy MM'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          hideExtraDays={false}
          disableMonthChange={false}
          firstDay={7} //일요일부터
        />
      </View>
          <View style={{flex:4,marginTop:15,borderTopWidth:1}}>
              <Text>
                  등록된 일정이 없습니다.
              </Text>
          </View>
    
          </View>
         
      </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
    
        
    },
    header:{
        flex:1.5,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        paddingTop:15,
    },
    subtitle:{
        fontSize:16,
        color:'#aaa',
        paddingLeft:15,
        paddingVertical:10,
    },
  
});
export default ScheduleScreen;