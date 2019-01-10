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
      data:[{key:'h'},{key:'sh', small:'Articles', large :'News'},{key:'p'},{key:'p'},{key:'p'},{key:'sh', small:'People Helping', large:'Trending'},{key:'T'}]
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
              return(<Seccond_Header small={item.small} large={item.large}/>);
            }else if (item.key == 'p'){
                return(<Tile/>);
              }else{
                return(<TrendingProjects/>);
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
        <Text style={{fontSize:12}}>{this.props.small}</Text>
        <Text style={{fontSize:25,fontWeight:'500',color:'black'}}>{this.props.large}</Text>
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

class TrendingProjects extends Component{
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
