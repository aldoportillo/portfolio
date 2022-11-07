import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import { blogData } from './data/blogData';
import BlogEntry from './components/BlogEntry';
import { nanoid } from 'nanoid';

function App() {


    // React.useEffect(()=> {
    //     fetch('/api')
    //     .then(res => res.json())
    //     .then(data => setBackendData(data)) 
   
    // }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog/*" element={<Blog blogData={blogData}/>} />
        <Route path="/contact" element={<Contact />} />

        {blogData.map(m => {
          return (<Route key={nanoid()} path={`/blog/${m.title}`} exact element={<BlogEntry title={m.title} content={m.content}/> } />)
        } )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
