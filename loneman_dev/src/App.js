import React from 'react';
import './App.css';
import Nav from './components/nav'
import Header from './components/header'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import Skills from './components/skills'
import Contact from './components/Contact'
import RetroHitCounter from './components/HitCounter'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <div className='content-wrap'>
        <Nav />
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Portfolio />
          </Route>
          <Route path='/skillset'>
            <Skills />
          </Route>
          <Route path='/'>
            <Header />
            <Portfolio />
            <Skills />
            <RetroHitCounter
              slug={'homepage'} />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
