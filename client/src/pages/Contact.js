import axios from 'axios'
import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {

    const [status, setStatus] = React.useState("Submit")
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")

    const data = {
        name,
        email, 
        message
    }

    const sendEmail = async (e) => {
        e.preventDefault()

        setStatus("Sending...");

        try {
            await axios.post(`https://aldoportillo-portfolio.onrender.com/api/contact`, data)
            alert("sent")
            setName("")
            setEmail("")
            setMessage("")
            setStatus("Submit");
        } catch (err) {
            alert("error")
        }
    }

  return (
    <div className='contact-page'>
        <div className='contact-form'>
            <h3>Contact Me!</h3>
            <ContactForm status={status} sendEmail={sendEmail} setName={setName} setEmail={setEmail} setMessage={setMessage} />
        </div>
    </div>
  )
}
