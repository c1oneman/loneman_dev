import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { NavBar } from '../styled-components/structure';

const Nav = (props) => {
  return (
    <NavBar>
      <Link className='logo' to='/'>
        <img className='logo' src='/images/profile.png' alt='Clayton Loneman' />
      </Link>
      <nav>
        <ul className='nav__links'>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <Link
        to='/contact'
        className='button cta mg-l'
        href='https://github.com/c1oneman'
        rel='noopener noreferrer'>
        Reach Out
      </Link>
    </NavBar>
  );
};

export default Nav;
