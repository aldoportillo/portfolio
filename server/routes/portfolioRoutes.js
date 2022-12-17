const express = require("express")
const {getProjects, createProject, getBlogs, createBlog} = require('../controllers/portfolioControllers')
const router = express.Router();

router.get("/api/projects", getProjects)
router.post("/api/projects", createProject)

router.get("/api/blogs", getBlogs)
router.post("/api/blogs", createBlog)

module.exports = router