import React, {Component} from 'react';
import {View,TextInput,Text,Button, Alert} from 'react-native';
import styles from './styles'
class Home extends Component {

    state={username:"",password:""}
    checkLogin(){
        const{username,password}=this.state
        if(username=='admin' || password=='admin'){
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
        const {heading , input ,parent,buttons}=styles
        return(
            <View style={parent}>
                <Text style={heading}>
                    Login into the application
                </Text>
                <TextInput  style={input} placeholder="Username" onChangeText={text=>this.setState({username:text})}/>

                <TextInput  style={input} secureTextEntry={true} placeholder="Password" onChangeText={text=>this.setState({password:text})}/>
                <View style={[{width:"90%", margin:20}]}>
                <Button title={"Login"} onPress={_ =>this.checkLogin()} />
                </View>
            </View>
        )
    }
}
export default Home