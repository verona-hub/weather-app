import React from 'react';
import image from '../../img/arrow-up.svg';


const ScrollToTopHomepage = () => {
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <div className="ScrollToTopHomepage">
            <div className="main">
                <img src={image} alt=""/>
                {/*<div className="box"> </div>*/}
                <p> Scroll to Top </p>
                <img src={image} alt=""/>
                {/*<div className="box"> </div>*/}
            </div>
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
