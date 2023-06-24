const { model, Schema } = require('mongoos')

const postSchema = new Schema ({
   
}, {
    timestamps: true
})

const Post = model('Posts', postSchema)

module.exports = Post