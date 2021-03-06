import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../img/sun.svg';

// Components
import Modal from '../Utility/Modal';


const Navbar = ({ text, emptyContent, spinner, errorMessage, errorCode, clearError, modal, search, abortSearch }) => {

    const homePage = window.location.pathname === '/';
    const aboutPage = window.location.pathname === '/about';
    const otherPages = window.location.pathname !== '/' && window.location.pathname !== '/about';

    const headerChange = aboutPage ? 'header_100'
        : ( homePage && emptyContent  ? ' header_100'
            : (window.location.pathname !== ('/' || '/about') ? ' header_404' : 'header_70'));

    const otherNavbar = otherPages ? 'navbar_other' : 'navbar';

    return (
        <div className={`header ${headerChange} `}>
            <nav className= { modal ? 'navbar navbar_dark' : `navbar ${otherNavbar}` }>
                <NavLink to='/' activeClassName='active' exact className='logo_wrapper'>
                    <img src={ logo } alt="logo icon" className="logo_img"/>
                    <div className='nav_link_item'>Weather App</div>
                </NavLink>
                <NavLink to='/about' activeClassName='active' exact>
                    <div className='nav_link_item about'>About</div>
                </NavLink>

                {
                    modal && (
                        <Modal
                            spinner={ spinner }
                            text={ text }
                            errorMessage={ errorMessage }
                            errorCode={ errorCode }
                            clearError={ clearError }
                            search={ search }
                            abortSearch={ abortSearch }
                        />
                    )
                }
            </nav>
        </div>
    );
};


export default Navbar;
