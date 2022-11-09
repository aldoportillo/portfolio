const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const portfolioRoutes = require('./routes/portfolioRoutes')

const app = express()

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on Port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use(portfolioRoutes)

app.get("/", (req, res) => {
    res.send("<h1>Welcome Aldo Portillo's Portfolio Server</h1> <p>Please Leave</p>")
})