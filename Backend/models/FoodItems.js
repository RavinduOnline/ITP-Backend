const mongoose = require('mongoose');    //  <----------------import mongoose and asign to constant called mongoose

const postSchema = new  mongoose.Schema({   //  <-------------create document(just like a table in sql) which is go to the mongodb 

    ItemName:{
        type:String,
        required:true
    },
    MCategory:{
        type:String,
        required:true
    },
    SubCategory:{
        type:String,
        required:true
    },
    ItemUnitPrice:{
        type:Number,
        required:true
    },
    ItemImg:{
        type:String,
        required:true
    },

},
    {timestamps:true}
);

//export the schema document to mongodb  with document name(just like a table name in sql)
module.exports = mongoose.model('FoodItem',postSchema);