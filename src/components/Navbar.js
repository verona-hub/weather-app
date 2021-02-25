import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navbar green'>
            <Link to='/'>
                <div className='nav-item'>Weather App</div>
            </Link>
            <Link to='/about'>
                <div className='nav-item'>About</div>
            </Link>
        </nav>
    );
};


export default Navbar;
