/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput,AsyncStorage,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state={
      data:null,
    }
    this.getNotifications = this.getNotifications.bind(this);
    this.calculateUploadTime = this.calculateUploadTime.bind(this);
  }

  componentDidMount(){
    this.getNotifications();
  }

  async getNotifications(){
    var td = true,yd = true,tw = true,o=true;
    const json = await AsyncStorage.getItem('notifications');
    this.setState({text:json});
    const dt = JSON.parse(json);
    var data = new Array();
    data.push({key:'h',numNotifications:dt.messages.length});
    for(var i = 0;i<dt.messages.length;i++){
      if(dt.messages[i].info.includes('following')){
        dt.messages[i].key = 'nb'
      }else{
        dt.messages[i].key = 'n';
      }
        const obj = this.calculateUploadTime(dt.messages[i].date);
        const time = obj.time;
        const flag = obj.flag;

        if(td && flag != 'd'){
          td = false;
          data.push({key:'sh',small:'Today'});
        }else if(time < 2 && flag == 'd' && yd){
          yd= false;
          data.push({key:'sh',small:'Yesterday'});
        }else if(time < 7 && flag == 'd' && tw){
          tw= false;
          data.push({key:'sh',small:'This week'});
        }else if(time > 7 && flag == 'd' && o){
          o = false;
          data.push({key:'sh',small:'Older'});
        }
        dt.messages[i].date = time.toString().concat(' ' + flag);
        data.push(dt.messages[i]);
    }
    this.setState({data:data});
  }

  calculateUploadTime(date){
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
    if(relativeCreationTime >= dayInSecconds){
      flag = 'd';
      relativeCreationTime /= dayInSecconds;
    }else if(relativeCreationTime >= 3600){
      flag = 'h';
      relativeCreationTime /= 3600;
    }else if(relativeCreationTime >= 60){
      flag = 'm';
      relativeCreationTime /= 60;
    }else{
      flag = 's';
    }
    var relativeCreationTime = Math.round(relativeCreationTime*10)/10;
    return {time:relativeCreationTime,flag:flag};
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.data}
          style={{flex:1,backgroundColor:'rbg(150,150,150)'}}
          contentContainerStyle={{width:'100%'}}
          renderItem={({item}) => {if(item.key == 'h'){
              return(<Header numNotifications={item.numNotifications}/>);
            }else if(item.key == 'sh'){
              return(<Seccond_Header small={item.small}/>);
            }else if (item.key == 'n'){
                return(<Notification date = {item.date} info={item.info}/>);
              }else{
                return(<NotificationWithButton date ={item.date} info={item.info}/>);
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
        <View style={{width:'100%',height:175}}>
          <View style={{height:'30%',width:'100%'}}></View>
          <View style={{width:'100%',height:'25%',justifyContent:'center',paddingLeft:'5%',paddingRight:'5%'}}>
            <Text style={{fontSize:30,fontWeight:'400',color:'black'}}>Activity</Text>
            <View style={{width:'50%',height:3}}><ProgressBar height='100%' width='100%'/></View>
          </View>
          <View style={{width:'50%',height:'45%',justifyContent:'center',flexDirection:'row',alignItems:'flex-end',alignItems:'center',padding:'5%'}}>
            <View style={{width:'50%',height:'100%',backgroundColor:'rgb(200,255,200)',borderRadius:500}}></View>
            <View style={{justifyContent:'center',width:'50%',height:'100%'}}>
              <Text style={{fontSize:20,color:'black',textAlign:'center'}}>{this.props.numNotifications}</Text>
            </View>
          </View>
        </View>
      );
  }
}

class Seccond_Header extends Component{
  render(){
    return(
      <View style={{width:'100%',justifyContent:'center',paddingLeft:'5%',paddingRight:'5%'}}>
        <Text style={{fontSize:25,width:'100%',borderBottomWidth:2,borderColor:'rgb(245,245,245)',color:'black',fontWeight:'400'}}>{this.props.small}</Text>
      </View>
    );
  }
}


class Notification extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      info:this.props.info,
    }
  }
  componentDidMount(){
    var info = this.state.info;
    const arr = info.split('>');
    const fat = arr[0].split('<');
    this.setState({username:fat[1],info:arr[1]});
  }
  render(){
    return(
      <View style={{width:'90%',height:75,marginLeft:'5%',marginRight:'5%',marginTop:'1%',overflow:'hidden',borderColor:'rgb(250,250,250)',flexDirection:'row',borderBottomWidth:2,justifyContent:'center'}}>
        <View style={{width:'20%',height:'83%',justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:'100%',height:'100%',borderRadius:500}} source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}/>
        </View>
        <View style={{width:'75%',height:'100%',justifyContent:'center',paddingLeft:'2.5%'}}>
          <Text><Text style={{fontWeight:'900'}}>{this.state.username}</Text>{this.state.info}<Text style={{color:'rgb(240,240,240)',fontWeight:'700'}}> {this.props.date}</Text></Text>
        </View>
      </View>
    );
  }
}

class NotificationWithButton extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      info:this.props.info,
    }
  }
  componentDidMount(){
    var info = this.state.info;
    const arr = info.split('>');
    const fat = arr[0].split('<');
    this.setState({username:fat[1],info:arr[1]});
  }
  render(){
    return(
      <View style={{width:'90%',height:75,marginLeft:'5%',marginRight:'5%',marginTop:'1%',overflow:'hidden',borderColor:'rgb(250,250,250)',flexDirection:'row',borderBottomWidth:2,justifyContent:'center'}}>
        <View style={{width:'20%',height:'83%',justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:'100%',height:'100%',borderRadius:500}} source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}/>
        </View>
        <View style={{width:'50%',height:'100%',justifyContent:'center',paddingLeft:'2.5%'}}>
          <Text><Text style={{fontWeight:'900'}}>{this.state.username}</Text> {this.state.info}<Text style={{color:'rgb(240,240,240)',fontWeight:'700'}}> {this.props.date}</Text></Text>
        </View>
        <View style={{width:'30%',justifyContent:'center',height:'100%'}}>
        <TouchableOpacity style={{width:'100%',height:'50%'}}>
        <LinearGradient
          start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
          colors={['rgb(255,180,0)', 'rgb(255,0,0)']}
          style={{width:'100%',height:'100%',borderRadius:5,justifyContent:'center'}}
          >
          <Text style={{textAlign:'center',color:'white'}}> follow </Text>
        </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
      );
  }
}

class ProgressBar extends Component{
  constructor(props){
    super(props);
    this.state={
      height:this.props.height,
      width:this.props.width,
    }
  }
  render(){
    return(
      <View style={{width:this.state.width,height:this.state.height,overflow:'hidden'}}>
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
