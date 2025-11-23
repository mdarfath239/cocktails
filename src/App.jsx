import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="content">
        {/* Content below hero can go here */}
      </div>
    </>
  );
}

export default App;
