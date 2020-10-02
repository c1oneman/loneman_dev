import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import Card from './card.js'
const ContentView = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1600px;
justify-content: center;
margin-left: auto;
margin-right: auto;
`

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

    <a rel="noopener noreferrer" target = '_blank' href = 'https://github.com/c1oneman'>Github</a>
    
     
    </div>
  );
}

export default Portfolio;