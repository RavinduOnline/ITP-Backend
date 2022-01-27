const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    Fname:{
        type:String,
        required:true
    },
    Lname:{
        type:String,
        required:true
    },
    Pnumber:{
        type:Number,
        required:true
    },
    JoinDate:{ 
        type:Number,
        required:true
    },Point:{
        type:Number,
        required:true
    },type:{
        type:String,
        required:true
    }
},
    {timestamps:true}
);

module.exports = mongoose.model('regular_customer',postSchema);