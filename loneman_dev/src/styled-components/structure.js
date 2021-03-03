import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-flow: column nowrap;
  background: rgb(20, 20, 20);
  color: rgb(158, 158, 158);
  width: 100%;
  p:hover {
    color: orange;
  }
  p {
    padding-bottom: 12px;
  }
  .heart {
    color: #e25555;
  }
  .netlify {
    background-color: white;
    border-radius: 10px;
    padding: 6px 12px;
    margin-bottom: 12px;
  }
  .netlifyLogo {
    display: flex;
    justify-content: center;
    height: 25px;
  }
  .m1 {
    margin-bottom: 16px;
  }
  .socials i {
    padding: 20px;
    color: gray;
  }
  .socials i:hover {
    padding: 20px;
    color: orange;
  }
  .hitBox {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
  }
  .hitBox i {
    padding: 5px;
    color: gray;
  }
  .hitBox:hover {
    i {
      padding: 5px;
      color: white;
    }
  }
`;
export const ContentView = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5% 0px;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 12%;
  .nav__links {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav__links li {
    display: inline-block;
    padding: 0 20px;
  }
  .nav__links a {
    transition: all 0.3s ease 0s;
  }
  .nav__links a:hover {
    color: #2444fd;
  }
  .logo {
    margin-right: auto;
    object-fit: contain;
    height: 60px;
    border-radius: 50%;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 16px auto;
    padding: 0px 0px;

    .nav__links {
      margin: 10px 0px;
      flex-basis: 100%;
    }
    .nav__links li {
      flex-basis: 100%;
    }
    .logo {
      margin: auto;
    }
  }
`;
