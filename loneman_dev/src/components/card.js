import React from "react"
import styled from 'styled-components';
const CardContainer = styled.div`
    display:flex;
    width: 30%;
    min-width:400px;
    background-color:#3c3e44;
    border-radius: 0.5rem;
    margin: 0.75rem;
    .left {
        width:33%;
    }
    .right {
        width:66%;
        color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        padding-left: 10px;

    }
    .left img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem 0 0 0.5rem;
        object-fit: cover;
    }
    .techSection {
        display:flex;
        flex-wrap: wrap;
    }
    .techSection p {
        margin: 2px;
    }
    .techBubble {
        padding: 5px 15px;
        background-color: #242424;
        color: white;
        border-radius: 50px;
        font-size: 16px;
    }
    p {
        padding-bottom: 5px;
    }
    .marquee {
    background-color: #ddd;
    width: 100px;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    }
    h1 {
        font-size:1.5rem;
    }
    h2 {
        font-size:1.2rem;
        color: lightgrey;
        font-weight: 500;
    }
    
    @media (max-width:480px) {
        width: 100%;
        min-width:0;
    }
`
const Character = (props) => {
    const project = props.project
    return(
        
        <CardContainer>
            <div className = 'left'>
            <img className = 'cover' src={project.img} alt = {project.name}/>
            </div>
            <div className = 'right'>
            <h1>{project.name}</h1>
            <h2>What is it?</h2>
            <p>{project.description}</p>
            <h2>Technologies Used</h2>
            <div className = 'techSection'>
            {project.technologies.map((tech, index) => (
                <p className='techBubble' key={`tech-${index}`}>{tech}</p>
            ))}
            </div>
            
            </div>
        </CardContainer>
    )
}

export default Character