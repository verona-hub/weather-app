import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="header">
            <nav className='navbar green'>
                <NavLink to='/' activeClassName='active' exact>
                    <div className='nav-item'>Weather App</div>
                </NavLink>
                <NavLink to='/about' activeClassName='active' exact>
                    <div className='nav-item'>About</div>
                </NavLink>
            </nav>
        </div>
    );
};


export default Navbar;
