import React, { Fragment } from 'react';
import {SafeAreaView,View,Text,StyleSheet,TouchableWithoutFeedback,ToastAndroid, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker'
import Modal from "react-native-modal";
class  creteReport extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            date:new Date(),
            date2:new Date(),
            promisedate:'껄껄',
            promisedateend:''
        }
      }
      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        
    };
   
    togglestatus(){
        this.setState({
            status:!this.state.status
        });
    }
  

    render(){
        
    return (
    
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon onPress={()=>{this.props.navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
          <View style={{flexDirection:'column',marginLeft:100}}>
          <Text style={styles.title}>레포트 출제</Text>
          <Text style={{color:'white',fontWeight:'normal',justifyContent:'center',fontSize:12,marginLeft:20}}>모바일앱개발연구</Text>
           {/*여기 값받아오는거 어떻게하는지 모르겟음...*/}
          
          </View>
          <TouchableOpacity>
            <Text style={{paddingLeft:80,color:'white'}}>
                완료
            </Text>
          </TouchableOpacity>
      </View>
      <View style={{flex:15}}>
         <View style={{flex:1.5,borderBottomWidth:1}}> 
            <TextInput placeholder='제목을 입력하세요.'
            />
                
         </View>
        <View style={{flex:10,borderBottomWidth:1}}>  
            <TextInput placeholder='레포트를 입력하세요'/>
        </View>
        
        <View style={{flex:5}}>
            <View style={{flex:1,borderBottomWidth:1,flexDirection:'row'}}>
                <View style={{flex:2,alignSelf:'center'}}>
                    <Text>
                        시작일시
                    </Text>
                </View>
                <View style={{flex:8, alignSelf:'center',marginRight:10}}>
                    <Button title={this.state.date.toString()}color='grey' onPress={this.toggleModal}/>
                </View>
            </View>
            <View style={{flex:1,borderBottomWidth:1,flexDirection:'row'}}>
                <View style={{flex:2,alignSelf:'center'}}>
                    <Text>
                        종료일시
                    </Text>
                </View>
                <View style={{flex:8, alignSelf:'center',marginRight:10}}>
                    <Button title={this.state.promisedateend} color='grey' onPress={this.toggleModal}/>
           
                </View>

            </View>

            <View style={{flex:1,borderBottomWidth:1,flexDirection:'row',alignSelf:'flex-start'}}>
                <TouchableOpacity>
                    <Icon name="ios-camera" size={50}  style={{marginLeft:10}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="ios-clipboard" size={50} style={{marginLeft:20}}/>
                </TouchableOpacity>
            </View>
        </View> 
      </View>
      <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this.toggleModal} onBackdropPress={this.toggleModal}>
                     <View style={styles.modalview}>
                         <Text style={{alignSelf:'flex-start',color:'white',fontSize:20,margin:10}}>
                             날짜 및 시간 설정
                         </Text>
                     <DatePicker
                     mode={'date'}
                     textColor='#ffffff'
                     fadeToColor='black'
                        date={this.state.date}
                        onDateChange={date => this.setState({ date},
                        )}/>
                <DatePicker
                     mode={'time'}
                     fadeToColor='black'
                     textColor='#ffffff'
                        date={this.state.date2}
                        onDateChange={date2 => this.setState({ date2 })}/>
                 <View style={{flexDirection:'row', marginTop:20,alignSelf:'flex-start'}}>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <Text style={{color:'mediumaquamarine',fontSize:20,margin:10,fontWeight:'bold'}}>
                            삭제
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <Text style={{color:'mediumaquamarine',fontSize:20,margin:10,fontWeight:'bold',marginLeft:140}}>
                            취소
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <Text style={{color:'mediumaquamarine',fontSize:20,margin:10,fontWeight:'bold',marginLeft:20,marginRight:10}}>
                            설정
                        </Text>
                    </TouchableOpacity>
                    </View>        
                </View>

               

             
                    </Modal>
     
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
    modal : {
        flex:1,
        width:'70%',
        marginHorizontal:'15%',
    },
    modalview : {
        backgroundColor:'darkgray',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:5,
    },
    modalitem : {
        fontSize:18,
        paddingVertical:10,
    },
  
});
export default creteReport;