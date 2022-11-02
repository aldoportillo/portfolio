const express = require("express")
const app = express();


const Contact = require('./models/contact')

app.get("/api", (req, res) => {
    res.json({"randomArr": [1,2,3]})
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