import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';



class First extends Component {

    render() {

        const {navigation} = this.props;

        return (

            <View style={{flex: 1, justifyContent: 'center'}}>

                <TouchableOpacity

                        onPress={()=> {navigation.navigate("Second")}}

                >

                    <Text>

                        This is First

                    </Text>

                </TouchableOpacity>

            </View>

        );

    }

}




export default First;