import styled from "styled-components";
export const FormStyled = styled.div`
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  label {
    margin: 0 5px 0 0;
  }
  input {
    background: #eff1f5;
    border: none;
    font-size: 16px;
    padding: 8px 12px 4px;
    outline: none;
    width: 100%;
  }
  @media (max-width: ${675}px) {
    form {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const ContactBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  .right {
    margin: 12px;
    width: 20%;
    padding: 25px;
    img {
      width: 100%;
    }
  }
  .left {
    margin: 12px;
    width: 66%;
  }
  @media (max-width:${675}px) {
    .right {
      display:none;
    }
    .left {
      width: 100%;
    }
  }
`;
export const Inputs = styled.div`
  margin: 10px 15px 0 0;
  display: flex;
  flex-direction: column;
  @media (max-width: ${675}px) {
    width:90%;
  }
`;
export const BottomBorder = styled.div`
  height: 3px;
  border-radius: 2px;
  background: black;
  opacity: 1.0;
`;