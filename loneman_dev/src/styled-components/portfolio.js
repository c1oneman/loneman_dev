import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 45%;
  min-width: 400px;
  background-color: #3c3e44;
  border-radius: 0.5rem;
  margin: 0.75rem;
  .left {
    width: 33%;
  }
  .right {
    width: 66%;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 8px;
  }
  .left img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
    object-fit: cover;
  }
  .techSection {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3px;
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
    transition: all 0.3s ease 0s;
  }
  .techBubble:hover {
    background-color: black;
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
  a {
    color: white;
  }
  a:hover {
    color: #c5c5c5;
  }
  h1 {
    margin: 3px 0px;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.2rem;
    color: lightgrey;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
  }
`;
