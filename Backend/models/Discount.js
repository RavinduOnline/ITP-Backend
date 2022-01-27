const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    discountName:{
        type:String,
        required:true
    },
    minAmount:{
        type:Number,
        required:true
    },
    percentage:{
        type:String,
        required:true
    },
    maxLimit:{
        type:Number,
        required:true
    }
},
    {timestamps:true}
);

module.exports = mongoose.model('Discounts',postSchema);