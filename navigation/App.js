import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'
import {   createAppContainer } from "react-navigation";
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import Additional from './app/components/addtional';



const RooStack = createStackNavigator(
    {
        home: Home ,
       
        dashboard:Dashboard,
       // test: Test,
       additional:Additional,
    },
    {
        initialRouteName : 'home',
        headerMode:'none',
        navigationOptions:{
        headershown:false,
        }
    }
)
const AppContainer  = createAppContainer(RooStack);
export default class App extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

