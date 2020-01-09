import React, {Component} from 'react';
import {View,TextInput,Text, TouchableOpacity,Image,Linking,Button,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground} from 'react-native';
import {HeaderButton,HeaderButtons,Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";


const searchurl="https://khub.jbnu.ac.kr/mobile/web/app/#/group/search"

const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

class Dashboard extends Component {

    state = {
        isModalVisible: false
      };
    
      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
    render(){
        return(
            //정렬이 우측으로 안되어서 최후의 방법으로 margin left햇습니다;;; 
            <View>
                <View style={{height:"25%",flexDirection:'row',backgroundColor:'#1f8dd6'}}>
                    <Text style={{marginTop:10,marginLeft:10,color:'#fff', }}>
                        JBNUHub
                    </Text>
                    
                    <TouchableOpacity style={{marginLeft:120}}> 
                     <Image source={require('../../../img/profile.png')} style={{marginTop:5,borderRadius:400/2}}  />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:25 ,marginTop:5}}>
                    <Icon name="ios-mail" size={28} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:25,marginTop:5 }}>
                    <Icon name="ios-search" size={28} color="white" onPress={()=>openURL(searchurl)}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:25 }} onPress={this.toggleModal}>
                    <Icon name="md-more" size={28} color="white" style={{marginTop:5}}/>
                     </TouchableOpacity>
                     <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this.toggleModal}>
                         <View style={{ flex: 1 }}>
                           <Text>Hello!</Text>
                             <Button title="Hide modal" onPress={this.toggleModal} />
                             </View>
                            </Modal>
                </View>
                
            </View>
           
        )
    }
}
export default Dashboard
const styles = StyleSheet.create({
    
});
