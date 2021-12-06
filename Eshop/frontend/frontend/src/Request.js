import React, { Component } from 'react'
import axios from 'axios'
class Request extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
    }
    
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/photos') 
        .then(res=>{
            console.log("response data",res.data);
            this.setState({list: res.data});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() { 
        const {list} = this.state;
        console.log("data retrived",list);
        return (
            <div>
                {/* <img src={list[0].url}/> */}
                {
                    list.length ? 
                    <img src={list[0].url}/> : <div>data not found</div>
                //    list.map(list=>
                //        <div>{list.url}</div>
                //    ) : <div>No data found</div>

                }

            </div>
        )
    }
}

export default Request
