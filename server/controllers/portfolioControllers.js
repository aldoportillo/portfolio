const Project = require("../models/projectModel")
const Blog = require("../models/blogModel")
const asyncHandler = require('express-async-handler')
const dotenv = require("dotenv").config()
const nodemailer = require("nodemailer");

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json(projects)
})

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

const getBlogs = asyncHandler(async(req, res) => {
    const blogs = await Blog.find({})
    res.status(200).json(blogs)
})

const createBlog = async(req,res) => {
    const {title, date, content} = req.body

    if(!title || !date  || !content){
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    const blog = await Blog.create({
        title,
        date,
        content
    })
    res.status(201).json(blog)
}

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.SENDER_EMAIL}`,
      pass: `${process.env.SENDER_PASSWORD}`,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

const sendEmail = asyncHandler(async (req, res) => {
    const {name, email, message} = req.body;
    const mail = {
      from: name,
      to: `${process.env.RECIEVER_EMAIL}`,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  })

module.exports = {
    getProjects,
    createProject,
    getBlogs,
    createBlog,
    sendEmail
}