import React from 'react';
import { StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function Listitem() {
  return (
    <View style={styles.listitembox}>
        <TouchableOpacity>
        <AntDesign name="checkcircle" size={20}/>

        </TouchableOpacity>
      <Text style={styles.textitem}>목록 아이템1</Text>
      <TouchableOpacity>
        <AntDesign name="close" size={20}/>

        </TouchableOpacity>
    </View>
  );
}
const {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    listitembox:{
        borderBottomWidth:1, //아랫줄만 넙주는 밑줄느낌스
        paddingBottom:5,
        marginTop:10,
        width:width-60,
        flexDirection:"row", //열을 행으로 바꿔버려 
        alignItems:"center",
        justifyContent:"space-between", //사이사이 스페이스넣었다 생각 
    },
    textitem:{
        fontSize:20,
        fontWeight:'bold',

    }

  });