import React from 'react'
import Project from '../components/Project' 

export default function Projects({projectData}) {


  const renderProjects = projectData.map(project => {
    return (
      <Project name={project.title} img={project.img} key={project.key} link={project.link} bio={project.bio}/>
    )
  })
  return (
    <div className='projects-page'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {renderProjects}
      </div>
    </div>
  )
}
