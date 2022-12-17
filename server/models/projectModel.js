const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a name"],
    },
    img: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://i.ibb.co/4pDNDk1/avatar.png"
    },
    bio: {
        type: String,
        maxLength: [250, "Bio cannot exceed 250 characters"],
        default: "bio"
    },
    link: {
        type: String,
        required: [true, "Please add a link"],
    }
})

const Project = mongoose.model("Project", projectSchema)

module.exports = Project