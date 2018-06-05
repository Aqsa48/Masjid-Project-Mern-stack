import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text>Go to </Text>
      <TouchableOpacity
      onPress={this.hT}
      ><Text>Signup
      </Text></TouchableOpacity>
     
      <Text>Or</Text>

      <TouchableOpacity onPress={this.hT2}>
      <Text>Login</Text>
      </TouchableOpacity>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },

});
