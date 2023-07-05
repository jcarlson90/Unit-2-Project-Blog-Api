const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/', postController.getAllPosts) // get all posts
router.post('/', postController.createPost) // Create a new post
//router.get('/:id', postController.getAPost) // get specific post (Auth)
router.put('/:id', postController.updatePost) // Update a post (Auth)
//router.post('/:id', postController.commentOnPost) // add comment to post (Auth)
router.delete('/:id', postController.deletePost) // Delete a post (Auth)