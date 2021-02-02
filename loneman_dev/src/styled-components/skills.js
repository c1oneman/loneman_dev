import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  margin-top: 15px;
  max-width: 1600px;
`;

export const SkillDiv = styled.div`
  display: flex;
  width: 20%;
  background-color: #ebf0f2;
  border-radius: 1rem;
  margin: 1rem;
  padding: 10px 15px;
  max-width: 350px;
  align-items: center;
  :hover {
    background-color: #ffd073;
  }
  .icon {
    display: flex;
    padding: 5px;
    background-color: white;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
  }
  :hover {
    cursor: default;
  }

  .end {
    margin-left: auto;
    font-weight: 700;
  }
  .title {
    font-weight: 300;
    margin-left: 5%;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 46%;
    min-width: 0;
    margin: 2%;
    padding: 10px 10px;
    .icon {
      display: none;
    }
  }
`;
