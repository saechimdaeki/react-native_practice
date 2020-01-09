import React, {Component} from 'react';
import {View,TextInput,Alert,Text,SafeAreaView ,TouchableOpacity,Image,Linking,Button,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground} from 'react-native';
import {HeaderButton,HeaderButtons,Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native'
import Home from '../Home/index'




let deviceWidth = Dimensions.get('window').width
const flatListData = [
    {key:'모바일앱개발연구', img:require('../../../img/lec1.jpg')},
    {key:'2019-2 데이터베이스\n\t\t\t\t\t\t\t    (5분반)',img:require('../../../img/lec2.jpg')},
    {key:'ㅋㅗ딩',img:require('../../../img/lec3.jpg')},
    {key:'테스트',img:require('../../../img/lec4.jpg')},
    {key:'빅데이터융합',img:require('../../../img/lec5.jpg')},
    {key:'인문학연구소',img:require('../../../img/lec6.jpg')},
    {key:'김준성의 안드로이드',img:require('../../../img/lec7.jpg')},
    {key:'소프트웨어공학(2분반)-2018년2학기',img:require('../../../img/lec8.jpg')},
    {key:'c++프로그래밍(1분반)-2017년2학기',img:require('../../../img/lec9.jpg')},
    
    
];

const searchurl="https://khub.jbnu.ac.kr/mobile/web/app/#/group/search"

const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }
  class FlatListItem extends Component{
    render() {
        return(
          <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri:this.props.item.imageUrl ,width : deviceWidth/2 , height: 100}}></Image>
              <Text>{this.props.item.key}</Text>
          </View>

        );
    }
}
class Dashboard extends React.Component {
    gotmp(){
        this.props.navigation.navigate('home')
    }
    gosetting(){
        this.props.navigation.navigate('additional')
        this.toggleModal()
    }
    gonotice(){
        this.props.navigation.navigate('notice')
        this.toggleModal()
    }
    state = {
        isModalVisible: false,
        refreshing:false,
        page:1,
      };
    
      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        
    };
    render(){
        return(
           <SafeAreaView>
            
            
                <View style={{height:"8%",flexDirection:'row',backgroundColor:'#1f8dd6'}}>
                    <Text style={ styles.title}>
                        JBNUHub
                    </Text>
                    
                    <TouchableOpacity style={{marginLeft:100,marginTop:5}}> 
                     <Image source={require('../../../img/profile.png')} style={{marginTop:5,borderRadius:400/2}}  />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:20 ,marginTop:10}}>
                    <Icon name="ios-mail" size={28} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:20,marginTop:10 }}>
                    <Icon name="ios-search" size={28} color="white" onPress={()=>openURL(searchurl)}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:20,marginTop:5,marginRight:15 }} onPress={this.toggleModal}>
                    <Icon name="md-more" size={29} color="white" style={{marginTop:5}}/>
                     </TouchableOpacity>
                     <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this.toggleModal} onBackdropPress={this.toggleModal}>
                     <View style={styles.modalview}>
                    <TouchableWithoutFeedback onPress={_=>this.gosetting()}>
                        <Text style={styles.modalitem}>설정</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={_=>this.gonotice()}>
                        <Text style={styles.modalitem}>공지사항</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('내 강의대화 보기')}}>
                        <Text style={styles.modalitem}>내 강의대화 보기</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('숨긴 강의 관리')}}>
                        <Text style={styles.modalitem}>숨긴 강의 관리</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('즐겨찾기 관리')}}>
                        <Text style={styles.modalitem}>즐겨찾기 관리</Text>
                    </TouchableWithoutFeedback>
                </View>
                            </Modal>
                </View>
                <View style={{marginTop:10}}>
                <FlatList
                            data ={flatListData}
                            numColumns={2}
                           // initialNumToRender={8}
                            onEndReachd={styles.end}
                            renderItem = {({item})=>
                            <TouchableWithoutFeedback onPress={_=>this.gotmp()}> 
                            {/*일단은 홈으로가지게만들음 */}
                            <View style={styles.item}>
                            <View style={{backgroundColor:'#fff',height:111}}>
                                    <ImageBackground style={styles.itemImage} source={item.img}/>
                            </View>
                            <View style={styles.itemInfo}>
                                    <Text>{item.key}</Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>}
                            keyExtractor = {({item,index})=>item}
                    />
                <View>
                    <Text>
                        dadasdad
                    </Text>
                </View>
                </View>
               
            </SafeAreaView>
        )
    }
}
export default Dashboard
// 스타일 퍼옴 링크:
//https://github.com/Djunnni/react-native-summary/blob/master/khub/src/screens/MainScreen.js
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        flex:1,
        fontSize:22,
        color:'#fff',
        marginTop:10,
        marginLeft:5,
        fontWeight:'bold',
    },
    titleItem:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    titleIcon:{
        paddingHorizontal:15,
        color:'#fff',
        fontSize:26,
    },
    header:{
        flex:1,
        paddingLeft:15,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        alignItems:'center',
        padding:15,
    },
    modal : {
        flex:1,
        width:'70%',
        marginHorizontal:'15%',
    },
    modalview : {
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:5,
    },
    modalitem : {
        fontSize:18,
        paddingVertical:10,
    },
    item:{
        
        width:132,
        height:150,
        margin:5,
        marginLeft:20,
        borderRadius:10,
        overflow:'hidden',

    },
    itemImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain',
    },
    itemInfo:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:131,
        height:40,
    },
    end:{
        
    }
});
