require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true },
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}] // makes an array of different objects or else only one post would be made.
}, {
    timestamps: true
})

userSchema.pre('save', async function(next){
    (this.isModified('password'))? 
    this.password = await bcrypt.hashSync(this.password, 8) :
    null;
    next()
})

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({ _id: this.id}, process.env.SECRET)
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User

