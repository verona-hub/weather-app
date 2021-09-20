import React from 'react';


const DarkMode = ({ isToggled, toggleDarkMode, darkMode }) => {


    const darkSlider = darkMode && 'slider_dark';
    const slider = `slider ${darkSlider} round`;

    return (
        <div className="DarkMode">
            <div className="darkMode_container">
                <label>
                    <input
                        type="checkbox"
                        checked={ isToggled }
                        onChange={ toggleDarkMode }
                    />
                    <span className={ slider.toString() }> </span>
                </label>
            </div>
        </div>
    );
};

export default DarkMode;
