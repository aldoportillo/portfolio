const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
    },
    date: {
        type: String,
        required: [true, "Please add a date"],
    },
    content: {
        type: Array,
        required: [true, "Please add content"]
    },
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog