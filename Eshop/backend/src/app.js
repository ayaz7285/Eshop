const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

//connecting to DB
mongoose.connect("mongodb://127.0.0.1:27017/eShop",{
    useNewURLParser:true,
    useUnifiedTopology:true
},()=>{console.log("connected to db")});

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:String,
    address:String
})

const User = mongoose.model("User",userSchema);



const cartSchema = new mongoose.Schema({
    name:String,
    items:[
        {
            product:String,
            price:Number
        }
    ],
    total:Number
})

const Cart = mongoose.model("Cart",cartSchema);

app.post("/add",(req,res)=>{
    const {name,product,price} = req.body
    const item = {
        product:product,
        price:price
    }
    console.log("add to cart",req.body)
    Cart.findOne({name:name},(err,user)=>{
        if(user){
            user.items.push(item)
            user.total+=Number(price)
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"user added to existing cart",user:user})
                }
            })
        }else{
            const items=[item]
            const total=price
            const newUser = new Cart({name,items,total})
            newUser.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"item added to new cart",user:newUser})
                }
            })
        }
    })
})

app.get("/cart/:name",(req,res)=>{
    let name = req.params.name
    Cart.findOne({name:name},(err,user)=>{
        if(user){
            res.send(user)
            console.log("Cart",user)
        }else{
            res.send({message:"cannot connect to DB"})
        }
    })
})



const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    category : String,
    image : String,
    info : String
})

const Product = mongoose.model("Product",productSchema);

app.get("/products",(req,res)=>{
    Product.find({},(err,product)=>{
        if(product){
            res.send(product)
            console.log("product",product)
        }else{
            res.send({message:"cannot connect to DB"})
        }
    })

})

app.get("/products/:name",(req,res)=>{
    let name = req.params.name
    Product.findOne({name:name},(err,product)=>{
        if(product){
            res.send(product)
            console.log("product",product)
        }else{
            res.send({message:"cannot connect to DB"})
        }
    })

})


app.post("/login",(req,res)=>{
    const {email,password} = req.body
    console.log("data entered",req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password==user.password){
                res.send({message:"login sucees",user:user})
            }else{
                res.send({message:"Wrong credentials"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})

app.post("/register",(req,res)=>{
    const {name,email,password,contact,address} = req.body
    console.log("data entered",req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exists"})
        }else{
            const user = new User({name,email,password,contact,address})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"register success",user:user})
                }
            })
        }
    })
})


app.listen(8080);
console.log('server running on port 8080');

// app.get('/' , (req,res) => {
//     console.log('request to start file');
//     res.sendFile(path.join(__dirname + '/view/start.html'));
// });

// app.get('/saveUser' , (req,res) => {
//     console.log('saving user');
//     res.json(
//         {
//             username : req.query.username,
//             password : req.query.password
//         }
//     );
// });

// app.get('/home' , (req,res)=>{
//     console.log('request for home page');
//     res.send('Welcome');
// });

// app.get('/aboutUs' , (req,res)=>{
//     console.log('request for About Us page');
//     res.send('About Us');
// });

// app.get('/login' , (req,res) => {
//     console.log('request for login');
//     res.sendFile(path.join(__dirname + '/view/end.html'));
// });



