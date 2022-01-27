const express = require ('express');
const posts = require('../Models/costing');
const Posts  = require('../Models/costing');

const router = express.Router();

//save cost

router.post('/costing/save',(req,res) => {
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

router.get('/costing',(req,res)=>{
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

router.put('/costing/update/:id',(req,res)=>{
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

router.delete('/costing/delete/:id',(req,res)=>{
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


//get specific post

router.get("/costing/:id",(req,res)=>{
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