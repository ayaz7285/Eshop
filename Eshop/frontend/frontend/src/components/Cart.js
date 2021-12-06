//shows the products in the cart of a User
import React, { Component } from 'react'
import {Navigate,Link} from 'react-router-dom'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
export class Cart extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log("token",token)
        let loggedIn = true
        if(token === null)
        {
            loggedIn=false
        }
        this.state = {
             loggedIn,
             token,
             list:[],
             total:0
        }
    }
    componentDidMount()
    {
        axios.get(`http://localhost:8080/cart/${this.state.token}`) 
        .then(res=>{
            console.log("response data",res.data);
            console.log("watchlist is:",res.data.items)
            this.setState({list: res.data.items});
            this.setState({total:res.data.total})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render() {
        if(this.state.loggedIn==false)
        {
            return <Navigate to="/login"></Navigate>
        }
        const {list} = this.state
        console.log(list)
        return (
            <div>
                <Paper elevation={5} sx={{padding:"20px",margin:"auto",width:"60%"}}>
                <h1>Your Cart</h1>
                <div style={{display:"flex"}}>
                    <div style={{width:"75%",textAlign:"justify",border:"2px solid black",padding:"5px",fontWeight:"bold"}}>Product Name</div>
                    <div style={{width:"20%",textAlign:"justify",border:"2px solid black",padding:"5px",fontWeight:"bold"}}>Price</div>
                </div>
                
                {
                    list.map(item=>
                        <div style={{display:"flex"}}>
                        <div style={{width:"75%",textAlign:"justify",border:"2px solid black",padding:"5px"}}>{item.product}</div>
                        <div style={{width:"20%",textAlign:"justify",border:"2px solid black",padding:"5px"}}>{item.price}</div>
                        </div>
                        )
                }
                <h1 style={{margin:"20px"}}>Grand Total: Rs {this.state.total}</h1>
                <Button variant="outlined"><Link to="/thank" style={{textDecoration:"none"}}>Place Your Order</Link></Button>
                </Paper>
            </div>
        )
    }
}

export default Cart
