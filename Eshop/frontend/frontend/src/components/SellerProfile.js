import React, { Component } from 'react'
import {Navigate,Link} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
export class SellerProfile extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("seller")
        console.log("seller",token)
        let loggedIn = true
        let seller = token
        if(token === null)
        {
            loggedIn=false
        }
        this.state = {
             loggedIn,
             seller
        }
    }
    
    render() {
        if(this.state.loggedIn == false){
            return <Navigate to = "/sellerLogin"></Navigate>
        }
        return (
            <div>
                <Paper elevation={5} sx={{width:"80%",margin:"auto",padding:"20px"}}>
                <img src="images/profile.png" style={{margin:"15px",height:"60%",width:"60%"}}/>
                <h1>Hello {this.state.seller}</h1>
                <Button variant="outlined" style={{width:"20%",margin:"20px"}}><Link to = "/addProduct">Sell A Product</Link> </Button>
                <Button variant="outlined" style={{width:"20%",margin:"20px"}}><Link to = "/sellerLogout">Logout</Link> </Button>
                </Paper>
            </div>
        )
    }
}

export default SellerProfile
