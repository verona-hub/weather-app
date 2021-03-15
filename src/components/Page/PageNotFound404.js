import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../img/home.png';
import Navbar from "./Navbar";


const PageNotFound404 = () => {
    return (
        <div className="PageNotFound404">
            <Navbar />
            <div className="PageNotFound404_wrapper container">
                <h1> 404 </h1>
                <h2> Oops! We are really sorry but the page you requested cannot be found. </h2>
                <p> It seems that the page you were trying to reach does not exist or it was moved. We suggest you to go back or start again from the homepage. If the problem persist and you can't find what you are looking for, feel free to let us know. Thank you.</p>
                <div>
                    <Link to="/" className="home_icon_wrapper button_search">
                        <h3>Back to Homepage</h3>
                        <img src={ home } alt="homepage icon" className="home_icon"/>
                    </Link>
                </div>
            </div>



        </div>
    )

}


export default PageNotFound404;