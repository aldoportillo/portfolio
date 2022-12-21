import React from 'react';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogEntry from './components/BlogEntry';
import { nanoid } from 'nanoid';
import PageContainer from './components/PageContainer';
import axios from 'axios';
import env from 'react-dotenv';

function App() {

  const [blogData, setBlogData] = React.useState([])


  React.useEffect(() => {
    axios.get(`https://aldoportillo-portfolio.onrender.com/api/blogs`) //Modify to Render API
      .then(res => {
        setBlogData(res.data)
      })
  }, [])

  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageContainer children={<Home />}/>} />
        <Route path="/projects" element={<PageContainer children={<Projects />} />} />
        <Route path="/blog/*" element={<PageContainer children={<Blog blogData={blogData}/>} />}/>
        <Route path="/contact" element={<PageContainer children={<Contact />} />} />

        {blogData.map(blog => {
          return (<Route key={nanoid()} path={`/blog/${blog.title}`} exact element={
            <PageContainer children={<BlogEntry title={blog.title} content={blog.content} imgArr={blog.images}/>}/> 
          } />) 
        } )}
      </Routes>
    </div>
  );
}

export default App;
