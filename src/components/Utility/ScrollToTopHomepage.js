import React from 'react';

const ScrollToTopHomepage = () => {
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
            <button onClick={ scrollToTop } className='ScrollToTopHomepage'>
                Scroll to Top
            </button>
    );
};

export default ScrollToTopHomepage;
