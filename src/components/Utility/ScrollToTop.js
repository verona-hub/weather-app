import React from 'react';
import { NavLink } from 'react-router-dom';
import top from "../../img/top.png";


const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="ScrollToTop">
            <button onClick={ scrollToTop } className="button button_to_top">
                <NavLink to={ `${window.location.pathname}`} >
                    <img src={ top } alt="back to top icon" />
                    <p> Scroll to Top </p>
                </NavLink>
            </button>
        </div>
    )

}


export default ScrollToTop;