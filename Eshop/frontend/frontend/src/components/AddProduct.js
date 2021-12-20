import React, { Component } from 'react'
import axios from 'axios'
import { TextField ,Button} from '@mui/material'
import {Navigate} from 'react-router-dom'

export class AddProduct extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("seller")
        let loggedIn = true;
        if(token===null)
        {
            loggedIn=false
        }

        this.state = {
             name:"",
             price:"",
             category:"",
             image:null,
             info:"",
             loggedIn
        }
    }
    enterName = (event)=>{
        this.setState({name:event.target.value});
    }
    enterPrice = (event)=>{
        this.setState({price:event.target.value});
    }
    enterCategory = (event)=>{
        this.setState({category:event.target.value});
    }
    enterInfo = (event)=>{
        this.setState({info:event.target.value});
    }
    setImage = (event)=>{
        this.setState({image:event.target.files[0]})
        console.log(event.target.files[0])
    }
    upload = ()=>{
        var fd = new FormData()
        fd.append("name",this.state.name)
        fd.append("price",Number(this.state.price))
        fd.append("category",this.state.category)
        fd.append("info",this.state.info)
        fd.append("image",this.state.image)
        axios.post("http://localhost:8080/addProduct",fd)
        .then(res=>console.log(res.data))
    }

    render() {
        if(this.state.loggedIn == false){
            return <Navigate to = "/sellerLogin"></Navigate>
        }
        return (
            <div>
                <form style={{width:"50%",margin:"40px auto",border:"2px solid black",padding:"20px"}}>
                    <h2>Sell Product</h2>
                    <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Name of Product"
                    style={{width:"90%"}}
                    value={this.state.name} 
                    onChange= {this.enterName}
                    />
                    </div>
                    <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Price of Product"
                    style={{width:"90%"}}
                    value={this.state.price} 
                    onChange= {this.enterPrice}
                    />
                    </div>
                    <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    id="outlined-required"
                    label="Category of Product"
                    style={{width:"90%"}}
                    value={this.state.category} 
                    onChange= {this.enterCategory}
                    />
                    </div>
                    <div style={{marginTop:"10px",marginBottom:"10px"}}>
                    <TextField
                    required
                    id="outlined-multiline-static"
                    label="Info"
                    multiline
                    rows={6}
                    style={{width:"90%"}}
                    value={this.state.info} 
                    onChange= {this.enterInfo}
                    />
                    </div>
                    <div style={{marginTop:"10px",marginBottom:"10px"}}>
                        Image of Product: 
                        <input type="file" style={{width:"70%",marginLeft:"13px"}} onChange={this.setImage}/>
                    </div>
                    <div style={{marginTop:"10px",marginBottom:"10px"}}>
                        <Button variant="outlined" style={{width:"90%"}} onClick={this.upload}>Upload Product</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProduct
