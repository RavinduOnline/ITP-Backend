const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    secname :{
        type:String,
        required:false
    },
    unitprice :{
        type:Number,
        required:true
    },
    secunitprice :{
        type:Number,
        required:false
    },
    subtotal :{
        type:Number,
        required:true
    },
    discounts :{
        type:Number,
        required:true
    },
    total :{
        type:Number,
        required:true
    },
},
    {timestamps:true}
)

module.exports = mongoose.model('Cart',postSchema);