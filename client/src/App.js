import React from 'react';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogEntry from './components/BlogEntry';
import PageContainer from './components/PageContainer';
import axios from 'axios';
import NewBlogs from './pages/NewBlogs';

function App() {

  const [blogData, setBlogData] = React.useState([])
  const [projectData, setProjectData] = React.useState([])
  const [areBlogsLoading, setAreBlogsLoading] = React.useState(true)
  const [areProjectsLoading, setAreProjectsLoading] = React.useState(true)

  const [devData, setDevData ] = React.useState([])
  const [isDevLoading, setIsDevLoading] = React.useState(true)


  React.useEffect(() => {
    axios.get(`https://aldoportillo-portfolio.onrender.com/api/blogs`) //Modify to Render API
      .then(res => {
        setAreBlogsLoading(false)
        setBlogData(res.data)
      })
      axios.get(`https://aldoportillo-portfolio.onrender.com/api/projects`) //Modify to Render API
      .then(res => {
        setAreProjectsLoading(false)
        setProjectData(res.data)
        
      })

      axios.get(`https://dev.to/api/articles?username=aldoportillo`)
      .then(res => {
        setDevData(res.data)
        setIsDevLoading(false)
      })
  }, [])

  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageContainer children={<Home />}/>} />
        <Route path="/projects" element={<PageContainer children={<Projects isLoading={areProjectsLoading} projectData={projectData}/>} />} />
        <Route path="/blog1/" element={<PageContainer children={<Blog isLoading={areBlogsLoading} blogData={blogData}/>} />}/>
        <Route path="/blog1/:id" element={<PageContainer children={<BlogEntry />} />} />
        <Route path="/contact" element={<PageContainer children={<Contact />} />} />
        <Route path="/blog" element={<PageContainer children={<NewBlogs devData={devData} />} />} />
      </Routes>
    </div>
  );
}

export default App;
