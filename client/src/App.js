import React from 'react';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import { blogDataAPI } from './data/blogData';
import BlogEntry from './components/BlogEntry';
import { nanoid } from 'nanoid';
import PageContainer from './components/PageContainer';

function App() {


  const [blogData, setBlogData] = React.useState(blogDataAPI) //This will soon be from the API and just called blogData

    // React.useEffect(()=> {
    //     fetch('/blogs')
    //     .then(res => res.json())
    //     .then(data => setBlogData(data)) 
   
    // }, [])
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
