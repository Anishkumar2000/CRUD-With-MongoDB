const mongoose = require('mongoose');
const schema = mongoose.Schema;


const userschema = new schema({
    username:{type:String,required:true},
    password:{type:String}
},{
    timestamps:true
});

const users = mongoose.model('users',userschema);

module.exports = users;