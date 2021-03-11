import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/sun.svg';
import Errors from '../Error/Errors';
import Spinner from '../Utility/Spinner';


const Navbar = ({ text, emptyContent, spinner, errorMessage, errorCode, clearError, modal, search }) => {

    const headerChange = window.location.pathname === '/about' ? 'header_100'
        : ( window.location.pathname === '/' && emptyContent  ? ' header_100' : ' header_70');

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
                        <div className="modal">
                            <div className="modal_content">
                                { search && (
                                    <h2>
                                        Searching
                                            <span> &ldquo;{ text }&rdquo; </span>
                                        in progress...
                                    </h2> )
                                }

                                { spinner && ( <Spinner/> ) }
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
