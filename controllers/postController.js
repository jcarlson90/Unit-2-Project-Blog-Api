const User = require('../models/user')
const Post = require('../models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getAllPosts = async (req, res) => {
    try{
      const posts = await Post.find({})
      res.json(posts)  
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.createPost = async (req, res) => {
    try{
        const postData = req.body
        const user = req.user
        if (!req.user) {
            throw new Error({message: "user not found"})
        } else {
            const newPost = await Post.create(postData)
            await newPost.save()
            await user.posts.addToSet(newPost)
            await user.save()
            res.json(user)
        }
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

exports.getAPost = async (req, res) => {
    try{
        const post = await Post.findOne({_id:req.params.id})
        res.json(post)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.deleteOne({_id:req.params.id})
        res.json({message: "post deleted"})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}