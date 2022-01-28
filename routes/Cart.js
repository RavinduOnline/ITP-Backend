const express = require ('express');
const posts = require('../models/Cart');
const Posts  = require('../models/Cart');

const router = express.Router();

//save cost

router.post('/cart/save',(req,res) => {
    let newPost = new Posts(req.body) ;

    newPost.save((err) =>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success: " Cost Saved Successfully"
        });
    });
});


//get post 

router.get('/cart',(req,res)=>{
    Posts.find().exec((err,post) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

         return res.status(200).json({
            success:true,
            existingPosts:post
         });
    });
});

//update post

router.put('/cart/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err 
                });
            }

            return res.status(200).json({
                success:"Cost Updated Successfully"
             });
        }
    );
});

//delete post

router.delete('/cart/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err){
            return res.status(400).json({
                message:"Cost Delete unsuccessfully" ,err
            });
        }

        return res.status(200).json({
            message:"Cost Delete successfully",deletedPost
        });
    });
});  


//get sfecific post

router.get("/cart/:id",(req,res)=>{
    let postId = req.params.id;

    posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }
        return res.status(200).json({
            success:true, post
        });
    });
});

module.exports = router;