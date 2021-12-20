import React, { Component } from 'react'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'
export class Thank extends Component {

    componentDidMount() {
        const name = localStorage.getItem("token");
        var JSON = {name:name}
        console.log("name",JSON);
        axios.post(`http://localhost:8080/emptyCart`,JSON) 
        .then(res=>console.log(res.data))
    }

    render() {
        return (
            <div>
                <Paper elevation={5} sx={{width:"70%",margin:"auto",height:"80vh",paddingTop:"20vh"}}>
                    <h1 style={{margin:"10px"}}>Your Order Has Been Placed</h1>
                    <h3 style={{margin:"10px"}}>Thank You for buying from us</h3>
                    <h3 style={{margin:"10px"}}>Your order will be delivered within 5-7 business days</h3>
                    <Button variant="outlined" style={{margin:"50px"}}><Link to="/products">Continue Shopping</Link></Button>
                </Paper>
            </div>
        )
    }
}

export default Thank



