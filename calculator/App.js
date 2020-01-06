import React, {Component } from 'react';
import {StyleSheet, Text,View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state={
      resultText:""
    }
    this.operation =['D','+','-','*','/']

  }
  
  calculateResult() {
    const text=this.state.resultText
    //parse ! 
  }

  buttonPressed(text){
   // console.log(text)
    if(text =='=') {

      return calculateResult(this.state.resultText)
    }

    this.setState({
      resultText:this.state.resultText+text
    })
  }
  operate(operation) {
    switch(operation) {
      case 'D':
        //console.log(this.state.resultText)
          const text=this.state.resultText.split('')
          text.pop()
          text.join('')
          this.setState({
            resultText:text.join('')
          })
          break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastchar=this.state.resultText.split('').pop()

        if(this.operation.indexOf(lastchar) >0) return 
        if(this.state.text=="") return 
        this.setState({
          resultText:this.state.resultText+operation
        })
        
    }
  }

  render() {
    let elems=[]
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for (let i=0; i<4; i++) {
      let row=[]
      for(let j=0; j<3; j++ ) {
        row.push( <TouchableOpacity onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
      <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity >)
      }
      elems.push(<View style={styles.rows}>{row}</View>)
    }
    let ops=[]
    for(let i=0; i<5; i++){
      ops.push(<TouchableOpacity style={styles.btn} onPress={()=> this.operate(this.operation[i])}>
        <Text style={[styles.btntext,styles.white]}>{this.operation[i]}</Text>  
          </TouchableOpacity >)
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
            <Text style={styles.resultText}>
              {this.state.resultText}
            </Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>  
        </View> 
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {elems}
          </View>
          <View style={styles.operation}>
              {ops}
            </View>
        </View>    
      </View>
    );
  } 
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  resultText:{
    fontSize:30,
    color:'white',

  },
  calculationText:{
    fontSize:24,
    color:'white',
  },
  rows:{
    flexDirection:'row',
    flex:1,
    justifyContent:"space-around",
    alignItems:'center',
  },
  btn:{
    flex:1,
    alignItems:"center",
    alignSelf:'stretch',
    justifyContent:'center',

  },
  btntext:{
    fontSize:30
  },  
  result:{
    flex:2,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  buttons:{
    flex:7,
    flexDirection:'row',
  },
  numbers:{
    flex:3,
    backgroundColor:'yellow',
  },
  operation:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch',
    backgroundColor:'black'
  },
  white:{
    color:'white'
  },
 


})