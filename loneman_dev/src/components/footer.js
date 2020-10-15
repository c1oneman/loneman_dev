//rgb(32, 35, 41)
import React from 'react';
import '../App.css';


function Footer() {

    return (

        <div className='footer'>
            <div className='netlify'>
                <img className='netlifyLogo' src='/images/full-logo-light.png' alt='Deployed with Netlify' />
            </div>
            <p>Made with <span class="heart">❤</span> in Nebraska</p>
        </div>
    );
}

export default Footer;