import React from "react"
import axios from "axios"
// import logo from "../Images/logo.png"

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            response:''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    async handleLogin(){
        console.log(this.state.password + this.state.username)
        axios({
            method:'post',
            url:'http://localhost:9000/login',
            data:{
                username:this.state.username,
                password:this.state.password
            },
            headers:{
                'Access-Control-Allow-Origin':'http://localhost:9000/'
            }
        }).then((res)=>{
            if(res === ''){
                alert("user pass is wrong")
            }
            else{
                localStorage.setItem('userData',JSON.stringify(res.data.userData));
                this.props.history.push(res.data.path);
            }
            
        }).catch((err)=>{
            console.log(err);
        })
    }

    componentDidMount(){
      //   axios.get('http://localhost:9000/getData')
      //   .then((res)=>{
      //     this.setState({response:res.data})  
      //   }).catch((err)=>{
      //       console.log(err);
      //   })
    }

    render(){
        return(
            <div>
                <div>
                    <input 
                        type='text' 
                        name='username' 
                        placeholder='username' 
                        onChange={(e)=> this.setState({username:e.target.value})}  
                    />
                      <br/>
                    <input 
                        type='text' 
                        name='password' 
                        placeholder='password' 
                        onChange={(e)=> this.setState({password:e.target.value})} 
                    />
                      <br/>
                    <button 
                        onClick={this.handleLogin} 
                    >
                        Login
                    </button>
                </div>
                <div>
                    <a href='/signup' >Signup</a>
                </div>
                {/* <div>{this.state.response}</div> */}
            </div>
        )
    }
}