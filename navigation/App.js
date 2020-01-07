import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'
import {   createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';




const RooStack = createStackNavigator(
    {
        home: Home,
        dashboard:Dashboard,
       // test: Test,
    },
    {
        initialRouteName : 'home'
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

