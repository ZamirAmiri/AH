/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput,AsyncStorage,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WebsocketController from './WebsocketController';
let controller = new WebsocketController();
var socket = controller.ws;


export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[{key:'h'},{key:'sh',small:'Articles',large:'News'}],
      people_you_might_know:null
    }
    this.getNewPosts = this.getNewPosts.bind(this);
    this.getTrendingProjects = this.getTrendingProjects.bind(this);
    this.getPeopleYouMightKnow = this.getPeopleYouMightKnow.bind(this);
  }
  componentDidMount(){
    this.getNewPosts();
    this.getTrendingProjects();
    this.getPeopleYouMightKnow();
  }

  async getPeopleYouMightKnow(){
    const json = await AsyncStorage.getItem('people_you_might_know');
    const dt = JSON.parse(json);
    var data = new Array();
    for(var i = 0;i<dt.messages.length;i++){
        dt.messages[i].key = 't';
        data.push(dt.messages[i]);
    }
    this.setState({people_you_might_know:data});
  }

  async getTrendingProjects(){
    const json = await AsyncStorage.getItem('trending_projects');
    const dt = JSON.parse(json);
    var data = this.state.data;
    for(var i = 0;i<dt.messages.length;i++){
        dt.messages[i].key = 't';
        data.push(dt.messages[i]);
    }
    this.setState({data:data});
  }
  async getNewPosts(){
    const json = await AsyncStorage.getItem('new_posts');
    const dt = JSON.parse(json);
    var data = this.state.data;
    for(var i = 0;i<dt.messages.length;i++){
        dt.messages[i].key = 'p';
        data.push(dt.messages[i]);
    }
    data.push({key:'sh',small:'People helping',large:'Trending'});
    this.setState({data:data});
  }


  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.data}
          style={{flex:1,backgroundColor:'rbg(150,150,150)'}}
          contentContainerStyle={{width:'100%',padding:0}}
          renderItem={({item}) => {if(item.key == 'h'){
              return(<Header people_you_might_know={this.state.people_you_might_know}/>);
            }else if(item.key == 'sh'){
              return(<Seccond_Header small={item.small} large={item.large}/>);
            }else if (item.key == 'p'){
                return(<Post title = {item.title} hashtags={item.hashtags}/>);
              }else{
                return(<Tile username = {item.username} helpcoins= {item.helpcoins} goal={item.goal} creationdate = {item.creationdate} projectname={item.projectname} foundationname={item.foundationname} thos={this}/>);
              }
              }
            }
        />
      </View>
    );
  }
}


class Header extends Component{
  render(){
    return(
        <View style={{width:'100%',height:300,}}>
          <View style={{height:'15%',width:'100%'}}></View>
          <View style={{width:'100%',height:'15%',justifyContent:'center',paddingLeft:'5%',paddingRight:'5%'}}>
            <Text style={{fontSize:30,fontWeight:'400',color:'black'}}>Explore</Text>
          </View>
          <ProgressBar height='1%'/>
          <View style={{padding:'5%',width:'100%',height:'27%'}}>
            <TextInput style={{width:'100%',height:'100%',textAlign:'center',fontWeight:'400',backgroundColor:'rgb(250,250,250)',borderRadius:5}}
              placeholder='search'
            />
          </View>
          <View style={{width:'100%',height:'15%',justifyContent:'center',paddingLeft:'5%',paddingRight:'5%'}}>
            <Text style={{color:'black',fontSize:15,fontWeight:'400'}}>People you might know..</Text>
          </View>
          <View style={{width:'100%',height:'25%'}}>
            <FlatList
              style={{width:'100%',height:'100%',paddingLeft:'5%',paddingRight:'5%'}}
              data={this.props.people_you_might_know}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>{
                return(
                  <View style={{height:'100%',width:85}}>
                    <Image source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}} style={{width:75,height:'100%',borderRadius:500}}/>
                  </View>
                );
              }}
            />
          </View>
        </View>
      );
  }
}

class Seccond_Header extends Component{
  render(){
    return(
      <View style={{width:'100%',height:95,justifyContent:'center',paddingLeft:'5%',paddingRight:'5%'}}>
        <Text style={{fontSize:12}}>{this.props.small}</Text>
        <Text style={{fontSize:25,fontWeight:'500',color:'black'}}>{this.props.large}</Text>
      </View>
    );
  }
}

class Post extends Component{
  render(){
    return(
        <View style={{width:'90%',height:325,marginLeft:'5%',marginRight:'5%',marginBottom:'5%',borderRadius:15,backgroundColor:'white',overflow:'hidden',borderColor:'rgb(250,250,250)',elevation:5}}>
          <ImageBackground
            source = {{uri:'https://us.whales.org/sites/default/files/styles/large_carousel/public/species/humpback_whale_megaptera_novaeangliae_15_feb-10-11049.jpg?itok=vHlZOW2L'}}
            imageStyle={{width:'100%',height:'100%'}}
            style={{width:'100%',height:'100%',justifyContent:'flex-end'}}>
              <View style={{padding:'5%',width:'100%',height:'20%',justifyContent:'center'}}>
                <Text style={{fontSize:10,fontWeight:'500'}}>{this.props.hashtags}</Text>
                <Text style={{fontSize:20,color:'white',fontWeight:'800'}}>{this.props.title}</Text>
              </View>
              <View style={{width:'100%',height:'15%',backgroundColor:'rgba(255,255,255,0.5)',justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'http://download.seaicons.com/icons/graphicloads/100-flat-2/256/thumbs-up-icon.png'}} style={{width:40,height:40}}/>
              </View>
          </ImageBackground>
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
      currentHC: this.props.helpcoins,
    }
    this.calculateUploadTime= this.calculateUploadTime.bind(this);
    this.donate = this.donate.bind(this);
    this.setSuperState = this.props.superState;
    this.super = this.props.thos;
  }
  componentDidMount(){
    this.calculateUploadTime();
    var int = parseInt(this.state.currentHC);
    this.setState({currentHC:int});
  }

  async donate(username,coins){
      var helpcoins = await AsyncStorage.getItem('helpcoins');
      helpcoins = parseInt(helpcoins);
      if(helpcoins){
        const userAction = {
          action:'donate',
          trending:true,
          username:this.state.username,
          coins:1
        };
        helpcoins -= 1;
        socket.send(JSON.stringify(userAction));
        this.super.setState({helpcoins:helpcoins});
        helpcoins = helpcoins.toString();
        await AsyncStorage.setItem('helpcoins',helpcoins);
        this.setState({currentHC:this.state.currentHC + 1});
      }else{
        Alert.alert('You have no more coins to spend');
      }
  }

  calculateUploadTime(){
    const date = this.state.creationdate;
    const arr = date.split(' ');
    const dmy = arr[0].split('-');
    const hms = arr[1].split(':');
    const today = new Date();
    var creationTime  = new Date(dmy[0],dmy[1]-1,dmy[2],hms[0],hms[1],hms[2]).getTime()/1000;
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
            <View style={{padding:'5%',width:'100%'}}><Text style={{fontSize:20,color:'white',fontWeight:'800'}}>{this.props.projectname}</Text></View>
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
                <Text style={{fontWeight:'700',fontSize:12}}>{this.state.currentHC}/{this.props.goal}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ProgressBar height='4%' goal={this.props.goal} current={this.state.currentHC}/>
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
    return(
      <View style={{width:'50%',height:this.state.height,borderRadius:200,overflow:'hidden',paddingLeft:'5%'}}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['rgb(255,180,0)', 'rgb(255,0,0)']}
        style={{width:'100%',height:'100%',borderRadius:200}}
        >
      </LinearGradient>
      </View>
      )
  }
}
