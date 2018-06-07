import React from 'react';
import {View, StyleSheet,Button,Image, Text, ScrollView,TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import axios from 'axios'; 
export default class Sign extends React.Component {
  constructor(props){
    super(props);
  this.state={
    user:'',
    email:'',
    pass:'',
    masjidName:'',
    masjidLocation:''
  }
this.handleTouch=this.handleTouch.bind(this);
    
  }
async handleTouch(){
    fetch('https:namazapi.herokuapp.com/signup', {
        method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: this.state.user,
      email:this.state.email,
      password: this.state.pass,
      masjidName:this.state.masjidName,
      masjidLocation:this.state.masjidLocation
    }),
  });
  alert(JSON.stringify(this.state));
//  let responseJson =  response.json();

  //this.props.navigation.navigate('TabApp');
}
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
<View
style={{
width :300,
height : 500,
    backgroundColor: 'white',
        alignItems: 'center',
    justifyContent: 'center',
}}	
>
   <Image
          style={{
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri:'https://cdn0.iconfinder.com/data/icons/mosque-1/800/mosque-2-256.png'}}  />


<TextInput
    style =
    {styles.txtf}
placeholder ="User Name"
onChangeText={(e)=>{
  this.setState({user:e})
}}
>
</TextInput>


<TextInput
   style =
     {styles.txtf}
placeholder ="E-Mail"
onChangeText={(e)=>{
  this.setState({email:e})
}}
>
</TextInput>
<TextInput
   style =
     {styles.txtf}
placeholder ="Password"
secureTextEntry
onChangeText={(e)=>{
  this.setState({pass:e})
}}
>
</TextInput><TextInput
   style =
 {styles.txtf}
placeholder ="Masjid Name"
onChangeText={(e)=>{
  this.setState({masjidName:e})
}}
>
</TextInput>
<TextInput
   style =
 {styles.txtf}
placeholder ="Masjid Location"
onChangeText={(e)=>{
  this.setState({masjidLocation:e})
}}
>
</TextInput>


<TouchableOpacity
 onPress={this.handleTouch}
 style={{
   backgroundColor:'orange',
width :200,
height : 50,
  alignItems: 'center',
    justifyContent: 'center',
 }}

>
<Text
style = {{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',}}
>
Register now
</Text>
</TouchableOpacity>
</View>


</KeyboardAvoidingView>
    
  
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
    txtf :{
     height : 30,
      width : 200,
      margin : 20,
      borderRadius: 4,
      borderWidth: .5,
      borderColor: 'orange',
      backgroundColor : 'white'
    
  },

});
