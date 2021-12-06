const mongoose = require('mongoose');
const {Schema} = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://127.0.0.1:27017/eShop';

let userSchema = Schema({
    name : Number,
    password : String,
    contactNo : Number,
    email : String
}, {collection : 'user'} );

let collection = {};

collection.getUserCollection = ()=>{
    return mongoose.connect(url, {useNewUrlParser : true} ).then((database)=>
    {
        return database.model('user',userSchema);
    }).catch((error)=>{
        let err = new Error('Could not connect to database');
        err.status = 500;
        throw err;
    })
}

module.exports = collection ;