import React from 'react';
import { NavLink } from 'react-router-dom';
import top_arrow_light from "../../img/top.png";
import top_arrow_dark from '../../img/left-dark.png';


// Function that scrolls to top of the page
const ScrollToTop = ({ darkMode }) => {
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const dark = darkMode && 'button_to_top_dark';
    const darkArrow = darkMode ? top_arrow_dark : top_arrow_light;


    return (
        <div className="ScrollToTop">
            <button onClick={ scrollToTop } className="button button_to_top">
                <NavLink to={ `${window.location.pathname}`} >
                    <img src={ darkArrow } className={ dark } alt="back to top icon" />
                    <p> Scroll to Top </p>
                </NavLink>
            </button>
        </div>
    )
};


export default ScrollToTop;