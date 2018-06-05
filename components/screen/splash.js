import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
export default class App extends Component {
    constructor(props){
super(props);
this.hT=this.hT.bind(this);
this.hT2=this.hT2.bind(this);    
  }
 hT(){
   this.props.navigation.navigate('Signup');
  this.hT2=this.hT2.bind(this);
  }
 hT2(){
   this.props.navigation.navigate('Login');
   this.hT2=this.hT2.bind(this);

  }
  render() {
    return (
     <View style={styles.container}>
      <Image
          style={{
    
    height:100,
    width:100,
          }}
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/mosque-1/800/mosque-2-256.png'}}  />
      <TouchableOpacity
      style = {styles.txt}
      onPress={this.hT}
      ><Text>Signup
      </Text></TouchableOpacity>
   <TouchableOpacity
      style = {{
                 justifyContent: 'center',
               alignItems: 'center',
     height : 30,
      width : 200,
      margin : 5,
       marginTop : 20,
        backgroundColor : 'orange',
      }}
      onPress={this.hT2}
      ><Text>Login
      </Text></TouchableOpacity>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: 'gray',
  },
    txt :{
           justifyContent: 'center',
               alignItems: 'center',
     height : 30,
      width : 200,
      margin : 5,
       marginTop : 200,
       backgroundColor:'orange',
   },
 
});
