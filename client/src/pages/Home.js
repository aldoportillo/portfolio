import React from 'react'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='intro'>
        <h3>Hello world, I'm</h3>
        <h2>Aldo Portillo</h2>
        <h3>Software Engineer</h3>
        <p>I keep an always-learning mindset to come to the most optimal solution to any problem. Inquisitive by nature with an analytical mindset.</p>
        <button>Reach Out To Me</button>
        <button>See My Projects</button>
        <img src={require('../media/roofTopClear.PNG')} alt="its me" style={{ width: "50vw", height: "50vw", backgroundColor: "black", borderRadius: "100px"}} />
      </div>
      <div className='about-me'>
        <h2>About Me</h2>
        <p>Aside from coding, I enjoy bartending and training in MMA. Check out my sparring footage.</p>
      </div>
    </div> 
  )
}
 