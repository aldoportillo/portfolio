const Contact = require('../models/contact')

const createContact = async (req, res) => {
    try{
        const contact = await Contact.create(req.body)
        res.status(200).json(contact)
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

module.exports = {
    createContact,
}