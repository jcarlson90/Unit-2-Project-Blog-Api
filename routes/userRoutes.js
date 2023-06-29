const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllPosts) // get all posts
router.post('/', userController.createPost) // Create a new post
router.get('/:id', userController.getAPost) // get specific post (Auth)
router.put('/:id', userController.updatePost) // Update a post (Auth)
router.post('/:id', userController.commentOnPost) // add comment to post (Auth)
router.delete('/:id', userController.deletePost) // Delete a post (Auth)
router.post('/', userController.createUser)//create a user
router.post('/login',userController.auth,  userController.loginUser)//login a user
router.put('/:id', userController.auth, userController.updateUser)//update a user
router.delete('/:id', userController.auth, userController.deleteUser)//delete a user
router.get('/', userController.getUsers )//Show users
router.post('/logout',userController.auth, userController.logoutUser)//logout a user

module.exports = router