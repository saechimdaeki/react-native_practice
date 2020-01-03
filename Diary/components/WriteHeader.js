import React from 'react';
import {TouchableOpacity, StyleSheet,Text,View,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';

const WriteHeader = ({navigation})=>{
    return(
        <View>
            <TouchableOpacity
            onPress={()=> {navigation.goBack()}}
            >
                
                <Icon name="bookmark" size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({

})
export default withNavigation(WriteHeader) //navigation정보 같이사용하게끔 