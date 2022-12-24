import React from 'react'

export default function Contact() {

  const [status, setStatus] = React.useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://aldoportillo-portfolio.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
       body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className='contact-page'>
        <h3>Contact Me!</h3>
        <form onSubmit={handleSubmit}>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" required></input>
            <label for="email">E-mail: </label>
            <input type="email" id="email" name="email" required></input>
            <label for="message">Message: </label>
            <input type="text" id="message" name="message" required></input>
            <button className='button'>{status}</button>
        </form>
    </div>
  )
}
