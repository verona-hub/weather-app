import React from 'react';
import react_logo from '../img/react-logo.png';


const About = () => {
    return (
        <div className="About">
            <div className="container">
                <h1> Welcome to the Weather App About Page </h1>
                <div className="about-text">
                    <h3> This App was made with ReactJS </h3>
                    <a href="http://reactjs.org"><img src={ react_logo } alt="react logo" className="react-logo"/></a>
                </div>


                <div className="credits">
                    <span>Main photo by: <a href="https://unsplash.com/@thesollers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anton Darius</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    <div>Main app logo, search icon, and "x" icon by: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>React logo by: <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        </div>
    );
};


export default About;
