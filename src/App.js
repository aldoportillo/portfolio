import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <h2>Hello, my name is Aldo Portillo!</h2>

        <p> I am a software developer who specializes in the MERN stack. Aside from coding I enjoy bartending and training in MMA.</p>
        
        <p>Check out <a href="#">my projects</a>, <a href="#">my blogs</a>, and <a href="#">my sparring footage</a>. </p>

        <img src={require('./media/redrocks.png')} />

      </div>
      <Footer />
    </div>
  );
}

export default App;
