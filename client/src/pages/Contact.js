import React from 'react'

export default function Contact() {
  return (
    <div className='contact-page'>
        <form method='POST' className='form'>
            <label for="first-name">First Name: </label>
            <input type="text" id="first-name" name="first-name" required></input>
            <label for="last-name">Last Name: </label>
            <input type="text" id="last-name" name="last-name" required></input>
            <label for="email">Last Name: </label>
            <input type="email" id="email" name="email" required></input>
            <button>Submit</button>
        </form>
    </div>
  )
}
