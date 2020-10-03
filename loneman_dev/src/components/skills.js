import React, { useState } from 'react';
import '../App.css';
import Skill from './skill'
import styled from 'styled-components';
const SkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:1%;
    margin-top: 15px;
    max-width:1600px;

`
function Skills() {
  const skillsData = require('../data/portfolioData');

  const [skills] = useState(skillsData.skills);
  return (
    <SkillContainer>
      { skills.map((skill, index) => (
        <Skill key={`skill-${index}`} skill={skill} />
      ))}
    </SkillContainer>
  );
}

export default Skills;