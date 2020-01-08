import React, {Component} from 'react';
import {View,TextInput,Text, TouchableOpacity,Image} from 'react-native';
import {HeaderButton,HeaderButtons,Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';



class Dashboard extends Component {
    render(){
        return(
            //정렬이 우측으로 안되어서 최후의 방법으로 margin left햇습니다;;; 
            <View>
                <View style={{height:"22%",flexDirection:'row',backgroundColor:'#1f8dd6'}}>
                    <Text style={{marginTop:3,marginLeft:10,color:'#fff', }}>
                        JBNUHub
                    </Text>
                    
                    <TouchableOpacity style={{marginLeft:150}}> 
                     <Image source={require('../../../img/profile.png')} style={{borderRadius:400/2}}  />

                       
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:17 }}>
                         
                    <Icon name="ios-mail" size={30} color="white"/>

                       
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:17 }}>

                    <Icon name="ios-search" size={30} color="white"/>

                       
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
export default Dashboard