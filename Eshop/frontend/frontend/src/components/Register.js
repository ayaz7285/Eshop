import * as React from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contact:"",
            errorContactNo:false,
            errorContactNoMessage:"",
            password:"", 
            error:false,
            errorMessage:"",
            username:"",
            email:"",
            address:"",
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
    enterAddress = (event) =>{
        this.setState({
            address:event.target.value
        })
    }
    validatePassword = (event)=>{
        const password = event.target.value;
        var error = this.state.error;
        var errorMessage = this.state.errorMessage;
        this.setState({password:password});
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
        let valid = regex.test(password);
        if(valid==false)
        {
            error=true;
            errorMessage="enter correct password";
        }
        else
        {
            error=false;
            errorMessage="";
        }
        this.setState({password:password})
        this.setState({error:error});
        this.setState({errorMessage:errorMessage});
    }

    validateContactNo = (event)=>{
        const contactNo = event.target.value;
        var errorContactNo = this.state.error;
        var errorContactNoMessage = this.state.errorContactNoMessage;
        this.setState({contactNo:contactNo});
        if(contactNo.length!=10)
        {
            errorContactNo=true;
            errorContactNoMessage="enter correct contact no.";
        }
        else
        {
            errorContactNo=false;
            errorContactNoMessage="";
        }
        this.setState({contact:contactNo})
        this.setState({errorContactNo:errorContactNo});
        this.setState({errorContactNoMessage:errorContactNoMessage});
    }

    addUser = () => {
        var formJSON = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password,
            contact: this.state.contact,
            address: this.state.address
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
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{margin:"5vh"}}
            >
            <h1 style={{margin:"3vh"}}>E-Shop</h1>
            <form style={{border:"2px solid black",borderRadius:"4px",width:"40%",height:"fit-content" ,margin:"auto"}} onSubmit = {this.handleSubmit}>
                <h2 style={{marginTop:"15px",marginBottom:"15px"}}>Register</h2>
                <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    style={{width:"90%"}}
                    name="username"
                    value={this.state.username} 
                    onChange= {this.enterUsername}
                    />
                </div>
                <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    id="outlined-email-required"
                    label="Email"
                    type="email"
                    style={{width:"90%"}}
                    value={this.state.email} 
                    onChange= {this.enterEmail}
                    />
                </div>
                <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    error={this.state.error}
                    helperText={this.state.errorMessage}
                    id="outlined-password-required"
                    label="Password"
                    type="password"
                    style={{width:"90%"}}
                    value={this.state.password}
                    onChange={this.validatePassword}
                    />
                </div>
                <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    error={this.state.errorContactNo}
                    helperText={this.state.errorContactNoMessage}
                    id="outlined-required"
                    label="Contact No."
                    style={{width:"90%"}}
                    value={this.state.contact}
                    onChange={this.validateContactNo}
                    />
                </div>

                <TextField
                required
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
                style={{width:"90%"}}
                value={this.state.address} 
                onChange= {this.enterAddress}
                />

                <div style={{marginTop:"13px",marginBottom:"13px"}}>
                    <button className="btn btn-primary" type="submit" style={{width:"90%"}} onClick= {this.addUser}>Register</button>
                </div>
                <p>{this.state.successmessage}</p>
                <p>{this.state.errorMessage}</p>
            </form>
            
            </Box>
        )
    }
}

export default Register



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////REGISTER WITHOUT HTTP CALL//////////////////////////////////


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// import { Component } from 'react'

// class Register extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             contact:'',
//             errorContactNo:false,
//             errorContactNoMessage:"",
//             password:"", 
//             error:false,
//             errorMessage:""
//         }
//     }
//     validatePassword = (event)=>{
//         const password = event.target.value;
//         var error = this.state.error;
//         var errorMessage = this.state.errorMessage;
//         this.setState({password:password});
//         let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
//         let valid = regex.test(password);
//         if(valid==false)
//         {
//             error=true;
//             errorMessage="enter correct password";
//         }
//         else
//         {
//             error=false;
//             errorMessage="";
//         }
//         this.setState({error:error});
//         this.setState({errorMessage:errorMessage});
//     }

//     validateContactNo = (event)=>{
//         const contactNo = event.target.value;
//         var errorContactNo = this.state.error;
//         var errorContactNoMessage = this.state.errorContactNoMessage;
//         this.setState({contactNo:contactNo});
//         if(contactNo.length!=10)
//         {
//             errorContactNo=true;
//             errorContactNoMessage="enter correct contact no.";
//         }
//         else
//         {
//             errorContactNo=false;
//             errorContactNoMessage="";
//         }
//         this.setState({errorContactNo:errorContactNo});
//         this.setState({errorContactNoMessage:errorContactNoMessage});
//     }

//     render() {
//         return (
//             <Box
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//             style={{margin:"5vh"}}
//             >
//             <h1 style={{margin:"3vh"}}>E-Shop</h1>
//             <form style={{border:"2px solid black",borderRadius:"4px",width:"40%",height:"fit-content" ,margin:"auto"}}>
//                 <h2 style={{marginTop:"15px",marginBottom:"15px"}}>Register</h2>
//                 <div style={{marginTop:"10px",marginBottom:"10px"}}>
//                     <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     style={{width:"90%"}}
//                     name="username"
//                     />
//                 </div>
//                 <div style={{marginTop:"10px",marginBottom:"10px"}}>
//                     <TextField
//                     required
//                     id="outlined-email-required"
//                     label="Email"
//                     type="email"
//                     style={{width:"90%"}}
//                     />
//                 </div>
//                 <div style={{marginTop:"10px",marginBottom:"10px"}}>
//                     <TextField
//                     required
//                     error={this.state.error}
//                     helperText={this.state.errorMessage}
//                     id="outlined-password-required"
//                     label="Password"
//                     type="password"
//                     style={{width:"90%"}}
//                     value={this.state.password}
//                     onChange={this.validatePassword}
//                     />
//                 </div>
//                 <div style={{marginTop:"10px",marginBottom:"10px"}}>
//                     <TextField
//                     required
//                     error={this.state.errorContactNo}
//                     helperText={this.state.errorContactNoMessage}
//                     id="outlined-required"
//                     label="Contact No."
//                     style={{width:"90%"}}
//                     value={this.state.contactNo}
//                     onChange={this.validateContactNo}
//                     />
//                 </div>

//                 <TextField
//                 required
//                 id="outlined-multiline-static"
//                 label="Address"
//                 multiline
//                 rows={4}
//                 style={{width:"90%"}}
//                 />

//                 <div style={{marginTop:"13px",marginBottom:"13px"}}>
//                     <button className="btn btn-primary" type="submit" style={{width:"90%"}}>Register</button>
//                 </div>
//             </form>

//             </Box>
//         )
//     }
// }

// export default Register

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////YOUR ENGINEER FORM//////////////////////////////////
// import React, { Component } from 'react'

// export class Register extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             name:"",
//             username:"",
//             email:"",
//             password:"",
//             contactNo:"",
//             formValidity:{
//                 password:false,
//                 contactNo:false
//             },
//             formErrorMessage:{
//                 password:"",
//                 contactNo:""
//             },
//             formSuccessMessage:{
//                 password:"",
//                 contactNo:""
//             }
//         }
//     }
//     enterName = (event) =>{
//         this.setState({
//             name:event.value
//         })
//     }
//     enterUsername = (event) =>{
//         this.setState({
//             username:event.value
//         })
//     }
//     enterEmail = (event) =>{
//         this.setState({
//             email:event.value
//         })
//     }
//     enterPassword = (event) =>{
//         const password = event.target.value;
//         var formError = this.state.formErrorMessage;
//         var formValidity = this.state.formValidity;
//         var formSuccess = this.state.formSuccessMessage;
//         this.setState({
//             password:password
//         })

//         let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
//         let valid = regex.test(password);
//         console.log(valid)

//         if(valid==false){
//             formError.password = "Password should be of atleast 8 characters and have atleast one small letter atleast one capital letter atleast one digit atleast one special character"
//             formValidity.password = false;
//             formSuccess.password = ""
//         }
//         else{
//             formError.password = ""
//             formValidity.password = true;
//             formSuccess.password = "Correct password"
//         }
//         this.setState({
//             formErrorMessage:formError,
//         })
//         this.setState({
//             formSuccessMessage:formSuccess,
//         })
//     }
//     enterContactNo = (event) =>{
//         const contactNo = event.target.value;
//         var formError = this.state.formErrorMessage;
//         var formValidity = this.state.formValidity;
//         var formSuccess = this.state.formSuccessMessage;
//         this.setState({
//             contactNo:contactNo
//         })
//         if(contactNo.length!=10){
//             formError.contactNo = "Contact No should be of atleast 10 digitss"
//             formValidity.contactNo = false;
//             formSuccess.contactNo = ""
//         }
//         else{
//             formError.contactNo = ""
//             formValidity.contactNo = true;
//             formSuccess.contactNo = "Correct Contact No"
//         }
//         this.setState({
//             formErrorMessage:formError,
//         })
//         this.setState({
//             formSuccessMessage:formSuccess,
//         })
//     }
//     handleSubmit=(event)=>{
//         // alert(`form submitted by ${this.state.username}`)
//         console.log("username",this.state.username)
//         event.preventDefault()
//     }
//     render() {
//         return (
//             <div>
//                 <h1>E-Shop</h1>
//                 <div className="login-container">
//                 <h2 className="login-heading">Register</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <div className="label">Name: </div>
//                         <input type="text" className="name form-control" value={this.state.name} onChange= {this.enterName} />
//                     </div>
//                     <div>
//                         <div className="label">Username: </div>
//                         <input type="text" className="username form-control" value={this.state.username} onChange= {this.enterUsername}/>
//                     </div>
//                     <div>
//                         <div className="label">Email: </div>
//                         <input type="email" className="email form-control" value={this.state.email} onChange= {this.enterEmail}/>
//                     </div>
//                     <div>
//                         <div className="label">Password: </div>
//                         <input type="password" className="password form-control" placeholder="Atleast 8 characters" value={this.state.password} onChange= {this.enterPassword}/>
//                     </div>
//                     <div style={{color:"red"}}>
//                         {this.state.formErrorMessage.password}
//                     </div>
//                     <div style={{color:"green"}}>
//                         {this.state.formSuccessMessage.password}
//                     </div>
//                     <div>
//                         <div className="label">Contact No.: </div>
//                         <input type="text" className="contactNo form-control" value={this.state.contactNo} onChange= {this.enterContactNo}/>
//                     </div>
//                     <div style={{color:"red"}}>
//                         {this.state.formErrorMessage.contactNo}
//                     </div>
//                     <div style={{color:"green"}}>
//                         {this.state.formSuccessMessage.contactNo}
//                     </div>
//                     <div>
//                         <button className="btn btn-primary" type="submit"> Register</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         )
//     }
// }

// export default Register







