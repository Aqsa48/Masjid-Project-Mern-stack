import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView,TouchableOpacity ,Image} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      

     <View
  
 style={{
marginTop : 30,
width :450,
height : 100,
  alignItems: 'center',
    justifyContent: 'center',

 }}>
  <Image
          style={{
            
             flexGrow:1,
    height:1050,
    width:1050,
          }}
              source={{uri: 'https://www.hungryng.com/wp-content/uploads/2017/12/2335138099_9e6295a646_z-1.jpg'}}  />
 <Image
          style={{
            
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'https://lh3.ggpht.com/HDbTidcu8KIimBketC2lH5QSMQ5pQQNpo_Yscujk5Nbuxrc_MwxArOhfrF2K2F5YkYtQ=s180'}}  />
              <TouchableOpacity>
            <Text
            style = {{
                fontSize: 20,
    fontWeight: 'bold',
              
            }}
            >
              Find the nearest Mosque
              </Text>
              </TouchableOpacity>

</View>

    );
  }
}


