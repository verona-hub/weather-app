import React from 'react';

import github from '../../img/github.png';
import love from '../../img/love.png';
import react_logo from '../../img/react-logo.png';
import Footer from './Footer';
import ScrollToTop from '../Utility/ScrollToTop';
import BackToSearch from "../Utility/BackToSearch";


const About = () => {

    return (
        <div className="About card">
            <div className="welcome">
                <div className="title_wrapper">
                    <h1 className="title"> Welcome to the <span className="italic">Weather App! </span></h1>
                </div>
            </div>

            <div className="container">
                <section className="about_main">
                    <h2> This App was made with
                        <img src={ love } alt="love icon" className="love_icon"/> using ReactJS
                    </h2>
                    <a href="http://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={ react_logo } alt="react logo" className="react_logo"/>
                    </a>
                </section>

                <section className="source">
                    <div className="source_text">
                        <h2> Source code: </h2>
                        <p> You can find the source code for this project alongside other projects on my Github
                            profile: </p>
                    </div>
                    <div className="github">
                        <a href="https://github.com/verona-hub/weather-app" target="_blank" rel="noreferrer">
                            <img src={ github } alt="github icon" className="github_logo"/>
                            <p> verona-hub </p>
                        </a>
                    </div>
                </section>

                <section className="credits">
                    <h2> Material resources: </h2>
                    <div>
                        <p>Main photo by</p>
                        <a href="https://unsplash.com/@thesollers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">
                            Anton Darius
                        </a>
                        <p> on </p>
                        <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">
                            Unsplash
                        </a>
                    </div>

                    <div>
                        <p>404 page photo by</p>
                        <a href="https://unsplash.com/@krakenimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            krakenimages
                        </a>
                        <p> on </p>
                        <a href="/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </div>

                    <div>
                        <p>Main app logo, search icon, "x" icon, love icon, home icon, scroll to top icon, back to
                           search icon and Github icon by</p>
                        <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">
                            Freepik
                        </a>
                        <p> from </p>
                        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">
                            www.flaticon.com
                        </a>
                    </div>

                    <div>
                        <p>Warning icon by </p>
                        <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">
                            mavadee
                        </a>
                        <p> from </p>
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com</a>
                    </div>

                    <div>
                        <p> React logo by </p>
                        <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry" target="_blank" rel="noreferrer">
                            Kiranshastry
                        </a>
                        <p>from</p>
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>
                    </div>
                </section>

                <div className="About_buttons">
                    <BackToSearch />
                    <ScrollToTop />
                </div>

                <Footer />

            </div>
        </div>
    );
};


export default About;
