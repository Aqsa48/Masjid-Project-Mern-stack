import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Constants } from 'expo';
export default class App extends Component {
  constructor(props){
super(props);
this.handleTouch=this.handleTouch.bind(this);
this.TT=this.TT.bind(this);
this.TT2=this.TT2.bind(this);
    
  }
 handleTouch(){
   this.props.navigation.navigate('TabApp');
 }
 TT(){
    this.props.navigation.navigate('Imam');
    
   }
TT2() {
    this.props.navigation.navigate('map');
    
}

render() {
    return (
       <View style={styles.container}>

    
<Text
  style={{
 fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'orange',
    width: 300,
    height: 70,
    textAlign: 'center',
    justifyContent: 'center',
}}>
 SELECT ANY ONE OF THEM
</Text>

 <Image
          style={{
             flexGrow:1,
    height:150,
    width:100,
          }}
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/islamic-costume/100/_-48-256.png'}}  />

     <TouchableOpacity 
       onPress={this.TT}
style={{
     margin : 30,
   backgroundColor:'orange',
width :200,
height : 40,
  alignItems: 'center',
    justifyContent: 'center',
  
}}>
<Text style={{ fontSize: 30, fontWeight: 'bold',}}>
 IMAM
</Text>
</TouchableOpacity>
 <Image
          style={{
             flexGrow:1,
    height:85,
    width:70,
          }}
              source={{uri: 'https://cdn1.iconfinder.com/data/icons/faces-solid-1/48/17-256.png'}}  />
     <TouchableOpacity
     onPress={this.TT2}
 style={{
       margin : 50,
   backgroundColor:'orange',
width :200,
height : 40,
  alignItems: 'center',
    justifyContent: 'center',
   
 }}>
<Text
  style={{
 fontSize: 30,
    fontWeight: 'bold',
}}>
USER
</Text>
</TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
     justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },


});