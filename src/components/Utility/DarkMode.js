import React, { useState }  from 'react';


const DarkMode = ({ toggleDarkMode, darkMode }) => {

    const [mode, setMode] = useState(true);

    const toggleMode = () => {
        setMode(!mode);
        toggleDarkMode(mode);
    };



    return (
        <div className="DarkMode">
            <div className="darkMode-button-wrapper">
                <button onClick={toggleMode}> Dark Mode </button>
            </div>
        </div>
    );
};

export default DarkMode;
