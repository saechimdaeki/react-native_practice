import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableWithoutFeedback} from 'react-native';

const InfoButton = (props) => {
    const [color,setColor] = useState('#000');
    const [tle,setTle] = useState('');
    const [subtle,setSubtle] = useState('');

    useEffect(()=>{
        setColor(props.color);
        setTle(props.title);
        setSubtle(props.subtitle);
    },[])
    return (
            <View style={styles.container}>
                <Text style={styles.title,{color:color}}>{tle}</Text>
                <Text style={styles.subtitle,{color:color}}>{subtle}</Text>
            </View>
    )
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
    title:{
        fontSize:16,
    },
    subtitle:{
        fontSize:16,
    }
})

export default InfoButton;