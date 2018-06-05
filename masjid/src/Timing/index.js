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
           axios.get('http://localhost:9000/User')
            .then((res)=>{
                  this.setState({USER:res.data})
            })

            axios.get('http://localhost:9000/getAllUsers')
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
           axios.get('http://localhost:9000/getTime')
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
                'Access-Control-Allow-Origin':'http://localhost:9000/createsession'
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
                   fajar time  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Set time
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                         <div>   
                             <MuiThemeProvider>
                                <DateTimePicker 
                                    onChange={this.setDate}
                                    DatePicker={DatePickerDialog}
                                    TimePicker={TimePickerDialog}
                                    />
                             </MuiThemeProvider>   
                          </div>
                         </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button onClick={this.createFajarTime} >Send</button>   
                          </div> 
                        </div>
                    </div>
                </div>
                <br />
                <br />
                 Zehor time  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Set time
                    </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                         <div>   
                             <MuiThemeProvider>
                                <DateTimePicker 
                                    onChange={this.setDate}
                                    DatePicker={DatePickerDialog}
                                    TimePicker={TimePickerDialog}
                                    />
                             </MuiThemeProvider>   
                          </div>
                         </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button onClick={this.createFajarTime} >Send</button>   
                          </div> 
                        </div>
                    </div>
                </div>
                <br />
                <br />
          </div>

       )
    }
}