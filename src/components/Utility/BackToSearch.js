import React from 'react';
import { NavLink } from 'react-router-dom';
import left_arrow_light from '../../img/left.png';
import left_arrow_dark from '../../img/left-dark.png';


// Function that takes you to the Homepage
const BackToSearch = ({ darkMode }) => {
    //Scroll to top with a smooth effect
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const leftArrow = darkMode ? left_arrow_dark : left_arrow_light;

    return (
        <div className="BackToSearch">
            <button onClick={ scrollToTop } className="button button_to_left">
                <NavLink to='/' className="test">
                    <img src={ leftArrow } alt="back to search icon"/>
                    <p> Back to search </p>
                </NavLink>
            </button>
        </div>
    )
};


export default BackToSearch;