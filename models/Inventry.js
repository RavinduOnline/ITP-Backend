const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
     
    ProductName:{
        type:String,
        required:true
    },
    UnitPrice:{
        type:Number,
        required:true
    },
    Qty:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
},
    {timestamps:true}
);

module.exports = mongoose.model('Ingredient',postSchema);