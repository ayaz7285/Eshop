import React, { Component } from 'react'
import Paper from '@mui/material/Paper'
export class SellerLogout extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.removeItem("seller")
    }
    
    render() {
        return (
            <div>
                <Paper elevation={5} sx={{width:"80%",height:"82vh",padding:"30px",margin:"auto"}}>
                    <h1 style={{fontSize:"70px",margin:"20px"}}>You have been Logged out</h1>
                    <h2 style={{margin:"20px"}}>Please Login if you want to sell more Products</h2>
                </Paper>
            </div>
        )
    }
}

export default SellerLogout
