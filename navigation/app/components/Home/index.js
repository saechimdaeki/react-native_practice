import React, {Component} from 'react';
import {View,TextInput,Text,Button, Alert,Image} from 'react-native';
import styles from './styles'
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';

class Home extends Component {

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
    render(){
        const {heading , input ,parent,buttons,imgs,white,gray,center,rowf,spaceleft}=styles
        return(
            

            <View>
                <View style={white}> 
                <Image source={require('./khub.png')} style={imgs} />
                <Text style={heading}>
                    플립드 러닝을 위한 JBNU 강의포털
                </Text>
                <TextInput  style={input} placeholder="직번(학번)" onChangeText={text=>this.setState({username:text})}/>

                <TextInput  style={input} secureTextEntry={true} placeholder="비밀번호" onChangeText={text=>this.setState({password:text})}/>
                <CheckBox LEFT title="로그인 상태 유지" value={this.state.checked}   onValueChange={() => this.setState({ checked: !this.state.checked })} />
                <View style={[{width:"90%", margin:10}]}>
                <Button title={"로그인"} onPress={_ =>this.checkLogin()} />
                        </View>
                <View style={rowf}>
                <TouchableOpacity style={rowf}>
                    <Text >
                        회원가입
                    </Text>
                </TouchableOpacity>    
                <TouchableOpacity style={rowf}>
                    <Text style={spaceleft}>
                        아이디/비밀번호 찾기
                    </Text>
                </TouchableOpacity>  

                </View>        
                    </View>
                <View style={gray}>
                
                    </View>    
                </View>
                

              
           
            
        )
    }
}
export default Home