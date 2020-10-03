import React from 'react';
import '../App.css';

function Nav() {

  return (
    <header>
    
      <img className='logo' src='/images/profile.png' alt='Clayton Loneman' />
      <nav>
        <ul className='nav__links'>
          <li><a href='http://loneman.dev/projects'>Projects</a></li>
          <li><a href='http://loneman.dev/skillset'>Skillset</a></li>
        </ul>
      </nav>
      <a className = 'button cta' href = 'https://github.com/c1oneman' target = '_blank' rel="noopener noreferrer">Reach Out</a>
    </header>

  );
}

export default Nav;