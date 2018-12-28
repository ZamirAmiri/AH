/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';



export default class App extends Component {
  constructor(props){
    super(props);
    this.navigation = this.props.navigation;
    this.socket = new WebSocket("ws://192.168.2.7:8080/AddingHelp/actions");
  }
  static navigationOptions = {
    title: 'App' ,
  };

  componentDidMount(){
      this.navigation.navigate("Login",{socket:this.socket});
  };
  render() {
    return (
      <View>
      </View>
    );
  }
}
