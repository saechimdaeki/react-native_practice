import React, { Component } from 'react'
import { Text, View , Button } from 'react-native'
import { createStackNavigator , createAppContainer } from "react-navigation";

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text> This is Home Component</Text>
                <Button onPress={() => this.props.navigation.navigate('test')} title='Test Page'></Button>
            </View>
        )
    }
}

class Test extends Component {
    render() {
        return (
            <View>
                <Text> This is Test Component</Text>
                <Button onPress={() => this.props.navigation.navigate('home')} title='Home App'></Button>
            </View>
        )
    }
}
const RooStack = createStackNavigator(
    {
        home: HomeScreen,
        test: Test,
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