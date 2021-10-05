import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../img/sun.svg';

// Components
import Modal from '../Utility/Modal';


const Navbar = ({ text, emptyContent, spinner, errorMessage, errorCode, clearError, modal, search, abortSearch, darkMode }) => {

    const headerHomePage = window.location.pathname === '/';
    const aboutPage = window.location.pathname === '/about';

    const headerChange = aboutPage ? 'header_100'
        : ( headerHomePage && emptyContent  ? ' header_100'
            : (window.location.pathname !== ('/' || '/about') ? ' header_404' : 'header_70'));

    const headerDark = darkMode && !modal && 'header_dark_mode';
    const header = `header ${headerChange} ${headerDark}`;

    return (
        <div className={ header }>
            <nav className= 'navbar'>
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
                            darkMode={ darkMode }
                        />
                    )
                }
            </nav>
        </div>
    );
};


export default Navbar;
