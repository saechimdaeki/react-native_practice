import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import WriteScreen from './screens/WriteScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
//BottomTabNavigator를 생성합니다. (이름처럼 아래부분에 탭을 통해 이동하는 Navigator입니다)
const BaseNavi = createBottomTabNavigator({
//MainScreen이라는 이름의 tab item을 만듭니다
MainScreen: {
//Tab을 하면 띄워줄 screen으로 MainScreen을 설정합니다
  screen: MainScreen,
  },
  DetailScreen: {
  screen: DetailScreen,
  },
  WriteScreen: {
  screen: WriteScreen,
  },
});
//App.js에서 Navigation을 사용하려면 createAppContainer을 이용해
//최상위 Navigation을 처리 해줘야 합니다. 지금은 BaseNavi하나이므로 BaseNavi를 처리해줍시다
const MyNavi = createAppContainer(BaseNavi);
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
//여기 정렬되어있는애들 지워야지 우리의 bottomnavi가 제대로 보입니다
  },
});
