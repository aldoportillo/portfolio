import React from 'react'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='intro'>
        <h3>Hello world, I'm</h3>
        <h2>Aldo Portillo</h2>
        <h3>Software Engineer</h3>
        <p>I maintain an ever-curious mindset, constantly seeking the most optimal solutions to every challenge. My innate inquisitiveness, coupled with an analytical approach, drives my problem-solving abilities.</p>
        <img src={require('../media/roofTopClear.PNG')} alt="its me" />
      </div>
      <div className='about-me'>
        <h2>About Me</h2>
        <p>Greetings, I'm Aldo Portillo, and I'm thrilled to welcome you into my world, a dynamic blend of diverse passions and unyielding dedication. With a unique background in Chemistry, Coding, and Bartending, I've cultivated a multifaceted skill set that shapes my perspective and fuels my endeavors. Beyond my professional interests, you'll find me immersed in the world of MMA, where discipline, challenge, and growth converge.</p>
        <p>Currently, I'm channeling my chemistry and software engineering into <a href="https://www.neatonthe.rocks/" target={"_blank"} rel="noreferrer">Neat on the Rocks</a>, an all-in-one web app that seamlessly merges the realms of science and mixology, catering to cocktail enthusiasts and science aficionados alike. In the realm of scholarship, I've been honored with grants to study Russian, a language that unlocks new cultures and perspectives. Additionally, I've proudly earned medals at Brazilian Jiu-Jitsu tournaments, a testament to my unwavering dedication and discipline.</p>
        <p>At the core of my life are values of honor, respect, and an unwavering commitment to personal growth, not just for my own enrichment, but also to make a positive impact on society and the people close to my heart. As I continue this journey, I remain open to new adventures and challenges that life may offer. Thank you for being a part of this voyage, and I look forward to connecting with you as we explore the world of software, mixology, martial arts, and personal growth together.</p>
      </div>
      <div className='stack'>
        <h2>Technologies</h2> 
        <div className='stack-icons'>
          <img src={'https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145'} alt="javascript icon"/>
          <img src={'https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642'} alt="react icon"/>
          <img src={'https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465'} alt="react router icon"/>
          <img src={'https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465' } alt="css3 icon"/>
          <img src={'https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465'} alt="node.js icon"/>
          <img src={'https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465'} alt="npm icon"/>
          <img src={'https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465'} alt="mongoDB icon"/>
          <img src={'https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642'} alt="express.js icon"/>
          <img src={'https://camo.githubusercontent.com/a44844ce4d3bf26f4685d5ae0e0fab359cdeca62ad71c675d3d89fd30f418665/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61726b646f776e2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465'} alt="markdown icon"/>
          <img src={'https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white'} alt="ruby icon"/>
          <img src={'https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE'} alt="insomnia icon"/>
          <img src={'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white'} alt="figma icon"/>
          <img src={'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white'} alt="vercel icon"/>
         </div>
        </div>
      <div className='bartending'>
        <h2>Bartending</h2>
        <p>Thanks to my background in chemistry, I discovered a fascinating synergy with bartending. Both disciplines share striking similarities; they involve gathering diverse elements to craft something new. In therms of bartending, something truly enjoyable.</p>
        <p>My insatiable analytical curiosity goes beyond merely mixing a cocktail. I crave a deeper understanding. How does dilution transform the flavor of a cocktail? What macronutrients contribute to its composition? And, let's not forget the metabolic pathway of alcohol in the body.</p>
        <p>In response to these burning questions, I birthed <a href="https://www.neatonthe.rocks/" target={"_blank"} rel="noreferrer">Neat on the Rocks</a> It's a passionate endeavor, a cocktail of chemistry and mixology knowledge. I'm thrilled to announce the launch of our <a href="https://www.neatonthe.rocks/macro" target={"_blank"} rel="noreferrer">macronutrient calculator</a>, and the excitement doesn't stop there. Our latest updates include a <a href="https://www.neatonthe.rocks/dilution" target={"_blank"} rel="noreferrer">dilution calculator</a> and a <a href="https://www.neatonthe.rocks/myBAC" target={"_blank"} rel="noreferrer">BAC (Blood Alcohol Content) tracker</a>. Stay tuned for further updates as we continue to stir up new experiences.</p>
        <p>I created  to help answer these questions. There are further updates soon to come, but I am glad to have the  live.</p>
      </div>
    </div> 
  )
}
 