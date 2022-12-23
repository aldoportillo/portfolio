const express = require("express")
const {getProjects, createProject, getBlogs, createBlog, sendEmail} = require('../controllers/portfolioControllers')
const router = express.Router();

router.post("/api/contact", sendEmail)

router.get("/api/projects", getProjects)
router.post("/api/projects", createProject)

router.get("/api/blogs", getBlogs)
router.post("/api/blogs", createBlog)



module.exports = router