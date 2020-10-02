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
margin-bottom:1%;
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
    <ContentView>
    <a className = 'button' href = 'https://github.com/c1oneman' target = '_blank' rel="noopener noreferrer">View Github</a>
    </ContentView>
     
    </div>
  );
}

export default Portfolio;