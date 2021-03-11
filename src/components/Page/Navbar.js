import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/sun.svg';
import Errors from '../Error/Errors';
import Spinner from '../Utility/Spinner';


const Navbar = ({ text, emptyContent, spinner, errorMessage, errorCode, clearError }) => {

    const headerChange = window.location.pathname === '/about' ? 'header_100'
        : ( window.location.pathname === '/' && emptyContent  ? ' header_100' : ' header_70');

    return (
        <div className={`header ${headerChange}`}>
            <nav className= { spinner ? 'navbar navbar_dark' : 'navbar'}>
                <NavLink to='/' activeClassName='active' exact className='logo_wrapper'>
                    <img src={ logo } alt="logo icon" className="logo_img"/>
                    <div className='nav_link_item'>Weather App</div>
                </NavLink>
                <NavLink to='/about' activeClassName='active' exact>
                    <div className='nav_link_item about'>About</div>
                </NavLink>

                {
                    spinner && (
                        <div className="modal">
                            <div className="modal_content">
                                <h2> Searching
                                    {
                                        text === '' ? ' ' :  <span> &ldquo;{ text }&rdquo; </span>
                                    }
                                    in progress...
                                </h2>
                                <Spinner/>
                            </div>
                            <Errors
                                errorMessage={ errorMessage }
                                errorCode={ errorCode }
                                clearError={ clearError }
                            />
                        </div>
                    )
                }
            </nav>

        </div>


    );
};


export default Navbar;
