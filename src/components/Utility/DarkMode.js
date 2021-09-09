import React  from 'react';


const DarkMode = ({ toggleDarkMode }) => {

    const handleToggle = () => {
        toggleDarkMode();
    }


    return (
        <div className="DarkMode">
            <div className="darkMode-button-wrapper">
                <button onClick={ handleToggle }> Dark Mode </button>
            </div>
        </div>
    );
};

export default DarkMode;
