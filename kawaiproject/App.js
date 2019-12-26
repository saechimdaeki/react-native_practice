import React from 'react';
import {TextInput, StyleSheet, Text, View,StatusBar, Dimensions , Platform ,ScrollView} from 'react-native';
import {AppLoading} from "expo";
import ToDo from "./ToDo";
import uuidv1 from "uuid/v1";
const { height, width} = Dimensions.get("window");
export default class App extends React.Component {
  state={
    newToDo: "",
    loadedToDos: false
  }
  componentDidMount =() =>{
    this._loadTodos();
  }
  render(){
    const {newToDo,loadedToDos}=this.state;
    if(!loadedToDos){
      return <AppLoading/>
    }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.title}>Kawai TODO </Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"new to do"}
         value={newToDo} 
         onChangeText={this._controlNewTodo}
         placeholderTextColor={"#999"}
         returnKeyType={"done"}
         autoCorrect={false}
         onSubmitEditing={this._addToDo}
         />
         <ScrollView contentContainerStyle={styles.toDos}>
           <ToDo text={"hello i'm a to do"}/>
         </ScrollView>
      </View>
    </View>
  );
}
_controlNewTodo=text=>{
  this.setState({
newToDo: text
  });
};
_loadTodos=()=>{
  this.setState({
    loadedToDos : true
  })
};
_addToDo= () =>{
  const {newToDo}=this.state;
  if(newToDo !== ""){
   this.setState(prevState => {
    const ID= uuidv1();
    const newToDoObject={
        [ID]:{
          id:ID,
          isCompleted:false,
          text: newToDo,
          createdAt:Date.now()
          }
      };
      const newState={
        ...prevState,
        newTodo:"",
        toDos:{
          ...prevState.toDos,
          ...newToDoObject
        }
      };
      return {...newState};
    });
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title:{
    color:"white",
    fontSize:30,
    marginTop:50,
    fontWeight:"200",
    marginBottom:30
  },
  card: {
    backgroundColor: "white",
    flex:1,
    width:width-25,
    borderRadius:10,
    borderTopRightRadius:10,
    ...Platform.select({
      ios:{
        shadowColor:"rgba(50,50,50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:0
        }
        
      },
      android: {
        elevation:3
      }
    })
  },
  input: {
    padding:20,
    borderBottomColor:"#bbb",
    borderBottomWidth: 1,
    fontSize: 25 
  },
  toDos:{
    alignItems: "center"
  }
});
