const { model, Schema } = require('mongoose')

const postSchema = new Schema ({
   title: { type: String, required: true },
   postBody: {type: String, required: true },
   user: { type: Schema.Types.ObjectId, required: true, ref: "User"}
}, {
    timestamps: true
})

const Post = model('Posts', postSchema)

module.exports = Post