/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[{key:'h'},{key:'sh', small:'Today'},{key:'n'},{key:'n'},{key:'n'},{key:'sh', small:'Yesterday'},{key:'n'},{key:'n'},{key:'n'},{key:'n'},{key:'sh', small:'Yesterday'},{key:'nb'},{key:'nb'},{key:'nb'},{key:'nb'}]
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.data}
          style={{flex:1,backgroundColor:'rbg(150,150,150)'}}
          contentContainerStyle={{width:'100%'}}
          renderItem={({item}) => {if(item.key == 'h'){
              return(<Header/>);
            }else if(item.key == 'sh'){
              return(<Seccond_Header small={item.small}/>);
            }else if (item.key == 'n'){
                return(<Notification/>);
              }else{
                return(<NotificationWithButton/>);
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
            <View style={{justifyContent:'center',width:'50%',height:'100%'}}><Text style={{fontSize:20,color:'black',textAlign:'center'}}>3</Text></View>
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
  render(){
    return(
      <View style={{width:'90%',height:75,marginLeft:'5%',marginRight:'5%',marginTop:'1%',overflow:'hidden',borderColor:'rgb(250,250,250)',flexDirection:'row',borderBottomWidth:2,justifyContent:'center'}}>
        <View style={{width:'20%',height:'83%',justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:'100%',height:'100%',borderRadius:500}} source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}/>
        </View>
        <View style={{width:'75%',height:'100%',justifyContent:'center',paddingLeft:'2.5%'}}>
          <Text><Text style={{fontWeight:'900'}}>shairamiri</Text> has donated 5 helpcoins to your project<Text style={{color:'rgb(240,240,240)',fontWeight:'700'}}> 26m</Text></Text>
        </View>
      </View>
    );
  }
}

class NotificationWithButton extends Component{
  render(){
    return(
      <View style={{width:'90%',height:75,marginLeft:'5%',marginRight:'5%',marginTop:'1%',overflow:'hidden',borderColor:'rgb(250,250,250)',flexDirection:'row',borderBottomWidth:2,justifyContent:'center'}}>
        <View style={{width:'20%',height:'83%',justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:'100%',height:'100%',borderRadius:500}} source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}/>
        </View>
        <View style={{width:'50%',height:'100%',justifyContent:'center',paddingLeft:'2.5%'}}>
          <Text><Text style={{fontWeight:'900'}}>shairamiri</Text> has started helping you<Text style={{color:'rgb(240,240,240)',fontWeight:'700'}}> 26m</Text></Text>
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
