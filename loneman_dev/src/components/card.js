import React from "react";
import { CardContainer } from "../styled-components/portfolio";
const Character = (props) => {
  const project = props.project;
  return (
    <CardContainer className="shadow-4">
      <div className="left">
        <img className="cover" src={project.img} alt={project.name} />
      </div>
      <div className="nohand right">
        <h1 className="hand">{project.name}</h1>
        <h2>What is it?</h2>
        <p>{project.description}</p>
        <h2>Technologies Used</h2>
        <div className="techSection">
          {project.technologies.map((tech, index) => (
            <p className="nohand techBubble" key={`tech-${index}`}>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </CardContainer>
  );
};

export default Character;
