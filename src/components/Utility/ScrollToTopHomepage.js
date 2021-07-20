import React from 'react';


const ScrollToTopHomepage = () => {
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <div onClick={scrollToTop} className="ScrollToTopHomepage">
            <div className="main">
                <div className="arrow"> </div>
                <p> Scroll to Top </p>
                <div className="arrow"> </div>
            </div>
        </div>
    );
};

export default ScrollToTopHomepage;
