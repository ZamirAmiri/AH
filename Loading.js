/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,AsyncStorage} from 'react-native';



export default class Loading extends Component {
  constructor(props){
    super(props);
    this.state={
      progress:0,
      pg:0,
    }
    this.navigation = this.props.navigation;
    this.socket = this.navigation.getParam('socket');
    this.socket.onmessage = async (event) => {
      var server = JSON.parse(event.data);
      var pg = 100/6;
      var progress = this.state.pg;
      var flag = false;
      var string = '';
      var msg = null;
      if (server.action === "update") {
        switch (server.type) {
          case 'personal':
          flag = true;
          msg = 'getting notifications';
          this.getNotifications();
          break;
          case 'notifications':
          flag = true;
          msg = 'getting your projects';
          this.getProjectsOfUser();
          break;
          case 'projects_user':
          flag = true;
          msg = 'getting your followers';
          this.getHelpers();
          break;
          case 'helpers':
          msg = 'getting your idols';
          flag = true;
          this.getHelpees();
          break;
          case 'helpees':
          msg = 'getting other open projects';
          flag = 1;
          this.getOpenProject_other();
          break;
          case 'openproject_other':
          flag = true;
          msg = 'Done';
          this.finishLoading();
          break;
        }
        if(flag){
          progress = progress + pg;
          string = progress.toString().concat('%');
          this.setState({msg:msg,progress:string,pg:progress});
          await AsyncStorage.setItem(server.type,JSON.stringify(server));
        }
      }
    }
    //Bind functions here
    this.send = this.send.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    this.getProjectsOfUser = this.getProjectsOfUser.bind(this);
    this.getHelpers = this.getHelpers.bind(this);
    this.getHelpees = this.getHelpees.bind(this);
    this.getOpenProject_other = this.getOpenProject_other.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
  }
  componentDidMount(){
    const userAction={
      action:'update',
      type:'personal'
    };
    this.send(userAction);
  }
  send(action){
    this.socket.send(JSON.stringify(action));
  }
  getNotifications(){
    const userAction={
      action:'update',
      type:'notifications'
    };
    this.send(userAction);
  }
  getProjectsOfUser(){
    const userAction={
      action:'update',
      type:'projects_user'
    };
    this.send(userAction);
  }
  getHelpers(){
    const userAction={
      action:'update',
      type:'helpers'
    };
    this.send(userAction);
  }
  getHelpees(){
    const userAction={
      action:'update',
      type:'helpees'
    };
    this.send(userAction);
  }
  getOpenProject_other(){
    const userAction={
      action:'update',
      type:'openproject_other'
    };
    this.send(userAction);
  }
  finishLoading(){
    this.navigation.navigate('Home',{'socket':this.socket});
  }

  static navigationOptions = {
    title: 'Loading' ,
    header:null,
  };
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgb(90,0,0)',padding:'5%'}}>
        <Image source ={{uri:'https://brandmark.io/logo-rank/random/beats.png'}} style={{width:'60%',height:'40%',borderRadius:200}} resizeMethod='resize' resizeMode='contain'/>
        <ProgressBar progress = {this.state.progress}/>
        <Text style={{fontSize:15,color:'white',padding:'5%'}}>{this.state.msg}</Text>
      </View>
    );
  }
}

class ProgressBar extends Component{
  render(){
    return(
      <View style={{width:'100%',height:4,backgroundColor:'rgba(255,255,255,0.6)',borderRadius:10}}><View style={{position:'absolute',width:this.props.progress,height:4,borderRadius:10,backgroundColor:'white'}}></View></View>
    );
  }
}
