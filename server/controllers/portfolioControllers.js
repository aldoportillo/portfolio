const Project = require("../models/projectModel")

const getProjects = (req, res) => {
    res.send("<h2>ProjectsPage</h2>")
}

const createProject = async(req,res) => {
    const {title, img, bio, link} = req.body; //Gather info from request body

    //Validate all filled in fields
    if(!title || !img  || !bio || !link){
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    //Create Project
    const project = await Project.create({
        title,
        img,
        bio,
        link
    })

    res.status(201).json(project)
}

module.exports = {
    getProjects,
    createProject
}