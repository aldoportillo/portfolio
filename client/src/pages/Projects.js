import React from 'react'
import Project from '../components/Project'
import axios from 'axios'
import env from 'react-dotenv'

export default function Projects(props) {

  //I will map through projects data to return Project component cards

  const [projectData, setProjectData] = React.useState([])


  React.useEffect(() => {
    axios.get(`${env.API_URL}/api/projects`) //Modify to Render API
      .then(res => {
        setProjectData(res.data)
        console.log(projectData)
        
      })
  }, [projectData])

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
