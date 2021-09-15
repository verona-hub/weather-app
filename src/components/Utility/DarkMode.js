import React, { useState }  from 'react';
import moon from '../../img/dark-mode-moon.svg';


const DarkMode = ({ toggleDarkMode }) => {

    const [mode, setMode] = useState(true);

    const toggleMode = () => {
        setMode(!mode);
        toggleDarkMode(mode);
    };


    return (
        <div className="DarkMode">
            <div className="darkMode-wrapper">
                <img src={ moon } onClick={ toggleMode} alt="Dark mode toggle"/>
            </div>
        </div>
    );
};

export default DarkMode;
