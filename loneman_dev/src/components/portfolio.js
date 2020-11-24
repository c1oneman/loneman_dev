import React, { useState } from 'react';
import '../App.css';
import Card from './card.js'

import { ContentView } from '../styled-components/structure'

function Portfolio() {
  const portfolioData = require('../data/portfolioData');

  const [projects] = useState(portfolioData.portfolioData);
  
  
  return (
    <div className = 'darkSection'>
    <ContentView>
    {
      projects.map((project, index) => (
      <Card key={`card-${index}`} project={project}/>
      ))
     }
    </ContentView>
    <ContentView>
    <a className = 'button' href = 'https://github.com/c1oneman' target = '_blank' rel="noopener noreferrer">View <span className='bold'>GitHub</span></a>
    </ContentView>
     
    </div>
  );
}

export default Portfolio;