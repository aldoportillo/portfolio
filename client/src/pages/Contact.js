import axios from 'axios'
import React from 'react'

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
        <h3>Contact Me!</h3>
        <form onSubmit={sendEmail}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} required></input>
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required></input>
            <label htmlFor="message">Message: </label>
            <input type="text" id="message" name="message" onChange={(e) => {setMessage(e.target.value)}}required></input>
            <button className='button'>{status}</button>
        </form>
    </div>
  )
}
