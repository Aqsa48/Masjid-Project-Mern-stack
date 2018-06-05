import React from 'react';
import {View, StyleSheet,Image, Text, ScrollView,TouchableOpacity,TextInput,Button } from 'react-native';
 
export default class Login extends React.Component {
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
placeholder ="user name"
>
</TextInput>
<TextInput
 style = {styles.txtf} 
placeholder ="Password"
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
Log in 
</Text>
</TouchableOpacity>
</View>

      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
      txtf :{
     height : 30,
      width : 200,
      margin : 20,
      backgroundColor : 'gray'
    
  },

});
