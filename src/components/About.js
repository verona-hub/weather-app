import React from 'react';
import react_logo from '../img/react-logo.png';
import github from '../img/github.png';
import love from '../img/love.png';


const About = () => {
    return (
        <div className="About">
            <div className="container">

                <section className="about-header">
                    <h2 className="title"> Welcome to the <span className="italic">Weather App! </span></h2>
                    <h3> This App was made with <img src={ love } alt="love icon" className="love-icon"/> using ReactJS </h3>
                    <a href="http://reactjs.org"><img src={ react_logo } alt="react logo" className="react-logo"/></a>
                </section>

                <section className="source">
                    <div className="source-text">
                        <h3> Source code: </h3>
                        <p> You can find the source code for this project alongside other projects on my Github
                            profile: </p>
                    </div>
                    <div className="github">
                        <a href="https://github.com/verona-hub/weather-app">
                            <img src={ github } alt="github icon" className="github-logo"/>
                            <p> verona-hub </p>
                        </a>
                    </div>
                </section>

                <section className="credits">
                    <h3> Material resources: </h3>
                    <p>Main photo by: <a href="https://unsplash.com/@thesollers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anton Darius</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
                    <p>Main app logo, search icon, "x" icon, love icon, and Github icon by: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                    <p>React logo by: <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                </section>
            </div>
        </div>
    );
};


export default About;
