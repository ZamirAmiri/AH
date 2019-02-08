/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,ImageBackground,TouchableOpacity,Image,TextInput,FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[{key:'h'},{key:'stat'},{key:'n'},{key:'n'},{key:'n'},{key:'sh', small:'Yesterday'},{key:'n'},{key:'n'},{key:'n'},{key:'n'}]
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
          <Header/>
          <Statistics/>
          <Impact/>
          <View style={{height:15}}/>
          <View style={{width:'90%',paddingTop:10}}>
            <Text style={{fontSize:20,color:'black'}}>Current Project</Text>
          </View>
          <Project/>
          <View style={{width:'90%',paddingTop:10}}>
            <Text style={{fontSize:20,color:'black'}}>Completed Project</Text>
          </View>
          <Project/>
        </ScrollView>
      </View>
    );
  }
}


class Header extends Component{
  render(){
    return(
        <View style={{width:'100%',height:300,paddingLeft:'5%',paddingRight:'5%'}}>
          <View style={{height:'5%',width:'100%'}}></View>
          <View style={{width:'100%',height:'20%',justifyContent:'center'}}>
            <Text style={{fontSize:30,fontWeight:'400',color:'black'}}>Shair Amiri</Text>
            <View style={{width:'60%',height:3}}><ProgressBar height='100%' width='100%'/></View>
          </View>
          <View style={{width:'100%',height:'50%',justifyContent:'center',alignItems:'flex-end',alignItems:'center',padding:'5%'}}>
            <View style={{width:125,height:125,justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:'100%',height:'100%',borderRadius:500}} source={{uri:'https://media.licdn.com/dms/image/C4E03AQG1IdzY7-PsUA/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=rULLnNcLWVsAZfu1PdKOtTetlf1fQGvhN-sVmP4FhXU'}}/>
            </View>

          </View>
          <View style={{width:'100%',height:'20%',flexDirection:'row',borderBottomWidth:2,borderColor:'rgb(200,200,200)',paddingLeft:'5%',paddingRight:'5%'}}>
            <View style={{width:'28%',height:'100%'}}>
              <Text style={{color:'rgb(200,200,200)',fontSize:12}}>followers</Text>
              <Text style={{color:'black',fontSize:20}}>10k</Text>
            </View>
            <View style={{width:'28%',height:'100%'}}>
              <Text style={{color:'rgb(200,200,200)',fontSize:12}}>following</Text>
              <Text style={{color:'black',fontSize:20}}>12k</Text>
            </View>
            <View style={{width:'44%',height:'100%'}}>
            <TouchableOpacity style={{width:'100%',height:'75%'}}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['rgb(255,180,0)', 'rgb(255,0,0)']}
                style={{width:'100%',height:'100%',borderRadius:10,alignItems:'center',justifyContent:'center'}}
                >
                <Text style={{color:'white',fontSize:15}}> Settings</Text>
              </LinearGradient>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      );
  }
}

class Statistics extends Component{
  render(){
    return(
      <View style={{width:'100%',height:150,paddingLeft:'5%',paddingRight:'5%'}}>
        <Text style={{height:'30%',fontSize:25,width:'100%',borderBottomWidth:2,borderColor:'rgb(245,245,245)',color:'black',fontWeight:'400'}}>Statistics</Text>
        <View style={{height:'70%',width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['rgb(255,180,0)', 'rgb(255,0,0)']}
            style={{width:'49%',height:'80%',borderRadius:10,alignItems:'center',justifyContent:'center',paddingLeft:'5%',flexDirection:'row'}}
            >
              <View style={{width:'50%',height:'80%',justifyContent:'space-between'}}>
                <Text style={{fontSize:13,color:'white'}}>Helpcoins Generated</Text>
                <Text style={{fontSize:25,color:'white'}}>2.5k</Text>
              </View>
              <View style={{width:'50%',height:'80%',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'60%',height:'55%',backgroundColor:'white',borderRadius:500}}/>
              </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['rgb(100,255,100)', 'rgb(0,150,0)']}
            style={{width:'49%',height:'80%',borderRadius:10,alignItems:'center',justifyContent:'center',paddingLeft:'5%',flexDirection:'row'}}
            >
              <View style={{width:'50%',height:'80%',justifyContent:'space-between'}}>
                <Text style={{fontSize:13,color:'white'}}>projects Completed</Text>
                <Text style={{fontSize:25,color:'white'}}>34</Text>
              </View>
              <View style={{width:'50%',height:'80%',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'60%',height:'55%',backgroundColor:'white',borderRadius:500}}/>
              </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

class Impact extends Component{
  render(){
    return(
      <View style={{width:'100%',height:250,paddingLeft:'5%',paddingRight:'5%'}}>
        <Text style={{height:'15%',fontSize:25,width:'100%',borderBottomWidth:2,borderColor:'rgb(245,245,245)',color:'black',fontWeight:'400'}}>Impact</Text>
        <View style={{height:'85%',width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
          <FlatList
            style={{width:'100%',height:'100%'}}
            contentContainerStyle={{padding:0}}
            data={[{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'},{key:'1'}]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>{
              return(
                <View style={{height:'100%',width:250}}>
                  <ImageBackground style={{height:'100%',width:'90%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:10,overflow:'hidden'}}
                    source={{uri:'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}}
                    imageStyle={{width:'100%',height:'100%',padding:0}}
                    >
                      <View style={{justifyContent:'space-between',height:'80%',width:'90%'}}>
                        <View style={{height:'40%',width:'100%',justifyContent:'center'}}>
                          <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Orka watchers</Text>
                        </View>
                        <View style={{width:'100%',height:'30%',flexDirection:'row'}}>
                          <View style={{width:'50%',height:'100%'}}>
                            <Text style={{color:'white',fontSize:14}}>Donated</Text>
                            <Text style={{color:'white',fontSize:30,fontWeight:'900'}}>845</Text>
                          </View>
                          <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <View style={{width:50,height:50,backgroundColor:'white',borderRadius:100}}/>
                          </View>
                        </View>
                      </View>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

class Project extends Component {
  render(){
    return(
        <View style={{width:'90%',height:280,justifyContent:'center'}}>
          <View style={{width:'100%',height:'90%',borderRadius:15,backgroundColor:'white',overflow:'hidden',borderColor:'rgb(250,250,250)',elevation:5}}>
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
