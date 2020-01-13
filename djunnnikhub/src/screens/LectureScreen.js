import React ,{useState, Fragment,Component} from 'react';
import {SafeAreaView,View,Text,StyleSheet, Image,FlatList} from 'react-native';

const data = {"result":"success","groupId":21,"ownerName":"000","groupName":"모바일앱개발연구","ownerId":2,"memberLength":38,"groupPath":"/앱연구","groupPhoto":"https://khub.jbnu.ac.kr/img/group/background/default_0.jpg","isAdmin":false,"isJoin":true,"groupAuth":0}
const headata=[
    {
        "key":"1",
        "name":"강의대화"
    },
    {
        "key":"2",
        "name":"자료"
    },
    {
        "key":"3",
        "name":"멤버"
    },
    {
        "key":"4",
        "name":"출석체크"
    },
    {
        "key":"5",
        "name":"레포트"
    },
    {
        "key":"6",
        "name":"쪽지"
    },
    {
        "key":"7",
        "name":"일정"
    },
    {
        "key":"8",
        "name":"북마크"
    },
    {
        "key":"9",
        "name":"공지사항"
    },
    {
        "key":"10",
        "name":"설문조사"
    }
]
class FlatListItem extends Component{
    render() {
        return(
          <View style ={{flex:1,marginRight: 20,justifyContent: 'center', alignItems: 'center'}}>
              <Text>{this.props.item.name}</Text>
          </View>

        );
    }
}

const LectureScreen = ({navigation,id}) => {
    const [name,setName] = useState(navigation.getParam('id','123'));
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.background} source={require('../img/background/default_0.jpg')}/>
                <View style={styles.lecInfo}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.bar}>
                    <FlatList 
                        data={headata}
                        horizontal={true}
                        renderItem={({item,index})=>{
                            return(
                                <FlatListItem item={item}index={index}></FlatListItem>
                            )
                        }}
                        
                        />
                </View>
            </View>
            <View style={styles.content}>
                    <Text style={styles.writeButton}>강의대화에 글쓰기</Text>
                    <View style={styles.contentItem}>
                        <View style={styles.userInfo}>
                            <Image/>
                            <View style={{}}>

                            </View>
                        </View>
                        <View style={styles.contentInfo}>

                        </View>
                        <View style={styles.review}>
                            <Text>댓글 0</Text>
                            <Text>댓글 쓰기</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.footer}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee',
    },
    background:{
        width: '100%',
        height:'60%',
        resizeMode: 'cover',
    },
    header:{
        height:'40%',
        
    },
    content: {
        alignItems:'center',
        paddingTop:10,
    },
    footer: {

    },
    title: {
        fontSize:18,
    },
    lecInfo: {
        padding:10,
        backgroundColor:'#fff',
    },
    bar: {
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        padding:5,
        borderWidth:0.5,
        borderColor:'#eee',
        backgroundColor:'#fff',
    },
    barItem: {
        fontSize:15,
        paddingHorizontal:10,
    },
    writeButton:{
        backgroundColor:'#428ed0',
        color:'#fff',
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:15,
        fontSize:15,
    },
    contentItem:{
        padding:10,
        backgroundColor:'#fff',
        width:'100%',
        height:220,
        marginVertical:10,
    },
    userInfo: {
        flexDirection:'row',
        width:'100%',
        height:'30%',
        borderWidth:1,
    },
    contentInfo: {
        height:'50%',
        borderWidth:1,
    },
    review:{
        flex:1,
        flexDirection:'row',
        height:'20%',
        borderWidth:1,
        justifyContent:'space-around',
        alignItems:'center'
    }
});

export default LectureScreen;