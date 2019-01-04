/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ImageBackground,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {navigationOptions} from 'react-navigation';



export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[{key:'header'},{key:'project'},{key:'project'},{key:'project'}]
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.data}
          style={{flex:1,backgroundColor:'rbg(150,150,150)'}}
          contentContainerStyle={{width:'100%'}}
          renderItem={({item}) => {if(item.key == 'header'){
              return(<Header/>);
              }else{
                return(<Tile/>);
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
        <View style={{width:'100%',height:250}}>
          <ImageBackground source={{uri:'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}} style={{justifyContent:'space-between',width:'100%',height:'97%'}} imageStyle={{width:'100%',height:'100%'}}>
            <View style={{width:'100%',height:'20%',backgroundColor:'rgba(0,0,0,0.4)',flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:'2.5%'}}>
              <TouchableOpacity style={{width:'20%',height:'100%'}}><Image source={{uri:'https://img.icons8.com/cotton/2x/like.png'}} style={{width:'100%',height:'100%'}}/></TouchableOpacity>
              <Text style={{width:'55%',textAlign:'center',color:'white',fontSize:20}}>addinghelp</Text>
              <View style={{width:'20%',height:'100%',alignItems:'center',flexDirection:'row'}}><Text style={{width:'50%',textAlign:'right',fontSize:18,color:'white'}}>231</Text><Image source={{uri:'https://img.icons8.com/cotton/2x/like.png'}} style={{width:'50%',height:'100%'}}></Image></View>
            </View>
            <View style={{width:'100%',padding:'5%'}}>
              <Text style={{fontSize:22,color:'white'}}>Trees for hire</Text>
              <Text style={{fontSize:17,color:'white'}}>5/40</Text>
            </View>
          </ImageBackground>
          <ProgressBar height='3%'/>
        </View>
      );
  }
}

class Tile extends Component{
  render(){
    return(
        <View style={{width:'90%',height:280,margin:'5%',borderRadius:15,backgroundColor:'white',overflow:'hidden',borderColor:'rgb(250,250,250)',elevation:5}}>
          <ImageBackground
            source = {{uri:'https://us.whales.org/sites/default/files/styles/large_carousel/public/species/humpback_whale_megaptera_novaeangliae_15_feb-10-11049.jpg?itok=vHlZOW2L'}}
            imageStyle={{width:'100%',height:'100%'}}
            style={{width:'100%',height:'75%',justifyContent:'space-between'}}>
            <View style={{width:'100%',height:'10%',alignItems:'flex-end',padding:'5%'}}><Image style={{width:'15%',height:'100%',backgroundColor:'white'}}/></View>
            <View style={{padding:'5%',width:'100%'}}><Text style={{fontSize:20,color:'white',fontWeight:'800'}}>Kill them whales</Text></View>
          </ImageBackground>
          <View style={{width:'100%',height:'21%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'55%',height:'100%',padding:1,flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}
                style={{width:'25%',height:'100%',borderRadius:500,resizeMode:'center'}}
              />
              <View style={{width:'70%',height:'100%',justifyContent:'center'}}>
                <Text style={{fontWeight:'700',fontSize:12}}>shairamiri</Text>
                <Text style={{color:'rgb(170,170,170)',fontSize:8}}>10 hours ago</Text>
              </View>
            </View>
            <View style={{width:'35%',height:'100%',flexDirection:'row',justifyContent:'space-around'}}>
            <Image source={{uri:'https://img.icons8.com/cotton/2x/like.png'}}
              style={{width:'35%',height:'100%',borderRadius:500,resizeMode:'center'}}
            />
            <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
              <Text style={{fontWeight:'700',fontSize:12}}>123/250</Text>
            </View>
            </View>
          </View>
          <ProgressBar height='4%'/>
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
        style={{width:'20%',height:'100%'}}
        >
      </LinearGradient>
      </View>
      )
  }
}
