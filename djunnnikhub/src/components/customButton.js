import React, { Component } from 'react';
import {View,Text,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CustomButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.props.onpress}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Icon style={styles.icon,{color:'#aaa', fontSize:26}} name='ios-arrow-forward'/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
CustomButton.defaultProps = {
    onpress : ()=>{},
        iconName : '',
        title: '',
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        padding:10,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:0.75,
        borderColor:'#eee',
    },
    icon:{
        fontSize:22,
        fontWeight:'bold', 
    },
    title:{
        fontSize:16,
    },
});