/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';




export default class SignUp_Screen extends Component {

  onFocus(){
    this.setState({
        backgroundColor:'#fff'
    })
}
  render() {
    return (
      <View style={styles.container}>
    
    <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='Name'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff">

         </TextInput>

    <TextInput style={styles.textInputs}
    onFocus={()=>this.onFocus}
    placeholder = 'Email'
    underlineColorAndroid='#fff'
    selectionColor='#fff'
    placeholderTextColor='#fff'></TextInput>

<TextInput style={styles.textInputs}
    onFocus={()=>this.onFocus}
    placeholder = 'Password'
    underlineColorAndroid='#fff'
    selectionColor='#fff'
    placeholderTextColor='#fff'></TextInput>

<TouchableOpacity style={styles.buttonView}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>Register</Text>
  </View>

</TouchableOpacity>

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
  textInputs:{
    width: 320,
    height:40,
    padding:10,
   // backgroundColor:"#fff",
   color:"#fff",
    marginLeft:0,
    marginTop:10,
  
},
button:{
  width: 130,
  height:45,
  color: "#fff",
  backgroundColor:"#403880",
  marginTop:30
},
buttonText:{
  fontSize:15,
  color:"#fff",
  textAlign:"center",        
  fontWeight:"bold",
  marginTop:10,
},
signUpText:{
  fontSize:15,
  color:"#fff",
  textAlign:"center",        
  fontWeight:"bold",
  marginTop:30,
}
 
});
