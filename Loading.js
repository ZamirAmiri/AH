/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,AsyncStorage,Alert} from 'react-native';
import WebsocketController from './WebsocketController';
let controller = new WebsocketController();
var socket = controller.ws;

export default class Loading extends Component {
  constructor(props){
    super(props);
      progress:0,
      this.state={
      pg:0,
    }
    this.navigation = this.props.navigation;
    socket.onmessage = async (event) => {
      var server = JSON.parse(event.data);
      var pg = 100/9;
      var progress = this.state.pg;
      var flag = true;
      var string = '';
      var msg = null;
      if (server.action === "update") {
        switch (server.type) {
          case 'personal':
          msg = 'getting notifications';
          this.getNotifications();
          break;
          case 'notifications':
          msg = 'getting your projects';
          this.getProjectsOfUser();
          break;
          case 'projects_user':
          msg = 'getting your followers';
          this.getHelpers();
          break;
          case 'helpers':
          this.getHelpees();
          msg = 'getting your idols';
          break;
          case 'helpees':
          msg = 'getting other open projects';
          this.getOpenProject_other();
          break;
          case 'openprojects':
          msg = 'getting new posts';
          this.getTrendingProjectAndNewPosts();
          break;
          case 'new_posts':
          msg = 'almost done';
          break;
          case 'trending_projects':
          msg = 'getting people you might know';
          this.getPeopleYouMightKnow();
          break;
          case 'people_you_might_know':
          msg ='done';
          this.finishLoading();
          break;
          default:
          flag = false;
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
    this.getTrendingProjectAndNewPosts = this.getTrendingProjectAndNewPosts.bind(this);
    this.getPeopleYouMightKnow = this.getPeopleYouMightKnow.bind(this);
  }
  componentDidMount(){
    const userAction = {
      action:'update',
      type:'personal'
    };
    this.send(userAction);
  }
  send(action){
    socket.send(JSON.stringify(action));
  }

  getPeopleYouMightKnow(){
    const userAction = {
      action:'update',
      type:'people_you_might_know',
    }
    this.send(userAction);
  }

  getTrendingProjectAndNewPosts(){
    const userAction={
      action:'update',
      type:'explore'
    };
    this.send(userAction);
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
      type:'openproject'
    };
    this.send(userAction);
  }
  async finishLoading(){
    var json = await AsyncStorage.getItem('personal');
    var data = JSON.parse(json);
    global.helpcoins    = data.helpcoins;
    global.username     = data.username;
    data.helpcoins = data.helpcoins.toString();
    data.accumulated = data.accumulated.toString();
    data.followers = data.followers.toString();
    data.following = data.following.toString();
    data.completed_projects = data.completed_projects.toString();
    await AsyncStorage.multiSet([['username',data.username],['birthdate',data.birthdate],['email',data.email],['gender',data.gender],['helpcoins',data.helpcoins],['accumulated',data.accumulated],['followers',data.followers],['following',data.following],['completed_projects',data.completed_projects]]);
    this.navigation.navigate('TabNavigator');
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
