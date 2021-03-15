import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../img/sun.svg';

// Components
import Modal from '../Utility/Modal';


const Navbar = ({ text, emptyContent, spinner, errorMessage, errorCode, clearError, modal, search, cancelSearch }) => {

    const headerChange = window.location.pathname === '/about' ? 'header_100'
        : ( window.location.pathname === '/' && emptyContent  ? ' header_100'
            : (window.location.pathname !== ('/' || '/about') ? ' header_no-image' : 'header_70'));

    return (
        <div className={`header ${headerChange}`}>
            <nav className= { modal ? 'navbar navbar_dark' : 'navbar'}>
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
                            cancelSearch={ cancelSearch }
                        />
                    )
                }
            </nav>

        </div>


    );
};


export default Navbar;
