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




export default class SignUp_Screen extends Component {

  state={
    name:'',
    email:'',
    password:''
  }

  onFocus(){
    this.setState({
        backgroundColor:'#fff'
    })
}

registerButton = ()=>{
  const{name,email,password} = this.state;
  if(name.length>0){
    this.validate( (value)=>{
      if(value){
  
        if(password.length>0){
          console.log("password "+this.state.password)

         this.storeData()
         
        }else{
          alert("Enter a password");
        }
      }else{
        alert("Enter a valid email");
      }
    })

  }else{
    alert("Enter a name")
  }
}

storeData = async () => {
  try {
    await AsyncStorage.setItem('name', this.state.name)
    await AsyncStorage.setItem('email_Key', this.state.email)
    await AsyncStorage.setItem('password_Key', this.state.password)
    console.log("storeData Success")
    this.props.navigation.navigate('Login')
  } catch (e) {
   console.log("errorr"+e)
  }
}

validate = (callback) => {
  console.log("validate");
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(this.state.email) === false){
  console.log("Email is Not Correct");
  return callback(false);
    }else {
    console.log("Email is Correct");
    return callback(true);
   }
}

LoginCall = () =>{
  this.props.navigation.navigate('Login')
}

  render() {
    return (
      <View style={styles.container}>
    
    <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='Name'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff"
         onChangeText ={(input) => this.setState({name:input})}/>

        
    <TextInput style={styles.textInputs}
    onFocus={()=>this.onFocus}
    placeholder = 'Email'
    underlineColorAndroid='#fff'
    selectionColor='#fff'
    placeholderTextColor='#fff'
    onChangeText = {(input) => this.setState({email:input})}/>

<TextInput style={styles.textInputs}
    onFocus={()=>this.onFocus}
    placeholder = 'Password'
    underlineColorAndroid='#fff'
    selectionColor='#fff'
    placeholderTextColor='#fff'
    onChangeText = {(input) => this.setState({password:input})}/>

<TouchableOpacity style={styles.buttonView} onPress={this.registerButton}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>Register</Text>
  </View>

</TouchableOpacity>

<TouchableOpacity style={styles.buttonView} onPress={this.LoginCall}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
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
