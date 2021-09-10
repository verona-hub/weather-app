import React from 'react';


const ScrollToTopHomepage = ({ darkMode }) => {
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    return (
        <div onClick={scrollToTop} className={ darkMode ? 'ScrollToTopHomepage ScrollToTopHomepage_dark' : 'ScrollToTopHomepage ScrollToTopHomepage_light' }>
            <div className="main">
                <div className="arrow"> </div>
                <p> Scroll to Top </p>
                <div className="arrow"> </div>
            </div>
        </div>
    );
};

export default ScrollToTopHomepage;
