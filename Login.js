/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    header: null,
    title: 'Login',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{paddingTop:'5%',height:'25%',width:'100%',backgroundColor:'white'}}>
          <View style={{width:'100%',alignItems:'center',borderBottomWidth:1,height:'80%',borderBottomColor:'rgb(220,220,200)'}}>
            <Image source = {{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:90,height:90,paddingBottom:'5%'}}/>
          </View>
        </View>
        <Form/>
      </View>
    );
  }
}

class Form extends Component{
  render(){
    return(
      <View style={{height:'65%',width:'100%'}}>
        <TextInput
          style={{height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
          placeholder="username"
          onChangeText={(text) => this.setState({username:text})}
        />
        <TextInput
          style={{height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
          placeholder="password"
          onChangeText={(text) => this.setState({password:text})}
        />
        <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center',height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
        >
          <View style={{height:'100%'}}><Text style={{textAlign:'center',fontSize:20}} >Login </Text></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center',height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
        >
          <View style={{height:'100%'}}><Text style={{textAlign:'center',fontSize:20}} >Login with facebook</Text></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center',height: '15%',minHeight:50,borderWidth:1,borderColor:'rgb(220,220,220)',padding:'5%',borderRadius:10,fontSize:15,marginBottom:'5%'}}
        >
        <View style={{height:'100%'}}><Text style={{textAlign:'center',fontSize:20}} >Register</Text></View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
          <TouchableOpacity><Text style={{fontSize:15,color:'rgb(190,190,190)'}}>Forgot password</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{fontSize:15,color:'rgb(190,190,190)'}}>Forgot username</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft:'5%',
    paddingRight:'5%',
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
