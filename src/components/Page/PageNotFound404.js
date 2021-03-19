import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import home from '../../img/home.png';


const PageNotFound404 = () => {
    return (
        <div className="PageNotFound404">
            <div className="PageNotFound404_wrapper">

                <div className="title_wrapper">
                    <div className="title">
                        <h1> 404 </h1>
                        <h2> Page not found! </h2>
                    </div>
                </div>

                <div className="text">
                    <h2> We are really sorry but the page you requested cannot be found. </h2>
                    <p> It seems that the page you were trying to reach does not exist or it
                                              was moved. We suggest you to go back or start again from the homepage.
                    </p>
                </div>

                <div className="home_wrapper">
                    <Link to="/" >
                        <button className="button_home">
                            <img src={ home } alt="homepage icon" className="home_icon"/>
                            <p>Back to Homepage</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}


export default PageNotFound404;