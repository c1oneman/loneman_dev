//rgb(32, 35, 41)
import React from 'react';
import '../App.css';
import { FooterStyled } from '../styled-components/structure'
import RetroHitCounter from './HitCounter'

const Footer = (props) => {

    return (

        <FooterStyled>
            <div className='socials'>
                <a href='https://twitter.com/c1oneman' target='_blank' rel="noopener noreferrer"><i className={`fab fa-twitter fa-1x`} /></a>
                <a href='https://www.linkedin.com/in/clayton-loneman-7788771b7/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-1x" /></a>
                <a href='https://www.github.com/c1oneman' target='_blank' rel="noopener noreferrer"><i className="fab fa-github fa-1x" /></a>

            </div>
            <a href='https://netlify.com' target='_blank' rel="noopener noreferrer">
                <div className='netlify shadow-4'>
                    <img className='netlifyLogo' src='/images/full-logo-light.png' alt='Deployed with Netlify' />
                </div>
            </a>

            <p className='nohand'>Made with <span className="heart">❤</span> in Nebraska</p>
            <RetroHitCounter
                slug={'dev'} />
        </FooterStyled>
    );
}

export default Footer;