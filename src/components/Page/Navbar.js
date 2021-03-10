import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/sun.svg';
import Spinner from '../Utility/Spinner';


const Navbar = ({ text, emptyContent, spinner }) => {

    const headerChange = window.location.pathname === '/about' ? 'header_100'
        : ( window.location.pathname === '/' && emptyContent  ? ' header_100' : ' header_70');

    return (
        <div className={`header ${headerChange}`}>
            <nav className= 'navbar'>

                <NavLink to='/' activeClassName='active' exact className='logo_wrapper'>
                    <img src={ logo } alt="logo icon" className="logo_img"/>
                    <div className='nav_link_item'>Weather App</div>
                </NavLink>
                <NavLink to='/about' activeClassName='active' exact>
                    <div className='nav_link_item about'>About</div>
                </NavLink>

                { spinner && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2> Searching {text} in progress... </h2>
                            <Spinner/>
                        </div>
                    </div> )
                }
            </nav>
        </div>
    );
};


export default Navbar;
