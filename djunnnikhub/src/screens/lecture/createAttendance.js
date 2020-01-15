import React, { Fragment } from 'react';
import {CheckBox,Image,SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback,ToastAndroid, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
class  createAttandance extends React.Component{
    constructor() {
        super();
    
        this.state = { currentTime: null, currentDay: null, promiseTime:null  }
        this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      }
      getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = '오후';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = '오전';
        }
    
        this.setState({ currentTime: am_pm+' '+ hour + ':' + minutes + ':' + seconds + ' ' });
    
        this.daysArray.map((item, key) => {
          if (key == new Date().getDay()) {
            this.setState({ currentDay: item.toUpperCase() });
          }
        })
      }
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      componentDidMount() {
        this.timer = setInterval(() => {
          this.getCurrentTime();
        }, 1000);
      }
    
      fiveTime= () => {
        alert('5분뒤 마감')
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes()+5;
        let seconds = new Date().getSeconds();
        let am_pm = '오후';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = '오전';
        }
        this.setState({promiseTime:am_pm+' '+ hour + ':' + minutes + ':' + seconds + ' '})
      }

      fifteenTime= () =>{
        alert('15분뒤 마감')
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes()+15;
        let seconds = new Date().getSeconds();
        let am_pm = '오후';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = '오전';
        }
        this.setState({promiseTime:am_pm+' '+ hour + ':' + minutes + ':' + seconds + ' '})
      }
      tenTime= () =>{
          alert('10분뒤 마감')
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes()+10;
        let seconds = new Date().getSeconds();
        let am_pm = '오후';
    
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
    
        if (hour > 12) {
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12) {
          am_pm = '오전';
        }
        this.setState({promiseTime:am_pm+' '+ hour + ':' + minutes + ':' + seconds + ' '})
      }

    render(){
        
    return (
    
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Icon onPress={()=>{this.props.navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.title}>출석부 생성</Text>
            <Text style={{color:'white',fontWeight:'normal',justifyContent:'center',fontSize:12,marginLeft:20}}>모바일앱개발연구</Text>
             {/*여기 값받아오는거 어떻게하는지 모르겟음...*/}
            </View>
            
        </View>
        <View style={{flex:15}}>
            <View style={{flex:3,borderBottomWidth:1}}>

                <Text style={{marginLeft:10,marginTop:10}}>
                    시작시간
                </Text>
                <Text style={{fontSize:20,marginTop:10,marginLeft:10}}>
                    {this.state.currentTime}
                </Text>

            </View>
            <View style={{flex:3,borderBottomWidth:1}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                <Text>
                    종료시간 
                </Text>
                
                <Button title='5분' 
                
                onPress={this.fiveTime}  />

                
                <Button title='10분' onPress={this.tenTime}/> 

                
                <Button title='15분' onPress={this.fifteenTime}/>
                    </View>
                
                <Text style={{fontSize:20,marginTop:10,marginLeft:10}}>
                   {this.state.promiseTime}
                </Text>


            </View>
            <View style={{flex:4,borderBottomWidth:1}}>
                <Text style={{marginLeft:10,marginTop:20}}>
                질문(선택사항)
                </Text>
                <TextInput
                     placeholder="질문을 적어주세요."
                >

                </TextInput>
            </View> 
            <View style={{flex:5}}>
                
            </View>


        </View>
       
    </SafeAreaView>
    
    )
        }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:10,
        justifyContent:'center',
        
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
export default createAttandance;