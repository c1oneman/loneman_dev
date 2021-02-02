import React from "react";
import { SkillDiv } from "../styled-components/skills";

const Skill = (props) => {
  const skill = props.skill;

  return (
    <SkillDiv>
      <div className="icon">
        <i className={`${skill.icon} fa-2x`} />
      </div>
      <h1 className="title">{skill.name}</h1>
      <p className="end">{skill.time}</p>
    </SkillDiv>
  );
};

export default Skill;
