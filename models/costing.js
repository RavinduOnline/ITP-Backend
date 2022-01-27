const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    yearAndmonth :{
        type:String,
        required:true
    },
    cost_LKR :{
        type:Number,
        required:true
    },
    type :{
        type:String,
        required:true
    },
},
    {timestamps:true}
)

module.exports = mongoose.model('costing',postSchema);
