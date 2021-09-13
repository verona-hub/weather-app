import React from 'react';


const ScrollToTopHomepage = ({ darkMode }) => {

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const darkScrollToTop = darkMode && 'ScrollToTopHomepage_dark';

    return (
        <div onClick={scrollToTop} className={`ScrollToTopHomepage ${darkScrollToTop}`}>
            <div className="main">
                <div className="arrow"> </div>
                <p> Scroll to Top </p>
                <div className="arrow"> </div>
            </div>
        </div>
    );
};

export default ScrollToTopHomepage;
