import React from 'react';
import arrow_up from '../../img/arrow-up.png';

const ScrollToTopHomepage = () => {
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <div className="ScrollToTopHomepage">
            <div className="box"> </div>
        </div>
        /*<button onClick={ scrollToTop } className='ScrollToTopHomepage'>
            <div className="box">
                <img src={arrow_up} alt="scroll to top arrow"/>
            </div>
            <p> Scroll to Top </p>
            <img src={arrow_up} alt="scroll to top arrow"/>
        </button>*/
    );
};

export default ScrollToTopHomepage;
