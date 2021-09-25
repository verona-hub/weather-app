import React from 'react';

// Logos
import react_logo from '../../img/react-logo.png';
import github_logo from '../../img/github.png';
import github_logo_dark from '../../img/github-dark.png';

// Components
import BackToSearch from "../Utility/BackToSearch";
import ScrollToTop from '../Utility/ScrollToTop';


const About = ({ darkMode }) => {

    const AboutDark = darkMode && 'dark-mode About_dark';
    const About = `About card ${AboutDark}`;
    const mainDark = darkMode && 'main_dark';
    const main = `main ${mainDark} test`;
    const githubLogo = darkMode ? github_logo_dark : github_logo;

    return (
        <div className="container">
            <div className={ About }>
                <div className="welcome">
                    <div className="title_wrapper">
                        <h1 className="title"> Welcome! </h1>
                    </div>
                </div>

                <div className={ main }>
                    <section className="about_react">
                        <h2> This App was made with ReactJS </h2>
                        <p> A JavaScript library for building user interfaces. </p>
                        <div className="reactjs">
                            <a href="http://reactjs.org" target="_blank" rel="noreferrer">
                                <abbr title="ReactJS Website">
                                    <img src={ react_logo } alt="react logo" className="react_logo"/>
                                </abbr>
                            </a>
                        </div>
                    </section>

                    <section className="source">
                        <div className="source_text">
                            <h2> Source code </h2>
                            <p> You can find the source code for this project alongside other projects on my Github
                                profile: </p>
                        </div>
                        <div className="github">
                            <a href="https://github.com/verona-hub/weather-app" target="_blank" rel="noreferrer">
                                <abbr title="Click to see the repository on Github">
                                    <img src={ githubLogo } alt="github icon" className="github_logo"/>
                                    <span> verona-hub </span>
                                </abbr>
                            </a>
                        </div>
                    </section>

                    <section className="credits">
                        <h2> Material resources </h2>
                        <div className="list_wrapper">
                            <ul>
                                <li> Main photo by:&nbsp;

                                    <a href="https://unsplash.com/@willianjusten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
                                        Willian Justen de Vasconcellos
                                    </a>
                                    <span>&nbsp;on&nbsp;</span>
                                    <a href="https://unsplash.com/photos/lrPBS8b4G14" target="_blank" rel="noreferrer">
                                        Unsplash
                                    </a>
                                </li>

                                <li> 404 page photo by:&nbsp;
                                    <a
                                        href="https://unsplash.com/@krakenimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                        target="_blank" rel="noreferrer"
                                    >
                                        krakenimages
                                    </a>
                                    <span> on&nbsp;</span>
                                    <a href="https://unsplash.com/photos/8RXmc8pLX_I" target="_blank" rel="noreferrer">
                                        Unsplash
                                    </a>
                                </li>

                                <li> Warning icon by:&nbsp;
                                    <a
                                        href="https://www.flaticon.com/authors/mavadee" title="mavadee" target="_blank"
                                        rel="noreferrer"
                                    >
                                        mavadee
                                    </a>
                                    <span> from&nbsp;</span>
                                    <a
                                        href="https://www.flaticon.com/" title="Flaticon" target="_blank"
                                        rel="noreferrer"
                                    >
                                        www.flaticon.com</a>
                                </li>

                                <li> React logo and green arrows by:&nbsp;
                                    <a
                                        href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry"
                                        target="_blank" rel="noreferrer"
                                    >
                                        Kiranshastry
                                    </a>
                                    <span> from&nbsp;</span>
                                    <a
                                        href="https://www.flaticon.com/" title="Flaticon" target="_blank"
                                        rel="noreferrer"
                                    >
                                        www.flaticon.com
                                    </a>
                                </li>

                                <li> Main logo and icons (search, X, home, arrow, scroll to top,
                                     back to search, Github) by:&nbsp;
                                    <div>
                                        <a
                                            href="https://www.flaticon.com/authors/freepik" target="_blank"
                                            rel="noreferrer"
                                        >
                                            Freepik
                                        </a>
                                        <span> from </span>
                                        <a
                                            href="https://www.flaticon.com/" title="Flaticon" target="_blank"
                                            rel="noreferrer"
                                        >
                                            www.flaticon.com
                                        </a>
                                        <span> and </span>
                                        <a
                                            href="https://www.freepik.com" title="Freepik" target="_blank"
                                            rel="noreferrer"
                                        >
                                            www.freepik.com
                                        </a>
                                    </div>
                                </li>

                                <li> Github dark logo by:&nbsp;
                                    <a
                                        href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect"
                                        target="_blank" rel="noreferrer"
                                    >
                                        Pixel perfect
                                    </a>
                                    <span> from&nbsp;</span>
                                    <a
                                        href="https://www.flaticon.com/" title="Flaticon" target="_blank"
                                        rel="noreferrer"
                                    >
                                        www.flaticon.com
                                    </a>
                                </li>

                                <li> Dark mode left and top arrow by:&nbsp;
                                    <a
                                        href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"
                                        target="_blank" rel="noreferrer"
                                    >
                                        Icongeek26
                                    </a>
                                    <span> from&nbsp;</span>
                                    <a
                                        href="https://www.flaticon.com/" title="Flaticon" target="_blank"
                                        rel="noreferrer"
                                    >
                                        www.flaticon.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="scroll_buttons">
                        <BackToSearch darkMode={ darkMode } />
                        <ScrollToTop darkMode={ darkMode } />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;
