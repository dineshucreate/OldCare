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
import LoginScreen from './src/login/LoginScreen';
import SignUp_Screen from './src/sign_up/SignUp_Screen';


 class App extends Component {

 
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.welcome}> SPLASH SCREEN</Text>
      </View>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Splash: App,
    Login: LoginScreen,
    SignUp: SignUp_Screen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(AppNavigator);

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
