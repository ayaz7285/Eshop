import axios from 'axios'
import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             email:"",
             password:"",
             successmessage: "",
             errorMessage: ""
        }
    }
    enterUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    enterEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    enterPassword = (event) =>{
        this.setState({
            password:event.target.value
        })
    }
    addUser = () => {
        var formJSON = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        console.log(formJSON)
        axios
        .post('http://localhost:8080/register', formJSON)
        .then(response => {
            this.setState({successmessage: response.data.message, errorMessage: ""})
            console.log("Data from backend", response.data);
        }).catch(error => {
            if(error.response){
                this.setState({successmessage: "", errorMessage: error.response.data.message})
            }else{
                this.setState({successmessage: "", errorMessage: error.message})
            }
        })
    }
    handleSubmit=(event)=>{
                // alert(`form submitted by ${this.state.username}`)
                console.log("username",this.state.username)
                event.preventDefault()
            }
   
    render() {
        return (
            <div>
                <h1>E-Shop</h1>
                <div className="login-container">
                <h2 className="login-heading">Login</h2>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <div className="label">Username: </div>
                        <input type="text" className="username form-control" value={this.state.username} onChange= {this.enterUsername}/>
                    </div>
                    <div>
                        <div className="label">Email: </div>
                        <input type="text" className="email form-control" value={this.state.email} onChange= {this.enterEmail}/>
                    </div>
                    <div>
                    <div className="label">Password: </div>
                        <input type="text" className="password form-control" value={this.state.password} onChange= {this.enterPassword}/>
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit" onClick= {this.addUser} > Register</button>
                    </div>
                </form>
                <p>{this.state.successmessage}</p>
            </div>
            </div>
        )
    }
}

export default Test

////////////////////////////////////////////////////////////////////////////////////////////////////////////


