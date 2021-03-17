import React from 'react';

import github from '../../img/github.png';
import react_logo from '../../img/react-logo.png';
import Footer from './Footer';
import ScrollToTop from '../Utility/ScrollToTop';
import BackToSearch from "../Utility/BackToSearch";


const About = () => {

    return (
        <div className="About card">
            <div className="welcome">
                <div className="title_wrapper">
                    <h1 className="title"> Welcome! </h1>
                </div>
            </div>

            <div className="container">
                <section className="about_main">
                    <h2> This App was made with ReactJS:
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
                        <p> Main photo by: &nbsp;
                            <a
                                href="https://unsplash.com/@thesollers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                                target="_blank" rel="noreferrer">
                                Anton Darius
                            </a>
                            &nbsp; on &nbsp;
                            <a
                                href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                                target="_blank" rel="noreferrer">
                                Unsplash
                            </a>
                        </p>
                    </div>

                    <div>
                        <p> 404 page photo by: &nbsp;
                            <a href="https://unsplash.com/@krakenimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                krakenimages
                            </a>
                            &nbsp; on &nbsp;
                            <a href="/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                Unsplash
                            </a>
                        </p>
                    </div>

                    <div>
                        <p> Warning icon by: &nbsp;
                            <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">
                                mavadee
                            </a>
                            &nbsp; from &nbsp;
                            <a href="https://www.flaticon.com/" title="Flaticon">
                                www.flaticon.com</a>
                        </p>
                    </div>

                    <div>
                        <p> React logo by: &nbsp;
                            <a
                                href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry"
                                target="_blank" rel="noreferrer" >
                                Kiranshastry
                            </a>
                            &nbsp; from &nbsp;
                            <a href="https://www.flaticon.com/" title="Flaticon">
                                www.flaticon.com
                            </a>
                        </p>
                    </div>

                    <div>
                        <p> Main logo and
                            icons (search, X, home, scroll to top, back to search, Github) by: &nbsp;
                            <p>
                                <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">
                                    Freepik
                                </a>
                                &nbsp; from &nbsp;
                                <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">
                                    www.flaticon.com
                                </a>
                            </p>
                        </p>
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
