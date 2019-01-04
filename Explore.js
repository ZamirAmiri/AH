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
      data:[{key:'h'},{key:'sh'},{key:'project'},{key:'project'},{key:'project'}]
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.data}
          style={{flex:1,backgroundColor:'rbg(150,150,150)'}}
          contentContainerStyle={{width:'100%',padding:0}}
          renderItem={({item}) => {if(item.key == 'h'){
              return(<Header/>);
            }else if(item.key == 'sh'){
              return(<Seccond_Header/>);
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
              data={[{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'}]}
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
        <Text style={{fontSize:12}}>Articles</Text>
        <Text style={{fontSize:25,fontWeight:'500',color:'black'}}>News</Text>
      </View>
    );
  }
}

class Tile extends Component{
  render(){
    return(
        <View style={{width:'90%',height:325,marginLeft:'5%',marginRight:'5%',marginBottom:'5%',borderRadius:15,backgroundColor:'white',overflow:'hidden',borderColor:'rgb(250,250,250)',elevation:5}}>
          <ImageBackground
            source = {{uri:'https://us.whales.org/sites/default/files/styles/large_carousel/public/species/humpback_whale_megaptera_novaeangliae_15_feb-10-11049.jpg?itok=vHlZOW2L'}}
            imageStyle={{width:'100%',height:'100%'}}
            style={{width:'100%',height:'100%',justifyContent:'flex-end'}}>
              <View style={{padding:'5%',width:'100%',height:'20%',justifyContent:'center'}}>
                <Text style={{fontSize:10,fontWeight:'500'}}>#automation#desktop</Text>
                <Text style={{fontSize:20,color:'white',fontWeight:'800'}}>New Feature</Text>
              </View>
              <View style={{width:'100%',height:'15%',backgroundColor:'rgba(255,255,255,0.5)',justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'http://download.seaicons.com/icons/graphicloads/100-flat-2/256/thumbs-up-icon.png'}} style={{width:40,height:40}}/>
              </View>
          </ImageBackground>
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
        style={{width:'100%',height:'100%'}}
        >
      </LinearGradient>
      </View>
      )
  }
}
