import React from 'react'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div className='home-page'>
      <Intro />
      <Skills />
      <Projects />
    </div>
  )
}
 