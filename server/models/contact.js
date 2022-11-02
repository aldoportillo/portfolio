const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contactSchema = new Schema({
    'first-name': {
        type: String,
        required: true,
    },
    'last-name': {
        type: String,
        required: true,
    }, 
    'email': {
        type: String,
        required: true,
    }
}, { timestamps: true, })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;