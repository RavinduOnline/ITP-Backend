//In here we make http request for our CRUD Functions

const express = require('express');            // <---------------import express from express package
const posts = require('../models/FoodItems');
const Posts = require('../models/FoodItems');      // <---------------import student model in model folder

const router = express.Router()     // <-------------------We use this for write http requests


//save posts - postmethod - create functions
router.post('/FoodItems/Insert',(req,res) => {

    let newPost = new Posts(req.body);

    newPost.save((err) => {

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });

    });

});



//get posts - getmethod - read functions
router.get('/FoodItems/get',(req,res) => {
    Posts.find().exec((err,posts) => {
        if(err){                           // <-------------if req or res have and error while data retriving
            return res.status(400).json({  // <-------------json format
                error:err                  // <-------------display error message
            });
        }
        return res.status(200).json({      // <-------------else req and res have done succesfully
            success:true,                  // <-------------if success
            existingPosts:posts            // <-------------retreve exsiting data method
        });
    });
});



//get a specific post method by get method with unique id
router.get('/FoodItems/getone/:id',(req,res) => {

    let postId = req.params.id;

    Posts.findById(postId,(err,post) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});



//put posts - putmethod - update functions
router.put('/FoodItems/update/:id',(req,res) => {          // <-------------end point declare eg: /post/update/:id
    Posts.findByIdAndUpdate(                               // <-------------add findByIdAndUpdate method by using mongoose
        req.params.id,
        {
            $set:req.body,                                 // <-------------update full body
        },
        (err,post) => {                                    // <-------------checking if it  have an error or not
            if(err){                                       // <-------------If have a error
                return res.status(400).json({error:err});  // <-------------show 400 error
            }
            return res.status(200).json({                 // <-------------If sucessfully update display 200 successfull message
                success:"Updated Succesfully!"              // <-------------show this successfull message
            });
        }
    );
});


//delete posts - deletemethod - delete functions
router.delete('/FoodItems/delete/:id',(req,res) => {                            // <-------------end point declare eg: /post/delete/:id and request response come with callback function
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {      // <-------------add findByIdAndRemove method by using mongoose

        if(err) return res.status(400).json({                                   // <-------------If error occur, then this happens
            message:"Delete Unsucceesfull!", err
        });

        return res.json({                                                  // <-------------else successfully delete then display this message
            message:"Delete Succesfull!", deletedPost
        });

    });
});


//export above segment
module.exports = router;


