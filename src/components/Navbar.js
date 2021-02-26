import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navbar green'>
            <NavLink to='/' activeClassName='active' exact>      <div className='nav-item'>Weather App</div></NavLink>
            <NavLink to='/about' activeClassName='active' exact> <div className='nav-item'>About      </div></NavLink>
        </nav>
    );
};


export default Navbar;
