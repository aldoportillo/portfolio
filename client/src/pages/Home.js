import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='main-content'>
        <div className='intro'>
          <h2>Hello, my name is Aldo Portillo!</h2>
          <p> I am a software developer who specializes in the MERN stack. Aside from coding I enjoy bartending and training in MMA.</p>         
          <p>Check out <Link to="/projects">my projects</Link>, <Link to="/blog">my blogs</Link>, and <a href="https://www.youtube.com/@portillomma" target={"_blank"} rel="noreferrer">my sparring footage</a>. </p>
          <div className='stack'>
            <h3>Technologies: </h3> 
            <div className='stack-icons'>
              <img src={'https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145'} alt=""/>
              <img src={'https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642'} alt=""/>
              <img src={'https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465'} alt=""/>
              <img src={'https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465' } alt=""/>
              <img src={'https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465'} alt=""/>
              <img src={'https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465'} alt=""/>
              <img src={'https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465'} alt=""/>
              <img src={'https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642'} alt=""/>
              <img src={'https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465'} alt=""/>
              <img src={'https://camo.githubusercontent.com/a44844ce4d3bf26f4685d5ae0e0fab359cdeca62ad71c675d3d89fd30f418665/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61726b646f776e2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465'} alt=""/>
            </div>
          </div>
          <div className='socials'>
            <h3>Socials: </h3>
            <div className='social-icons'>
                <a href={'https://www.linkedin.com/in/aldo-portillo-09b187253/'} target={"_blank"} rel="noreferrer"><img src={require('../media/linkedin-icon.png')} alt="" /></a>
                <a href={'https://github.com/aldoportillo'} target={"_blank"} rel="noreferrer"><img src={require('../media/github-icon.png')} alt="" /></a>
                <a href={'https://www.instagram.com/portillo.mma/'} target={"_blank"} rel="noreferrer"><img src={require('../media/insta-icon.png')} alt=""/></a>
                <a href={'https://twitter.com/aldoportillodev'} target={"_blank"} rel="noreferrer"><img src={require('../media/twitter-icon.png')} alt=""/></a>
            </div>
          </div>
        </div>
        <div className='main-image'>
          <img src={require('../media/redrocks.png')}  alt=""/>
        </div>
      </div>
  )
}
