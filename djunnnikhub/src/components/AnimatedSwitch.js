import React  from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class AnimatedSwitch extends React.Component {
    state = {
        active: false
    }

    handleSwitchToggle = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                height: 35,
                width: 200,
                backgroundColor: '#f1f1f1'
            },
            toggle: {
                height: 35,
                width: 100,
                backgroundColor: this.state.active ? '#55acee' : '#CB6161',
                alignItems: 'center',
                justifyContent: 'center',
                left: this.state.active ? 100 : 0
            },
            label: {
                fontSize: 17,
                color: '#FFF'
            }
        });

        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={this.handleSwitchToggle}
                style={styles.toggle}
                >
                    <Text style= {styles.label}>
                        {this.state.active ? '안읽은 쪽지' : '강의 쪽지'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AnimatedSwitch;