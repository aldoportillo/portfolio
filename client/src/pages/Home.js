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
        <img src={require('../media/roofTopClear.PNG')} alt="its me" style={{ width: "50vw", height: "50vw", backgroundColor: "black", borderRadius: "100vw"}} />
      </div>
      <div className='about-me'>
        <h2>About Me</h2>
        <p>I come from a chemistry background with the intention to attend medical school. Even though I loved chemistry and was fascinated with the idea of becoming a surgeon, I've always had this itch on the back of my head that was telling me becoming a Software Engineer is what I actually wanted.</p>
        <p>Aside from coding, I enjoy bartending and training in MMA. Check out my sparring footage.</p>
      </div>
      <div className='bartending'>
        <h2>Bartending</h2>
        <p>Due to my chemistry background, I decided to learn about bartending. In my eyes it was very similar, gather reagents and make a product. A product that can be enjoyed.</p>
        <p>My analytical mindset isn't just happy with making a cocktail. I want to know more. How does dilution affect a cocktail, what are the macronutrients in a cocktail, what cool shots can be created using density.</p>
        <p>I created <a href="https://www.neatonthe.rocks/">Neat on the Rocks</a> to help answer these questions. There are further updates soon to come, but I am glad to have the <a href="https://www.neatonthe.rocks/macro">macronutrient calculator</a> live.</p>
      </div>
    </div> 
  )
}
 