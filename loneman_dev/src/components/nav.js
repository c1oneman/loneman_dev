import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

import styled from 'styled-components';
const NavBar = styled.div`
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
  display:inline-block;
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
  height:60px;
  border-radius: 50%;
}
  @media (max-width: 480px) {
    display:flex;
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
    margin:auto;
    }
  }
`
const Nav = (props) => {

  return (
    <NavBar>
    
      <Link className='logo' to = '/'>
      <img className='logo' src='/images/profile.png' alt='Clayton Loneman' />
      </Link>
     
      <nav>
        <ul className='nav__links'>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/skillset'>Skillset</Link></li>
        </ul>
      </nav>
      <Link to='/contact' className = 'button cta mg-l' href = 'https://github.com/c1oneman' rel="noopener noreferrer">Reach Out</Link>
    </NavBar>

  );
}

export default Nav;