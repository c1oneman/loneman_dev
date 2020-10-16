//rgb(32, 35, 41)
import React from 'react';
import '../App.css';

import styled from 'styled-components';
const FooterStyled = styled.div`
    display: flex;
    webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: column nowrap;
    background: rgb(20, 20, 20);
    color: rgb(158, 158, 158);
    width: 100%;
    p:hover {
        color:orange;
    }
    p {
        padding-bottom: 12px;
    }
    .heart{color:#e25555;}
    .netlify {
    background-color: white;
    border-radius: 10px;
        padding:12px;
    margin-bottom: 12px;
    }
    .netlifyLogo {
    display: flex;
    justify-content: center;

    height:25px;
    }

    .socials i {
    padding:20px;
    color:gray;
    }
    .socials i:hover {
    padding:20px;
    color:orange;
    }
`
const Footer = (props) => {

    return (

        <FooterStyled>
            <div className='socials'>
                <a href='https://twitter.com/c1oneman' target='_blank' rel="noopener noreferrer"><i className={`fab fa-twitter fa-1x`} /></a>
                <a href='https://www.linkedin.com/in/clayton-loneman-7788771b7/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-1x" /></a>
                <a href='https://www.github.com/c1oneman' target='_blank' rel="noopener noreferrer"><i class="fab fa-github fa-1x" /></a>

            </div>
            <a href='https://netlify.com' target='_blank' rel="noopener noreferrer">
                <div className='netlify shadow-4'>
                    <img className='netlifyLogo' src='/images/full-logo-light.png' alt='Deployed with Netlify' />
                </div>
            </a>

            <p className='nohand'>Made with <span class="heart">❤</span> in Nebraska</p>
        </FooterStyled>
    );
}

export default Footer;