import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar, Brand , CTA } from './components';
// to export all of these components form a single file
import './App.css';


const App = () => {
  return (
    <div className= "App">
      <div className= "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/> 
    </div>
  );
}
// her birini seperat ederek tek bir app içinde yazabildik
export default App