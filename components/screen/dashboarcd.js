import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Constants } from 'expo';
export default class App extends Component {
  constructor(props){
super(props);
this.handleTouch=this.handleTouch.bind(this);
    
  }
 handleTouch(){
   this.props.navigation.navigate('TabApp');
 }

render() {
    return (
       <View style={styles.container}>

     <TouchableOpacity
 style={{
   margin : 0,
   backgroundColor:'orange',
width :400,
height : 100,
  alignItems: 'center',
    justifyContent: 'center',
 }}>
<Text
  style={{
 fontSize: 30,
    fontWeight: 'bold',
}}>
 SELECT ANY ONE OF THEM
</Text>

</TouchableOpacity>
 <Image
          style={{
             flexGrow:1,
    height:150,
    width:100,
          }}
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/islamic-costume/100/_-48-256.png'}}  />

     <TouchableOpacity
       onPress={this.hT}
style={{
     margin : 30,
   backgroundColor:'orange',
width :200,
height : 50,
  alignItems: 'center',
    justifyContent: 'center',
  
}}>
<Text
  style={{
 fontSize: 30,
    fontWeight: 'bold',
}}>
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
 style={{
       margin : 60,
   backgroundColor:'orange',
width :200,
height : 50,
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
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'gray',
  },


});