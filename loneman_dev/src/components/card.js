import React from "react";
import { CardContainer } from "../styled-components/portfolio";
const Character = (props) => {
  const project = props.project;
  var divStyle = {
    backgroundImage: "url(" + project.img + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  console.log(divStyle)
  return (
    <CardContainer className="shadow-4">
      <div style={divStyle} className="left">
        <></>
      </div>
      <div className="nohand right">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <h1 className="hand">{project.name}</h1>
        </a>
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
