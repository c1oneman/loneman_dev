import React, { useState } from 'react';
import '../App.css';
import Skill from './skill';
import { SkillContainer } from '../styled-components/skills';
function Skills() {
  const skillsData = require('../data/portfolioData');

  const [skills] = useState(skillsData.skills);
  return (
    <SkillContainer>
      {skills.map((skill, index) => (
        <Skill key={`skill-${index}`} skill={skill} />
      ))}
    </SkillContainer>
  );
}

export default Skills;
