const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')

router.post('/', userController.auth, postController.createPost) // Create a new post
router.get('/', userController.auth, postController.getAllPosts) // get all posts
router.get('/:id', userController.auth, postController.getAPost) // get a specific post
router.delete('/:id', userController.auth, postController.deletePost) // Delete a post

module.exports = router