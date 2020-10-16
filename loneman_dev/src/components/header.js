import React from 'react';
import '../App.css';

import styled from 'styled-components';
const HeaderStyled = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  padding: 5% 0px;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
`
const Header = (props) => {

  return (
    <HeaderStyled>
      <h1>Clayton Loneman's Development Page</h1>
    </HeaderStyled>
  );
}

export default Header;