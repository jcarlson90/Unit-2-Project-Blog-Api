const User = require('../models/user')
const Post = require('../models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getAllPosts = async (req, res) => {
    try{
      const post = await Post.findOne({_id:req.params.id, user: req.user._id}) 
        await post.save
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.createPost = async (req, res) => {
    try{
        const post = new Post(req.body)
        await post.save()
        res.json({post})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.getAPosts = async (req, res) => {
    try{
        const post = await Post.findOne({_id:req.params.id})
        await post.save
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.updateOne({_id:req.params.id})
        await post.save()
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.commentOnPost = async (req, res) => {
    try {
        const post = await Post.findOne({_id:req.params.id})
        await post.save()
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await post.deleteOne({_id:req.params.id})
        await post.save()
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}