/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";



export default  class NewsScreen extends Component {

 
  
  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.welcome}> Card Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7468C5',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:"#fff"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
