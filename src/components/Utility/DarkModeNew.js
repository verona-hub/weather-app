import React from 'react';


const DarkMode = ({ isToggled, toggleNew }) => {

    return (
        <div className="DarkMode">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={ isToggled }
                    onChange={ toggleNew }
                />
                <span className="slider round"> </span>
            </label>
        </div>
    );
};

export default DarkMode;
