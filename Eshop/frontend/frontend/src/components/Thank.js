import React, { Component } from 'react'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
export class Thank extends Component {
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
