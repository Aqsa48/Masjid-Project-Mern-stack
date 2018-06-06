import React from 'react';
import axios from "axios";

import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class extends React.Component{
    constructor(props){
        super(props);
          this.state = {
          dataSource:[], 
          dateTime: '' ,
          zehordateTime:'',
          asardateTime:'',
          magribdateTime:'',
          ishadateTime:'',
          timeSession:'',
          settime:'',
          USER:'',
        }   
         this.createFajarTime=this.createFajarTime.bind(this);
    }
        
       setDate = (dateTime) => this.setState({ dateTime }) 
       
       setDate = (zehordateTime) => this.setState({ zehordateTime }) 

        componentDidMount(){
            console.log(this.state.dateTime);

        this.setState({});
           axios.get('http://localhost:9000/User?token=masjiddata')
            .then((res)=>{
                  this.setState({USER:res.data})
            })

            axios.get('http://localhost:9000/getAllUsers?token=masjiddata')
             .then((res)=>{        
             this.setState({AllUsers:res.data});

             this.state.AllUsers.map((value,index)=>{
                 this.state.allNames.push(value.username);
                this.setState({});
            });        
            }).catch((err)=>{
                console.log(err);
            })

        this.setState({});
           axios.get('http://localhost:9000/getTime?token=masjiddata')
            .then((res)=>{
                  console.log(res.data);
            })
        }
        createFajarTime(){
            console.log('zehor'+this.state.zehordateTime);
            console.log('aa'+this.state.USER._id);
         axios({
            method:'post',
            url:'http://localhost:9000/Namaztiming',
            data:{
                'fajardatetime': this.state.dateTime,
                 'masjid_id':this.state.USER._id, 
                 'zehordateTime':this.state.zehordateTime,
                 'asardateTime':this.state.asardateTime,
                 'magribdateTime':this.state.magribdateTime,
                 'ishadateTime':this.state.ishadateTime

                
            },
            headers:{
                'Access-Control-Allow-Origin':'http://localhost:9000/Namaztiming'
            }  
        }).then((response)=>{
            if(response.data.confirmation==="Yes"){
                console.log('Time updated'); 
                this.getSessionsData();
            }
            
        }).catch((err)=>{
            console.log(err);
        })
      
     
        } 
     
            render(){
                return(
                 <div>

                 <input 
                    type='text' 
                    name='fajar' 
                    placeholder='fajarTime'
                    onChange={(e) => this.setState({ fajardatetime: e.target.value})} 

                />
                <input 
                    type='text' 
                    name='zehor' 
                    placeholder='zehroTime'
                    onChange={(e) => this.setState({ zehordateTime: e.target.value})} 

                />
                 <input 
                    type='text' 
                    name='asar' 
                    placeholder='asarTime'
                    onChange={(e) => this.setState({ asardateTime: e.target.value})} 

                />

                 <input 
                    type='text' 
                    name='magrib' 
                    placeholder='magribTime'
                    onChange={(e) => this.setState({ magribdateTime: e.target.value})} 

                />

                
                 <input 
                    type='text' 
                    name='isha' 
                    placeholder='ishaTime'
                    onChange={(e) => this.setState({ ishadateTime: e.target.value})} 

                />


                <button onClick={this.createFajarTime} >Send</button>   
                
                 <br/>
          </div>

       )
    }
}