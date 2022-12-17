const express = require("express")
const {getProjects, createProject} = require('../controllers/portfolioControllers')
const router = express.Router();

router.get("/api/projects", getProjects)
router.post("/api/projects", createProject)

module.exports = router