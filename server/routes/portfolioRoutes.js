const express = require("express")
const Contact = require('../models/contact')
const {createContact} = require('../controller/portfolioControllers')
const router = express.Router();

router.post("/contact", createContact)

module.exports = router