import React from 'react';


const Footer = () => {

    // About Page location
    const aboutPage = window.location.pathname === '/about';
    // Add the css rule which contains a margin-top value only to the Footer located in the About page
    const aboutFooter = aboutPage && 'Footer_About'

    return (
        <div className={`Footer ${aboutFooter}`}>
            <div className="footer_content">
                <div className="text">
                    <p><span>Powered by&nbsp;</span>
                        <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noreferrer">
                            WeatherAPI.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
