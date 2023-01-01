import React from 'react';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogEntry from './components/BlogEntry';
import PageContainer from './components/PageContainer';
import axios from 'axios';

function App() {

  const [blogData, setBlogData] = React.useState([])
  const [projectData, setProjectData] = React.useState([])
  const [areBlogsLoading, setAreBlogsLoading] = React.useState(true)
  const [areProjectsLoading, setAreProjectsLoading] = React.useState(true)


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
  }, [])

  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageContainer children={<Home />}/>} />
        <Route path="/projects" element={<PageContainer children={<Projects isLoading={areProjectsLoading} projectData={projectData}/>} />} />
        <Route path="/blog/" element={<PageContainer children={<Blog isLoading={areBlogsLoading} blogData={blogData}/>} />}/>
        <Route path="/blog/:id" element={<PageContainer children={<BlogEntry />} />} />
        <Route path="/contact" element={<PageContainer children={<Contact />} />} />
      </Routes>
    </div>
  );
}

export default App;
