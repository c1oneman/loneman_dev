import React from 'react';
import './App.css';
import Nav from './components/nav'
import Header from './components/header'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import Skills from './components/skills'
import Contact from './components/Contact'

import { Route, Switch } from 'react-router-dom'
import { HeaderStyled } from './styled-components/structure'

function App() {
  return (
    <div className='App'>
      <div className = 'content-wrap'>
      <Nav />
      <Switch>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/projects'>
          <Portfolio />
        </Route>
        <Route path='/skillset'>
          <HeaderStyled><h1>My skillset includes, but is not limited to:</h1></HeaderStyled>
          <Skills />
        </Route>
        <Route path='/'>
          <Header />
          <Portfolio />
          <Skills />
        </Route>
      </Switch>
      </div>

    <Footer/>
    </div>
  );
}

export default App;
