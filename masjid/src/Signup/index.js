import React from  "react";
import axios from "axios";

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            masjidname:'',
            masjidlocation:''
        }
        this.handleSignup = this.handleSignup.bind(this);
    }

    async handleSignup(){
console.log(this.state.password)

        axios({
            method:'post',
            url:'http://localhost:9000/signup',
             data:{
                username: this.state.username,
                password:this.state.password, 
                email:this.state.email,
                masjidname:this.state.masjidname,
                masjidlocation:this.state.masjidlocation


                
            },
            headers:{
                'Access-Control-Allow-Origin':'http://localhost:9000/'
            }
        }).then((response)=>{
            // if(response === ''){
            //     alert("user is already exits")
            // }
            // else{
                this.props.history.push(response.data.path);
                // console.log(this.props.history.push('/login'));
            // }
            // console.log(response);
            
        }).catch((err)=>{
            console.log(err);
        })  
    }
    
    render(){
        return(
            <div>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username' 
                    onChange={(e) => this.setState({ username: e.target.value})}     
                />
                  <br/>
                <input 
                    type='text' 
                    name='email' 
                    placeholder='email'
                    onChange={(e) => this.setState({ email: e.target.value})}     
                />
                  <br/>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password'
                    onChange={(e) => this.setState({ password: e.target.value})} 
                />
                  <br/>
                <input 
                    type='text' 
                    name='masjidname' 
                    placeholder='masjidname'
                    onChange={(e) => this.setState({ masjidname: e.target.value})} 
                />
                <br/>
                
                <input 
                    type='text' 
                    name='masjidlocation' 
                    placeholder='masjidlocation'
                    onChange={(e) => this.setState({ masjidlocation: e.target.value})} 
                />
                 <br/>
             
                <button onClick={this.handleSignup}>Signup</button>

                <div>
                    <a href='/login' >Login</a>
                </div>
            </div>
        )
    }
}