/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,TouchableOpacity,DatePickerAndroid,AsyncStorage,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Register extends Component<Props> {
  static navigationOptions = {
    title: 'Header',
    header:null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:'25%',width:'100%',backgroundColor:'white'}}>
          <View style={{width:'100%',height:'80%',borderBottomWidth:1,height:'80%',borderBottomColor:'rgb(240,240,240)',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Image source = {{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:'20%',height:'90%'}}/>
            <View style={{width:'65%',height:'90%',justifyContent:'center'}}>
              <Text style={{width:'100%'}}>Start supporting project all around the world</Text>
            </View>
          </View>
        </View>
        <Form/>
      </View>
    );
  }
}

class Form extends Component{
  constructor(){
    super();
    this.state = {
      username:null,
      password:null,
      email:null,
      birthdate:'Select your birthdate',
      gender:'M',
      f : 1,
      m: 2,
    }
    this._pickBirthDate = this._pickBirthDate.bind(this);
  }
  async _pickBirthDate(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        this.setState({birthdate:year.toString() +"-"+ month.toString()+"-"+day.toString()});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  render(){
    return(
      <View style={{height:'70%',width:'100%'}}>
        <TextInput
          style={{height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
          placeholder="username"
          onChangeText={(text) => this.setState({username:text})}
        />
        <TextInput
          style={{height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
          placeholder="password"
          secureTextEntry = {true}
          onChangeText={(text) => this.setState({password:text})}
        />
        <TextInput
          style={{height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
          placeholder="email"
          keyboardType ='email-address'
          onChangeText={(text) => this.setState({email:text})}
        />
        <View
          style={{flexDirection:'row',height: '15%',minHeight:50,marginBottom:'5%',overflow:'hidden'}}
        >
        <TouchableOpacity style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',borderWidth:this.state.f,borderColor:'rgb(220,220,220)',borderTopLeftRadius:10,borderBottomLeftRadius:10}}
          onPress={()=>{this.setState({gender:'F',f :2,m:1});}}
        >
          <Text>F</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',borderWidth:this.state.m,borderColor:'rgb(220,220,220)',borderTopRightRadius:10,borderBottomRightRadius:10}}
          onPress={()=>{this.setState({gender:'M',f :1,m:2});}}
        >
          <Text>M</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center',height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
          onPress = {this._pickBirthDate}
        >
        <View style={{height:'100%'}}><Text style={{textAlign:'center',fontSize:20,color:'rgb(100,100,100)'}} >{this.state.birthdate}</Text></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center',height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
        >
        <View style={{height:'100%'}}><Text style={{textAlign:'center',fontSize:20}} >Register</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding:'5%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
