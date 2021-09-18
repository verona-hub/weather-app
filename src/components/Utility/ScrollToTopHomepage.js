import React from 'react';


const ScrollToTopHomepage = ({ darkMode }) => {

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const ScrollToTopDark = darkMode && 'ScrollToTopHomepage_dark';
    const ScrollToTop = `ScrollToTopHomepage ${ScrollToTopDark}`;

    return (
        <div onClick={scrollToTop} className={ ScrollToTop }>
            <div className="main">
                <div className="arrow"> </div>
                <p> Scroll to Top </p>
                <div className="arrow"> </div>
            </div>
        </div>
    );
};

export default ScrollToTopHomepage;
