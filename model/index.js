const mongo = require('mongoose');

const UserSchema = new mongo.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
},{timestamps:true});

const People = mongo.model('people',UserSchema);

module.exports = People;