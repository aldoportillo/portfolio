import React from 'react'

export default function ContactForm({status, sendEmail, setName, setEmail, setMessage}) {
  return (
    <form onSubmit={sendEmail}>
        <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} required></input>
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required></input>
            <label htmlFor="message">Message: </label>
            <input type="text" id="message" name="message" onChange={(e) => {setMessage(e.target.value)}}required></input>
            <button className='button'>{status}</button>
        </form>
  )
}
