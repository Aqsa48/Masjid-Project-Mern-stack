import React from 'react';
import {View, StyleSheet,Button,Image, Text, ScrollView,TouchableOpacity, TextInput } from 'react-native';
 
export default class Sign extends React.Component {
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

   title="Sign up"
  color="orange"/>
   <Image
          style={{
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'http://www.yumpabar.co.uk/images/srv/page-myaccount-associated-pages/My%20Account/icon-user.png'}}  />


<TextInput
    style =
    {styles.txtf}
placeholder ="user name"
>
</TextInput>


<TextInput
   style =
     {styles.txtf}
placeholder ="E-Mail"
>
</TextInput>
<TextInput
   style =
     {styles.txtf}
placeholder ="Password"
>
</TextInput><TextInput
   style =
 {styles.txtf}
placeholder ="Retype Password"
>
</TextInput>

<TouchableOpacity

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
