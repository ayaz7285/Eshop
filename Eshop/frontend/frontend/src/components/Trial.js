import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Trial extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             list:[],
             category:"Mobiles"
        }
    }


    componentDidMount()
    {
        axios.get(`http://localhost:8080/products`) 
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
            <h1 style={{margin:"10px"}}>Mobiles</h1>
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",alignContent:"space-between"}}>
                {
                   list.filter(x => x.category == 'Mobiles') .map(item=>
                    <Card sx={{ maxWidth: 345 ,width:"260px",margin:"15px"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        src={item.image}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        Price: Rs {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/product" style={{color:"Blue",textDecoration:"none"}}>Learn More</Link></Button>
                    </CardActions>
                    </Card>
                   ) 
                }
            </div>
            <h1>Electronics</h1>
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",alignContent:"space-between"}}>
                {
                   list.filter(x => x.category == 'Electronics') .map(item=>
                    <Card sx={{ maxWidth: 345 ,width:"260px",margin:"15px"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        src={item.image}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        Price: Rs {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/product" style={{color:"Blue",textDecoration:"none"}}>Learn More</Link></Button>
                    </CardActions>
                    </Card>
                   ) 
                }
            </div>
            <h1>Kitchen</h1>
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",alignContent:"space-between"}}>
                {
                   list.filter(x => x.category == 'Kitchen') .map(item=>
                    <Card sx={{ maxWidth: 345 ,width:"260px",margin:"15px"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        src={item.image}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        Price: Rs {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/product" style={{color:"Blue",textDecoration:"none"}}>Learn More</Link></Button>
                    </CardActions>
                    </Card>
                   ) 
                }
            </div>
            <h1>Computers</h1>
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",alignContent:"space-between"}}>
                {
                   list.filter(x => x.category == 'Computers') .map(item=>
                    <Card sx={{ maxWidth: 345 ,width:"260px",margin:"15px"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        src={item.image}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        Price: Rs {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/product" style={{color:"Blue",textDecoration:"none"}}>Learn More</Link></Button>
                    </CardActions>
                    </Card>
                   ) 
                }
            </div>
            <h1>Fashion</h1>
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",alignContent:"space-between"}}>
                {
                   list.filter(x => x.category == 'Fashion') .map(item=>
                    <Card sx={{ maxWidth: 345 ,width:"260px",margin:"15px"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        src={item.image}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                        Price: Rs {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to="/product" style={{color:"Blue",textDecoration:"none"}}>Learn More</Link></Button>
                    </CardActions>
                    </Card>
                   ) 
                }
            </div>
            </div>
        )
    }
}

export default Trial




{/* <Paper elevation={4} style={{width:"75%",margin:"10px auto",height:"70vh"}}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Paper> */}