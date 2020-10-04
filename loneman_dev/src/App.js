import React from 'react';
import './App.css';
import Nav from './components/nav'
import Header from './components/header'
import Portfolio from './components/portfolio'
import Skills from './components/skills'

function App() {
  return (
    <div className='App'>
        <Nav/>
        <Header/>
        <Portfolio/>
        <Skills/>
        <h1>Netlify Tw1</h1>
    </div>
  );
}

export default App;
