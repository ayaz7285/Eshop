const collection = require('../utilites/connection');

const userDB = {};

userDB.checkUser = (contactNo) =>{
    return collection.getUserCollection().then(database=>{
        return database.findOne({"contactNo":contactNo}).then(contact => {
            if(contact)
            {
                return "user already exists";
            }
            else{
                return true;
            }
        });
    });
}

userDB.registerUser = (userObj) => {
    return collection.getUserCollection().then(database => {
        return database.create(userObj).then(data => {
            console.log(data);
            if(data.length !==0)
            {
                return userObj;
            }else{
                return null;
            }
        })
    })
}

module.exports = userDB;