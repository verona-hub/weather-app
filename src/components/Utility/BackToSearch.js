import React from 'react';
import { NavLink } from 'react-router-dom';
import left from '../../img/left.png';


// Function that takes you to the Homepage
const BackToSearch = () => {
    //Scroll to top with a smooth effect
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <div className="BackToSearch">
            <button onClick={ scrollToTop } className="button button_to_left">
                <NavLink to='/'>
                    <img src={ left } alt="back to search icon"/>
                    <p> Back to search </p>
                </NavLink>
            </button>
        </div>
    )
};


export default BackToSearch;