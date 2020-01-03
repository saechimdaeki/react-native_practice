import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import WriteScreen from './screens/WriteScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
//BottomTabNavigator를 생성합니다. (이름처럼 아래부분에 탭을 통해 이동하는 Navigator입니다)
const BaseNavi = createBottomTabNavigator({
//MainScreen이라는 이름의 tab item을 만듭니다
MainScreen: {
//Tab을 하면 띄워줄 screen으로 MainScreen을 설정합니다
  screen: MainScreen,
  },
  DetailScreen: {
  screen: DetailScreen,
  navigationOptions :  () => ({
    tabBarIcon: ({tintColor}) => {
      <Icon name="bookmark" size={24} color={tintColor}/>
    }
  
  })
  },
  WriteScreen: {
  screen: WriteScreen,
  },
  
},
  {
    tabBarOptions:{
      showLabel:true,
    }
  }
);
const BaseNavi2= createStackNavigator(
  {
    Write: WriteScreen,
    Tab: BaseNavi, //basenavi를 감쌈 

  },
  {
    initialRouteName: 'Tab',//tab먼저보여주게함 tab에서는 mainpage먼저보이게하니까 mainpage부터보임
    headerMode: 'screen'
  }
)
//App.js에서 Navigation을 사용하려면 createAppContainer을 이용해
//최상위 Navigation을 처리 해줘야 합니다. 지금은 BaseNavi하나이므로 BaseNavi를 처리해줍시다
const MyNavi = createAppContainer(BaseNavi2);

export default class App extends React.Component {
    render(){
    return (
      <View style={styles.container}>
      <MyNavi/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  },
});
