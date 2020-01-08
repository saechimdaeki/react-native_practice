import React, {Component} from 'react';
import {View,TextInput,Text,Button, Alert,Image,Linking} from 'react-native';
import styles from './styles'
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';

const khubpc="https://khub.jbnu.ac.kr/index.jsp?from=mweb"
const khuburl="https://play.google.com/store/apps/details?id=kr.ktech.jbnuhub"
const khuburlapple="https://apps.apple.com/kr/app/id1233032167"
const idpassword="https://all.jbnu.ac.kr/PswrdSrch.html"
 

const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }
class Home extends React.Component {
   
    state={username:"",password:""}
    checkLogin(){
        const{username,password}=this.state
        if(username=='admin' || password=='admin' ){
            console.warn('로그인 성공')
            this.props.navigation.navigate('dashboard')
            //dashboard 이동
        } else {
                //errrorrr
            Alert.alert('로그인 실패','아이디나 비밀번호가 불일치',[{
                text:'확인'
            }])
        }
    }
    
    enroll(){
        Alert.alert('khub.jbnu.ac.kr 내용: ','회원가입이 필요없습니다.\n전북대학교 학번/사번을 이용해주세요',[{
            text:'확인'
        }])
    }
    
    render(){
        const {heading ,grayleft, input ,parent,buttons,imgs,white,gray,center,rowf,spaceleft,bottomimg,graytext}=styles
        return(
            

        <View>
            <View style={white}> 
                <Image source={require('./khub.png')} style={imgs} />
                <Text style={heading}>
                    플립드 러닝을 위한 JBNU 강의포털
                </Text>
                <TextInput  style={input} placeholder="직번(학번)" onChangeText={text=>this.setState({username:text})}/>

                <TextInput  style={input} secureTextEntry={true} placeholder="비밀번호" onChangeText={text=>this.setState({password:text})}/>
                <CheckBox LEFT title="로그인 상태 유지" value={this.state.checked}   onValueChange={() => this.setState({ checked: !this.state.checked })}  />
                <View style={[{width:"90%", margin:15}]}>
                <Button title={"로그인"} onPress={_ =>this.checkLogin()} />
                        </View>
                <View style={rowf}>
                <TouchableOpacity style={rowf} onPress={()=>this.enroll()} >
                    <Text >
                        회원가입
                    </Text>
                </TouchableOpacity>    
                <TouchableOpacity style={rowf} onPress={()=>openURL(idpassword)}>
                    <Text style={spaceleft}>
                        아이디/비밀번호 찾기
                    </Text>
                </TouchableOpacity>  

                </View>        
                    </View>
                <View style={white}>
                    <View style={bottomimg}>
                    <TouchableOpacity onPress={()=>openURL(khuburlapple)}>
                        <Image source={require('../../../img/apple.png')} style={imgs} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>openURL(khuburl)}>
                        <Image source={require('../../../img/google.png')} style={imgs} />
                    </TouchableOpacity>
                    </View>
                </View>
                         <View style={{marginTop:12,flexDirection:'row', justifyContent:'center'}}>
                             <Text style={{fontSize:15}}>
                            ⓒ전북대학교                
                             </Text>
                             <TouchableOpacity style={grayleft} onPress={()=>openURL(khubpc)}>
                                 <Text style={{fontSize:15}}>
                                     PC버전
                                 </Text>
                             </TouchableOpacity>
                        </View>
                        <Text style={{marginTop:10,textAlign:'center',fontSize:12}}>
                        Icon by Meterial icons
                        </Text>
            </View>
                

              
           
            //
        )
    }
}
export default Home