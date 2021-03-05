import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/sun.svg';


const Navbar = () => {
    return (
        <div className="header">
            <nav className='navbar'>
                    <NavLink to='/' activeClassName='active' exact className='logo_wrapper'>
                        <img src={ logo } alt="logo icon" className="logo_img"/>
                        <div className='nav_link_item'>Weather App</div>
                    </NavLink>
                    <NavLink to='/about' activeClassName='active' exact>
                        <div className='nav_link_item about'>About</div>
                    </NavLink>
            </nav>
        </div>
    );
};


export default Navbar;
