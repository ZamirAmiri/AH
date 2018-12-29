/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert,AsyncStorage,Image,TextInput,TouchableOpacity} from 'react-native';
import { StackActions } from 'react-navigation';

export default class Recovery extends Component {
  constructor(props){
    super(props);
    this.state={
      action:this.props.navigation.getParam('action'),
    }
    this.navigation = this.props.navigation;
    this.socket = this.navigation.getParam('socket');

    this.socket.onmessage = (event) =>{
      var server = JSON.parse(event.data);
      if (server.action === "activate_password") {
        this.setState({action:server.action});
      }
    }
  }
  static navigationOptions = {
    title: 'Recovery' ,
    header:null,
  };

  render() {
    switch (this.state.action) {
      case 'forgot_password':
        return(<ForgotPassWord socket = {this.socket}/>);
        break;
      case 'forgot_username':
        return(<ForgotUsername navigation ={this.navigation} socket = {this.socket}/>);
        break;
      case 'activate_password':
        return(<ActivateResetPassword navigation ={this.navigation} socket = {this.socket}/>);
        break;
      case 'activate_account':
        return(<ActivateAccount navigation ={this.navigation} socket = {this.socket}/>);
        break;
      default:
        return(null);
    }
  }
}

class ForgotPassWord extends Component{
  constructor(props){
    super(props);
    this.state={
      input:null,
    }
    this.socket = this.props.socket;
    this.submit =this.submit.bind(this);
  }
  submit(){
    const userAction={
      action:'forgot_password',
      email:this.state.input
    };
    this.socket.send(JSON.stringify(userAction));
  }
  render(){
    return(<View style={{flex:1,backgroundColor:'white',padding:'7.5%'}}>
      <View style={{height:'20%',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:2,borderBottomWidth:1,borderColor:'rgb(240,240,240)'}}>
        <Image source={{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:'30%',height:'100%'}}/>
        <Text style={{width:'70%',fontSize:15}}>Fill in your email and we will send you a reset code!</Text>
      </View>
      <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,marginTop:'10%',padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
        placeholder="Email"
        secureTextEntry = {false}
        onChangeText={(text) => this.setState({input:text})}
      />
      <TouchableOpacity
        style={{flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgb(240,240,240)',borderRadius:10,height:'12%',width:'100%',minHeight:50}}
        onPress={this.submit}
      >
        <View style={{width:'100%',justifyContent:'center',height:'50%'}}><Text style={{fontSize:15,textAlign:'center',width:'100%'}}>Reset password</Text></View>
      </TouchableOpacity>
    </View>
  );
  }
}

class ForgotUsername extends Component{
  constructor(props){
    super(props);
    this.state={
      input:null,
    }
    this.socket = this.props.socket;
    this.submit =this.submit.bind(this);
    this.navigation = this.props.navigation;
  }
  submit(){
    const userAction={
      action:'forgot_username',
      email:this.state.input
    };
    this.socket.send(JSON.stringify(userAction));
    this.navigation.navigate('Login',{socket:this.socket});
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'white',padding:'7.5%'}}>
      <View style={{height:'20%',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:2,borderBottomWidth:1,borderColor:'rgb(240,240,240)'}}>
        <Image source={{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:'30%',height:'100%'}}/>
        <Text style={{width:'70%',fontSize:15}}>Fill in your email and we will send you an email with your username!</Text>
      </View>
      <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,marginTop:'10%',padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
        placeholder="Email"
        onChangeText={(text) => this.setState({input:text})}
      />
      <TouchableOpacity
        style={{flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgb(240,240,240)',borderRadius:10,height:'12%',width:'100%',minHeight:50}}
        onPress={this.submit}
        >
        <View style={{width:'100%',justifyContent:'center',height:'50%'}}><Text style={{fontSize:15,textAlign:'center',width:'100%'}}>Submit</Text></View>
      </TouchableOpacity>
    </View>
  );
  }
}

class ActivateAccount extends Component{
  constructor(props){
    super(props);
    this.state={
      input:null,
    }
    this.socket = this.props.socket;
    this.submit =this.submit.bind(this);
    this.navigation = this.props.navigation;
  }
  submit(){
    const userAction={
      action:'activate_account',
      code:this.state.input
    };
    this.socket.send(JSON.stringify(userAction));
    this.navigation.navigate('Login',{socket:this.socket});
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'white',padding:'7.5%'}}>
        <View style={{height:'20%',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:2,borderBottomWidth:1,borderColor:'rgb(240,240,240)'}}>
          <Image source={{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:'30%',height:'100%'}}/>
          <Text style={{width:'70%',fontSize:15}}>Please fill in the 4 digit number that has been sent to you by mail</Text>
        </View>
        <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,marginTop:'10%',padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
          placeholder="Code"
          keyboardType='numeric'
          onChangeText={(text) => this.setState({input:text})}
        />
        <TouchableOpacity
          style={{flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgb(240,240,240)',borderRadius:10,height:'12%',width:'100%',minHeight:50}}
          onPress = {this.submit}
          >

          <View style={{width:'100%',justifyContent:'center',height:'50%'}}><Text style={{fontSize:15,textAlign:'center',width:'100%'}}>Activate Account</Text></View>
        </TouchableOpacity>
      </View>
  );
  }
}

class ActivateResetPassword extends Component{
  constructor(props){
    super(props);
    this.state={
      password:null,
      confirm_password:null,
      code:null,
      username:null,
    }
    this.socket = this.props.socket;
    this.submit =this.submit.bind(this);
    this.navigation = this.props.navigation;
  }
  submit(){
    if(this.state.password !== null && this.state.username !== null && this.state.code !== null && this.state.password == this.state.confirm_password)
    {
      const CryptoJS = require("crypto-js");
      const hash = CryptoJS.HmacSHA256(this.state.username,this.state.password);
      const pass = CryptoJS.enc.Base64.stringify(hash);

      const userAction={
        action:'change_password',
        code:this.state.code,
        password:pass
      };
      this.socket.send(JSON.stringify(userAction));
      this.navigation.navigate('Login',{socket:this.socket});
    }
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'white',padding:'7.5%'}}>
      <View style={{height:'20%',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:2,borderBottomWidth:1,borderColor:'rgb(240,240,240)'}}>
        <Image source={{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:'30%',height:'100%'}}/>
        <Text style={{width:'70%',fontSize:15}}>Please fill in the 4 digit number that has been sent to you by mail</Text>
      </View>
      <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,marginTop:'10%',padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
        placeholder="username"
        secureTextEntry = {true}
        onChangeText={(text) => this.setState({username:text})}
      />
      <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
        placeholder="new password"
        secureTextEntry = {true}
        onChangeText={(text) => this.setState({password:text})}
      />
      <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
        placeholder="confirm new password"
        secureTextEntry = {true}
        onChangeText={(text) => this.setState({confirm_password:text})}
      />
      <TextInput style={{borderWidth:1,borderColor:'rgb(240,240,240)',fontSize:15,borderRadius:10,padding:'5%',height:'12%',minHeight:50,marginBottom:'5%'}}
        placeholder="Code"
        keyboardType='numeric'
        onChangeText={(text) => this.setState({code:text})}
      />
      <TouchableOpacity
        style={{flexDirection:'column',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgb(240,240,240)',borderRadius:10,height:'12%',width:'100%',minHeight:50}}
        onPress={this.submit}
      >
        <View style={{width:'100%',justifyContent:'center',height:'50%'}}><Text style={{fontSize:15,textAlign:'center',width:'100%'}}>Reset password</Text></View>
      </TouchableOpacity>
    </View>
  );
  }
}
