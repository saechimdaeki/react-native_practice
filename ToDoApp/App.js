import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './app/components/Header';
import Subtittle from './app/components/Subtitle';
import Input from './app/components/input';
import ListItem from './app/components/Listitem';
import {AntDesign} from "@expo/vector-icons";
export default class App extends React.Component { // function을 class 로바꾼이유 state를 다루기위해서
  constructor(props){
    super(props);
    this.state={ ///초기 state값 
    inputvalue:"",
    todos:[
      {
        title: '나는 공부를 하지않고 있다'
      },
      {
        title:'일찍 일어날래'
      },
    ]
    }
  }
  _makeTodoItem = ({ item, index }) => {
    return (
    <ListItem text={item.title}/>
    )
    };
    _changeText = (value) => {
    this.setState({inputValue: value});
    }
    _addTodoItem = () => {
    if(this.state.inputValue !==""){
    const prevTodo = this.state.todos; //현재의 todos를 prevTodo에 넣습니다.
    const newTodo = { title: this.state.inputValue}; //현재 input창에 있는 값을 새로운 할일로 등록
    this.setState({
    inputValue:"", //TodoItem이 추가되면 입력창은 비어야하므로
    todos: prevTodo.concat(newTodo) // 이전의 TodoItem에 새 Todo를 이어붙여 todos값으로 변경
    });
    }
    }
    
  render(){
  return (
    <View style={styles.container}>
      <View stlyle={styles.headercenter}>
           <Header/>
      </View>
      <View style={styles.subtitlepos}>
        <Subtittle title="해야 할 일"/>
        <Input value={this.state.inputvalue}
          changeText={this._changeText}
          addtodoitem={this._addTodoItem}/>
      </View>
      <View style={styles.subtitlepos}>
        <Subtittle title="해야 할 일 목록"/>
        <ListItem name="코딩하기"/>
        <ListItem name="다이어트하기"/>
        <ListItem name={this.state.todos[0].title}/>
        <FlatList
        date={this.state.todos}
        renderItem={this._makeTodoItem} //보통 클래스안에함수는 앞에_붙인다넴;;
        keyExtractor={(item, index) => { return `${index}`}}/>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  
    
  },
  headercenter:{
    alignItems:"center",
  },
  subtitlepos:{
    marginLeft:20,
  },
  

});
