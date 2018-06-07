import React, { Component } from 'react'; 
import { Text, View, StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native'; 
import { Constants } from 'expo'; 
 
export default class App extends Component { 
  render() { 
    return ( 
      <View style={styles.container}> 
<View> 
<View 
style = { 
  styles.container 
} 
> 
 <Image 
          style={{ 
    height:100, 
    width:100, 
       
          }} 
              source={{uri: 'https://static-s.aa-cdn.net/img/gp/20600003299346/lUVAASJHV_r3OPOLBE8Zk-EwqgK8A-IrZX_SjNAqPTz-k5sLHldl6cabUhpawTA0NOc=w300?v=1'}}  /> 
</View> 
     <TouchableOpacity 
   
 style={ 
   styles.para 
 }> 
<Text 
  style={ 
    styles.txt 
  }> 
 FAJAR 
</Text> 
</TouchableOpacity> 
     <TouchableOpacity 
   
 style={ 
   styles.para 
 }> 
<Text 
  style={ 
    styles.txt 
  }> 
 ZOHAR 
</Text> 
</TouchableOpacity> 
     <TouchableOpacity 
   
 style={ 
   styles.para 
 }> 
<Text 
  style={ 
    styles.txt 
  }> 
 ASAR 
</Text> 
</TouchableOpacity> 
     <TouchableOpacity 
   
 style={ 
   styles.para 
 }> 
<Text 
  style={ 
    styles.txt 
  }> 
 MAGRIB 
</Text> 
</TouchableOpacity> 
 
</View> 
      </View> 
    ); 
  } 
} 
 
const styles = StyleSheet.create({ 
  container: { 
flex:1, 
   alignItems: 'center', 
     justifyContent: 'center', 
    backgroundColor: 'white', 
  }, 
  para : { 
    margin: 30, 
     backgroundColor:'orange', 
width :200, 
height : 30, 
  alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  txt : { 
     fontSize: 30, 
    fontWeight: 'bold', 
  }   
   
}); 