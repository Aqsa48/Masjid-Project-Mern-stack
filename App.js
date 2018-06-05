
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator,createTabNavigator} from 'react-navigation'
import Login from './components/screen/login';
import Signup from './components/screen/signup';
import Splash from './components/screen/splash';
//import FirstScreen from './components/screen/fs';
const TabApp=createTabNavigator({
   
   Signup:{screen:Signup},
   
 }); 


const StackApp=createStackNavigator({
  
  Splash: {screen : Splash}, 
  TabApp:{screen:TabApp},
  Login:{screen:Login },
  Signup:{screen:Signup },
 

 
}); 



export default class App extends React.Component {
constructor(props){
super(props);
}
  render() {
    return (
    <StackApp/>
    );
  }
}
