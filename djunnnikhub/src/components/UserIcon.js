import React ,{useState,useEffect}from 'react';
import {Image,StyleSheet,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UserIcon = (props) => {
    const [customStyle,setCustomStyle] = useState(props.customStyle);
    const [ImageUri,setImageUri] = useState(props.Image);

    if(ImageUri!=''){
        return (
            <Image style={customStyle} source={{uri:ImageUri}}/>
        )
    }
    return (
        <Icon style={customStyle} name='ios-contact'/>
    )
}
const styles = StyleSheet.create({

})
export default UserIcon;

