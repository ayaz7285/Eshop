//shows the info of a particular item
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
function Product() {
    const { name } = useParams()
    const [item, setItem] = useState({})
    useEffect(()=>{
        getData()
    },{})
    const getData = ()=>
    {
        axios.get(`http://localhost:8080/products/${name}`) 
        .then(res=>{
            console.log("response data",res.data);
            const data = res.data
            setItem(data)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const add = ()=>
    {
        const name = localStorage.getItem("token")
        var formJSON = {
            name: name,
            product: item.name,
            price:item.price
        };
        console.log(formJSON)
        axios
        .post('http://localhost:8080/add', formJSON)
        .then(response => {
            console.log("Data from backend", response.data);
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div style={{padding:"15px"}}>
            <Paper elevation={6} sx={{height:"100%",width:"60%",margin:"auto",padding:"10px"}}>
                <h1 style={{fontFamily:"Josefin Sans",fontWeight:"bolder"}}>{item.name}</h1>
                <img src={item.image} alt={item.image} style={{width:"90%",margin:"10px"}}/>
                <ul style={{width:"50%",margin:"auto",textAlign:"justify",fontFamily:"Merienda"}}>
                    <li style={{margin:"5px"}}><b>Name: </b>{item.name}</li>
                    <li style={{margin:"5px"}}><b>Price: Rs </b>{item.price}</li>
                    <li style={{margin:"5px"}}><b>Category: </b>{item.category}</li>
                    <li style={{margin:"5px"}}><b>Info: </b>{item.info}</li>
                </ul>
                <Button variant="outlined" style={{width:"50%",margin:"5px"}} onClick={add}>Add to Cart</Button>
            </Paper>
        </div>
    )
}

export default Product
///////////////////////////////////////////////////////////////
// import React, {useEffect,useState} from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// function Product() {
//     const { name } = useParams()
//     const [item, setItem] = useState({})
//     useEffect(()=>{
//         getData()
//     },{})
//     const getData = ()=>
//     {
//         axios.get(`http://localhost:8080/products/${name}`) 
//         .then(res=>{
//             console.log("response data",res.data);
//             const data = res.data
//             setItem(data)
//         })
//         .catch(error=>{
//             console.log(error);
//         })
//     }
//     return (
//         <div style={{padding:"15px"}}>
//             <Paper elevation={6} sx={{height:"100%",width:"60%",margin:"auto",padding:"10px"}}>
//                 <h1 style={{fontFamily:"Josefin Sans",fontWeight:"bolder"}}>{item.name}</h1>
//                 <img src={`../${item.image}`} alt={item.image} style={{width:"90%",margin:"10px"}}/>
//                 <ul style={{width:"50%",margin:"auto",textAlign:"justify",fontFamily:"Merienda"}}>
//                     <li style={{margin:"5px"}}><b>Name: </b>{item.name}</li>
//                     <li style={{margin:"5px"}}><b>Price: Rs </b>{item.price}</li>
//                     <li style={{margin:"5px"}}><b>Category: </b>{item.category}</li>
//                     <li style={{margin:"5px"}}><b>Info: </b>{item.info}</li>
//                 </ul>
//                 <Button variant="outlined" style={{width:"50%",margin:"5px"}}>Add to Cart</Button>
//             </Paper>
//         </div>
//     )
// }

// export default Product

////////////////////////////////////////////////////////////////
// import React, { Component } from 'react'
// import { useParams } from 'react-router-dom'
// const { name } = useParams()


// class Product extends Component {
//     render() {
//         return (
//             <div>
//                 Product info page
//                 {name}
//             </div>
//         )
//     }
// }

// export default Product
