import React from 'react'
import Project from '../components/Project'
import {projectData} from '../data/projectData'

export default function Projects(props) {

  //I will map through projects data to return Project component cards

  const renderProjects = projectData.map(project => {
    return (
      <Project name={project.title} img={project.img} key={project.key} link={project.link} bio={project.bio}/>
    )
  })
  return (
    <div className='projects-page'>
      {renderProjects}
    </div>
  )
}
