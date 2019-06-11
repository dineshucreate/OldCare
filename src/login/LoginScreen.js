/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



export default class LoginScreen extends Component {

  state ={
    email:'',
    password:'',
    validate: false
  }

  onFocus(){
    this.setState({
        backgroundColor:'#fff'
    })
}
loginButton = (value) =>{
  console.log("loginButton "+value)
  if(value){
    console.log("loginButton True "+value)
    const { password} = this.state
    console.log("password "+password)
    if(password.length>0){
      console.log("password length "+password)
    this.getData()
    }else{
      alert("Enter a password");
    }
  }else{
    alert("Enter a valid email");
  }
}

getData = async () => {
  try {
    console.log("getData ")
    const emailStore = await AsyncStorage.getItem('email_Key')
    const passwordStore = await AsyncStorage.getItem('password_Key')
    console.log("email "+emailStore)
    if(emailStore !== null & passwordStore !== null) {
      if(this.state.email==emailStore && this.state.password == passwordStore){
        console.log("MatchData")
        this.props.navigation.navigate('Menu');
      }else{
        alert("Please enter valid credentionals");
      }

      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}

validate = (callback) => {

  
  console.log("validate");
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(this.state.email) === false){
  console.log("Email is Not Correct");
  
  //this.setState({email:text})
  return callback(false);
    }else {
   // this.setState({email:text})
    console.log("Email is Correct");
    
    return callback(true);
   }
}

signUpButton = () =>{
  this.props.navigation.navigate("SignUp")
}

  render() {
    return (
      <View style={styles.container}>
    
    <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='Email'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff"
         onChangeText = {(input)=> this.setState({email:input})}/>

        

    <TextInput style={styles.textInputs}
    onFocus={()=>this.onFocus}
    placeholder = 'Password'
    underlineColorAndroid='#fff'
    selectionColor='#fff'
    placeholderTextColor='#fff'
    onChangeText = {(input) => this.setState({password: input})}/>

<TouchableOpacity style={styles.buttonView} onPress={()=>this.validate(this.loginButton)}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
  </View>

</TouchableOpacity>

    <View onPress={this.signUpButton}>
        <Text style={styles.signUpText} onPress={this.signUpButton}>
          Don't have an account? SignUp here
        </Text>
    </View>
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
