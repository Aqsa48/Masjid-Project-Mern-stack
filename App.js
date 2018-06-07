
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator,createTabNavigator} from 'react-navigation'
import Login from './components/screen/login';
import Signup from './components/screen/signup';
import Imam from './components/screen/Imam';
import dashboard from './components/screen/dashboard';
import Prayers from './components/screen/prayers';
import map from './components/screen/map';
//import FNM from './components/screen/FNM';
const TabApp=createTabNavigator({
   Signup:{screen:Signup},
    }); 
const StackApp=createStackNavigator({
  
  dashboard: {screen : dashboard},
  Imam: {screen : Imam}, 
  //FNM: {screen: FNM},
  //TabApp:{screen:TabApp},
  Login:{screen:Login },
  Signup:{screen:Signup },
  Prayers:{screen:Prayers},
  map: { screen : map },
  
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
