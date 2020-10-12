import React from 'react';
import './App.css';
import Nav from './components/nav'
import Header from './components/header'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/contact'>
          <Nav />
        </Route>
        <Route path='/projects'>
          <Nav />
          <Portfolio />

        </Route>
        <Route path='/skillset'>
          <Nav />
          <Skills />
        </Route>
        <Route path='/'>
          <Nav />
          <Header />
          <Portfolio />
          <Skills />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
