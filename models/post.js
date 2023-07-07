const { model, Schema } = require('mongoose')

const postSchema = new Schema ({
   title: { type: String, required: true },
   postbody: {type: String, required: true },
   user: { type: Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
})

const Post = model('Posts', postSchema)

module.exports = Post