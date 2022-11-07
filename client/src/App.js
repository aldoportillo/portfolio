import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import { blogDataAPI } from './data/blogData';
import BlogEntry from './components/BlogEntry';
import { nanoid } from 'nanoid';

function App() {


  const [blogData, setBlogData] = React.useState(blogDataAPI) //This will soon be from the API and just called blogData

    // React.useEffect(()=> {
    //     fetch('/blogs')
    //     .then(res => res.json())
    //     .then(data => setBlogData(data)) 
   
    // }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog/*" element={<Blog blogData={blogData}/>} />
        <Route path="/contact" element={<Contact />} />

        {blogData.map(blog => {
          return (<Route key={nanoid()} path={`/blog/${blog.title}`} exact element={<BlogEntry title={blog.title} content={blog.content} imgArr={blog.images}/> } />) //This will create the Blog entry pages
        } )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
