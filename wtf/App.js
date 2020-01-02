import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WEATHER from './app/weather';
export default  class extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <WEATHER/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
