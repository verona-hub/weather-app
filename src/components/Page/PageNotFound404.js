import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import home from '../../img/home.png';
import Navbar from "./Navbar";


const PageNotFound404 = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="PageNotFound404">
                <div className="PageNotFound404_wrapper container">
                    <h1> 404... </h1>
                    <h2> Oops! We are really sorry but the page you requested cannot be found. </h2>
                    <p className="paragraph"> It seems that the page you were trying to reach does not exist or it was
                                              moved. We suggest you to go back or start again from the homepage. If the
                                              problem persist and you can't find what you are looking for, feel free to
                                              let us know. Thank you.</p>
                    <div>
                        <Link to="/" className="home_icon_wrapper">
                            <button className="button_home">
                                <img src={ home } alt="homepage icon" className="home_icon"/>
                                <p>Back to Homepage</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}


export default PageNotFound404;