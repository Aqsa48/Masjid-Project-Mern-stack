import React from 'react';
import {View, StyleSheet,Image, Text, ScrollView,TouchableOpacity,TextInput,Button, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
export default class Login extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      user:'',
      pass:''
    }
this.handleTouch=this.handleTouch.bind(this);
    
  }
  handleTouch(){
  let a = this.props.navigation;

    axios.post('https://namazapi.herokuapp.com/login', {
     username: this.state.user,
     password: this.state.pass
     
   })
   .then(function (response) {
     if(response.data.path==='/timing') {
       //alert(JSON.stringify(response));
      //alert("Hello World");
      a.navigate('Prayers');
      }
//      if(response.data.auth===true){
//        alert('login ')
//      }
//  else{
//    alert('not login');
//  }

   })
   .catch(function (error) {
     alert(error);

  // alert(JSON.stringify(this.state));
  

  //this.props.navigation.navigate('TabApp');
})
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
<Button
   title="Login from"
  color="orange"/>

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

 style = {styles.txtf} 
placeholder ="Password"
secureTextEntry
onChangeText={(e)=>{
  this.setState({pass:e})
}}
>
</TextInput>

<TouchableOpacity
 onPress={this.handleTouch}
 style={{
   backgroundColor:'orange',
width :100,
height : 50,
    alignItems: 'center',
    justifyContent: 'center',
 }}

>
<Text
style = {{
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',}}
>
Log in 
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
      borderRadius: 4,
      borderWidth: .5,
      borderColor: 'orange',
      margin : 20,
     
    
  },

});
