const express = require("express")
const mongoose = require("mongoose")
const app = express();


const Contact = require('./models/contact')

app.get("/blogs", (req, res) => {
    //res.json({"randomArr": [[1,2,3], [4,5,6], [7,8,9]]})
    res.json({"blogs": [{title: 'blog1'}, {title: 'blog2'}, {title: 'blog3'}]})
})

app.get("/projects", (req, res) => {
    res.json({"projects": [{title: 'project1'}, {title: 'project2'}, {title: 'project3'}]})
})

app.post('/contact', (req, res) => {
    const contact = new Contact(req.body)

    contact.save()
      .then((result) => {
          res.redirect('/')
      })
      .catch((err)=> {
          console.log(err)
      })
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})