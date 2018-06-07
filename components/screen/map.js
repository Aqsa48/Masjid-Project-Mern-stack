import React from 'react'; 
import { MapView } from 'expo'; 
 
export default class App extends React.Component { 
  render() { 
    return ( 
      <MapView 
        style={{ flex: 1 }} 
        initialRegion={{ 
            latitude: 17.3850, 
                longitude: 78.4867, 
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421, 
        }} 
    > 
           <MapView.Marker 
         coordinate={{ 
               latitude: 17.3986, 
                 longitude: 78.4930, 
               
         }} 
             title={"title"} 
           description={"description"} 
        /> 
         
                  <MapView.Marker 
             coordinate={{ 
                   latitude: 17.3969, 
               longitude: 78.4750, 
               
             }} 
             title={"title"} 
             description={"description"} 
         />   
          
        <MapView.Marker 
             coordinate={{ 
                       latitude: 17.3991, 
                 longitude: 78.4460, 
               
             }} 
         title={"title"} 
             description={"description"} 
         /> 
               <MapView.Marker 
             coordinate={{ 
                     latitude: 17.3833, 
               longitude: 78.4011, 
               
             }} 
           title={""} 
           description={"description"} 
      /> 
       <MapView.Marker 
             coordinate={{ 
                 latitude: 17.3986, 
               longitude: 78.4930, 
               
             }} 
             title={"title"} 
             description={"description"} 
         />  
          
          
       
          
          
         
         </MapView> 
    ); 
  } 
} 