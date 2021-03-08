import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/sun.svg';


const Navbar = (props) => {

    const home = window.location.pathname === '/';
    const empty = props.emptyContent;

    return (
        <div className={ 'header ' + (
            ( `${home} && props.emptyContent ? 'header_100' : 'header_70'`)
            && props.errorIsPresent ? 'header_90' : 'header_100'
        )}>

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
