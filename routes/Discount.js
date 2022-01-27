const express = require('express');
const posts = require('../models/Discount');
const Posts = require('../models/Discount');

const router = express.Router();

//Save Posts
 
router.post('/discount/insert',(req,res)=>{

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

//Get posts

router.get('/discounts',(req,res) => {
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific post

router.get("/discount/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


//update posts

router.put('/discount/update/:id',(req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//Delete Post

router.delete('/discount/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedPost
        });
    });
});

module.exports = router;