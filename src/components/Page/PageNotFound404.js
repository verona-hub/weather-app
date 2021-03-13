import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../img/home.png';
import Navbar from "./Navbar";


const PageNotFound404 = () => {
    return (
        <div className="PageNotFound404">
            <Navbar />
            <div className="PageNotFound404_wrapper">
                <h1> The requested page was not found! </h1>
                <div>
                    <Link to="/">
                        Return Home
                        <img src={ home } alt="homepage icon" className="home_icon"/>
                    </Link>
                </div>
            </div>



        </div>
    )

}


export default PageNotFound404;