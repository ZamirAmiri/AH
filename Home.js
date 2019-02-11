/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,AsyncStorage,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {navigationOptions} from 'react-navigation';
import WebsocketController from './WebsocketController';
let controller = new WebsocketController();
var socket = controller.ws;



export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[],
      helpcoins:0,
      change:global.refresh,
    }
    this.getProjectData = this.getProjectData.bind(this);
    this.navigation = this.props.navigation;

  }
  componentDidMount(){
    this.getProjectData();
  }


  async getProjectData(){
    var json = await AsyncStorage.getItem('openprojects');
    const username = await AsyncStorage.getItem('username');
    global.username = username;
    const dt = JSON.parse(json);
    var data= new Array();
    data[0] = 0;
    for(var i=0; i<dt.messages.length;i++){
      if(dt.messages[i].username == username){
        dt.messages[i].key = 'header';
        data[0] = dt.messages[i];
      }else{
        dt.messages[i].key = 'project';
        data.push(dt.messages[i]);
      }
      dt.messages[i].helpcoins = parseInt(dt.messages[i].helpcoins);
    }
    this.setState({data:data});
  }


  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.data}
          style={{flex:1,backgroundColor:'rbg(150,150,150)'}}
          contentContainerStyle={{width:'100%'}}
          renderItem={({item}) => {if(item.key == 'header'){
            return(<Header username = {item.username} helpcoins= {item.helpcoins}  goal={item.goal} creationdate = {item.creationdate} projectname={item.projectname} foundationname={item.foundationname}/>);
          }else{
            return(<Tile username = {item.username} helpcoins= {item.helpcoins} goal={item.goal} creationdate = {item.creationdate} projectname={item.projectname} foundationname={item.foundationname} thos={this}/>);
          }}}
        />
      </View>
    );
  }
}

class Header extends Component{
  render(){
    const progress = ((this.props.helpcoins / this.props.goal) * 100).toString().concat('%');
    return(
        <View style={{width:'100%',height:250}}>
          <ImageBackground source={{uri:'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}} style={{justifyContent:'space-between',width:'100%',height:'97%'}} imageStyle={{width:'100%',height:'100%'}}>
            <View style={{width:'100%',height:'20%',backgroundColor:'rgba(0,0,0,0.4)',flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:'2.5%'}}>
              <TouchableOpacity style={{width:'20%',height:'100%'}}><Image source={{uri:'https://img.icons8.com/cotton/2x/like.png'}} style={{width:'100%',height:'100%'}}/></TouchableOpacity>
              <Text style={{width:'55%',textAlign:'center',color:'white',fontSize:20}}>addinghelp</Text>
              <View style={{width:'20%',height:'100%',alignItems:'center',flexDirection:'row'}}>
                <Text style={{width:'50%',textAlign:'right',fontSize:18,color:'white'}}>
                  {global.helpcoins}
                </Text>
                <Image source={{uri:'https://img.icons8.com/cotton/2x/like.png'}} style={{width:'50%',height:'100%'}}/>
              </View>
            </View>
            <View style={{width:'100%',padding:'5%'}}>
              <Text style={{fontSize:22,color:'white'}}>{this.props.projectname}</Text>
              <Text style={{fontSize:17,color:'white'}}>{this.props.helpcoins}/{this.props.goal}</Text>
            </View>
          </ImageBackground>
          <ProgressBar height='3%' width = {progress}/>
        </View>
      );
  }
}

class Tile extends Component{
  constructor(props){
    super(props);
    this.state={
      uploadTime:'unknown',
      creationdate : this.props.creationdate,
      relativeCreationTime:null,
      unit:null,
      username:this.props.username,
      helpcoins: this.props.helpcoins,
      goal: this.props.goal,
    }
    this.calculateUploadTime= this.calculateUploadTime.bind(this);
    this.donate = this.donate.bind(this);
    this.setSuperState = this.props.superState;
    this.super = this.props.thos;
  }
  componentDidMount(){
    this.calculateUploadTime();
  }

  async donate(){
      if(global.helpcoins - 1 >= 0 &&  this.state.helpcoins < this.state.goal){
        const userAction = {
          action:'donate',
          username:this.state.username,
          trending:false,
          coins:1
        };
        var wallet = global.helpcoins;
        wallet = wallet - 1;
        global.helpcoins = wallet;
        socket.send(JSON.stringify(userAction));
        //this.super.setState({helpcoins:this.state.helpcoins + 1});
        this.setState({helpcoins:this.state.helpcoins + 1});
        this.super.forceUpdate();
      }else if(this.state.helpcoins >= this.state.goal){
        Alert.alert('This project does not require more funding');
      }else {
        Alert.alert('You have no more coins to spend');
      }
  }

  calculateUploadTime(){
    const date = this.state.creationdate;
    const arr = date.split(' ');
    const dmy = arr[0].split('-');
    const hms = arr[1].split(':');
    const today = new Date();
    var creationTime    = new Date(dmy[0],dmy[1]-1,dmy[2],hms[0],hms[1],hms[2]).getTime()/1000;
    const currentTime   = today.getTime()/1000;
    var relativeCreationTime = currentTime - creationTime;
    //Alert.alert(today.getTime().toString() + '\n' + new Date(2019,1,31,16,0,58).getTime() + '\n' + currentTime.toString() + '\n' + creationTime.toString())
    var flag = '';
    const dayInSecconds = 24*3600;
    const yearinSecconds  = 365*dayInSecconds;
    const monthInSecconds = yearinSecconds/12;
    if(relativeCreationTime >= yearinSecconds){
      flag = 'years';
      relativeCreationTime /= yearinSecconds;
    }else if(relativeCreationTime >= monthInSecconds){
      flag = 'months';
      relativeCreationTime /= monthInSecconds;
    }else if(relativeCreationTime >= dayInSecconds){
      flag = 'days';
      relativeCreationTime /= dayInSecconds;
    }else if(relativeCreationTime >= 3600){
      flag = 'hours';
      relativeCreationTime /= 3600;
    }else if(relativeCreationTime >= 60){
      flag = 'minutes';
      relativeCreationTime /= 60;
    }else{
      flag = 'seconds';
    }
    var relativeCreationTime = Math.round(relativeCreationTime*10)/10;
    this.setState({relativeCreationTime:relativeCreationTime,unit:flag});
  }
  render(){
    return(
        <View style={{width:'90%',height:280,margin:'5%',borderRadius:15,backgroundColor:'white',overflow:'hidden',borderColor:'rgb(250,250,250)',elevation:5}}>
          <ImageBackground
            source = {{uri:'https://us.whales.org/sites/default/files/styles/large_carousel/public/species/humpback_whale_megaptera_novaeangliae_15_feb-10-11049.jpg?itok=vHlZOW2L'}}
            imageStyle={{width:'100%',height:'100%'}}
            style={{width:'100%',height:'75%',justifyContent:'space-between'}}>
            <View style={{width:'100%',height:'10%',alignItems:'flex-end',padding:'5%'}}><Image style={{width:'15%',height:'100%',backgroundColor:'white'}}/></View>
            <View style={{padding:'5%',width:'100%'}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'800'}}>
                {this.props.projectname}
              </Text>
            </View>
          </ImageBackground>
          <View style={{width:'100%',height:'21%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'55%',height:'100%',padding:1,flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}
                style={{width:'25%',height:'100%',borderRadius:500,resizeMode:'center'}}
              />
              <View style={{width:'70%',height:'100%',justifyContent:'center'}}>
                <Text style={{fontWeight:'700',fontSize:12}}>{this.props.username}</Text>
                <Text style={{color:'rgb(170,170,170)',fontSize:8}}>{this.state.relativeCreationTime} {this.state.unit} ago</Text>
              </View>
            </View>
            <TouchableOpacity style={{width:'35%',height:'100%',flexDirection:'row',justifyContent:'space-around'}} onPress={this.donate}>
              <Image source={{uri:'https://img.icons8.com/cotton/2x/like.png'}}
                style={{width:'35%',height:'100%',borderRadius:500,resizeMode:'center'}}
              />
              <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                <Text style={{fontWeight:'700',fontSize:12}}>{this.state.helpcoins}/{this.props.goal}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ProgressBar height='4%' goal={this.props.goal} current={this.state.helpcoins}/>
        </View>
      );
  }
}

class ProgressBar extends Component{
  constructor(props){
    super(props);
    this.state={
      height:this.props.height,
    }
  }
  render(){
    const progress = ((this.props.current / this.props.goal) * 100).toString().concat('%');
    return(
      <View style={{width:'100%',height:this.state.height}}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['rgba(255,180,0,0.5)', 'rgba(255,0,0,0.5)']}
        style={{width:'100%',height:'100%',position:'absolute'}}
        >
      </LinearGradient>
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['rgb(255,180,0)', 'rgb(255,0,0)']}
        style={{width:progress,height:'100%'}}
        >
      </LinearGradient>
      </View>
      )
  }
}
