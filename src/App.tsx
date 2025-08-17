import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EissaTextLogo } from 'react-reusable-elements';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
