import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/sun.svg';


const Navbar = () => {
    return (
        <div className="header">
            <nav className='navbar'>
                    <NavLink to='/' activeClassName='active' exact className='logo-wrapper'>
                        <img src={ logo } alt="logo icon" className="logo-img"/>
                        <div className='nav-link-item'>Weather App</div>
                    </NavLink>
                    <NavLink to='/about' activeClassName='active' exact>
                        <div className='nav-link-item about'>About</div>
                    </NavLink>
            </nav>
        </div>
    );
};


export default Navbar;
