import React from 'react'
import Project from '../components/Project'

export default function Projects(props) {

  //I will map through projects data to return Project component cards
  return (
    <div className='projects-page'>
      <Project name="BJJ Score Tracker" img={require('../media/projects/bjj-score.png')} />
      <Project name="Rock, Paper, Scissors" img={require('../media/projects/rockpaperscissors.png')} />
      <Project name="Tenzies" img={require('../media/projects/tenzies.png')} />
    </div>
  )
}
