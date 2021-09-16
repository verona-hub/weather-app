import React, { useState }  from 'react';


const DarkMode = ({ toggleDarkMode, darkMode }) => {

    const [mode, setMode] = useState(true);

    const toggleMode = (mode) => {
        setMode(!mode);
        toggleDarkMode(mode);
    };

    const darkSlider = darkMode && 'slider_dark';


    return (
        <div className="DarkMode">
            <div className="darkMode_container">
                <div className="darkMode_toggle_wrapper">
                    <label>
                        <input type="checkbox" onChange={ toggleMode }/>
                        <span className={`slider ${darkSlider} round`}> </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DarkMode;
