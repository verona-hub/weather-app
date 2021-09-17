import React, { useState }  from 'react';


const DarkMode = ({ toggleDarkMode, darkMode }) => {

    const [mode, setMode] = useState(true);

    const toggleMode = () => {
        setMode(!mode);
        toggleDarkMode(mode);
    };

    // const darkSlider = darkMode ? 'slider slider_dark' : 'slider';



    return (
        <div className="DarkMode">
            <div className="darkMode-button-wrapper">
                <button onClick={toggleMode}> Dark Mode </button>
            </div>
            {/*<div className="darkMode_container">*/}
            {/*    <div className="darkMode_toggle_wrapper">*/}
            {/*        <label>*/}
            {/*            <input type="checkbox" onChange={ toggleMode }/>*/}
            {/*            <span className={`${darkSlider} round`}> </span>*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default DarkMode;
