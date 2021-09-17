import React from 'react';


const Footer = ({ darkMode }) => {

    // About Page location
    const aboutPage = window.location.pathname === '/about';
    // Add the css rule which contains a margin-top value only to the Footer located in the About page
    const aboutFooter = aboutPage && 'Footer_About';
    // Dark mode
    const darkFooter = darkMode && 'Footer_dark';
    const Footer = `Footer ${aboutFooter} ${darkFooter}`;
    const darkFooterPar = darkMode && 'footer_content_dark';
    const footerPar = `footer_content ${darkFooterPar}`;

    return (
        <div className={ Footer }>
            <div className={ footerPar }>
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