import React, {useState} from 'react';


const DarkMode = ({ isToggled, toggleNew }) => {

    const [ newMode, setNewMode ] = useState(true);

    const onToggle = () => {
        setNewMode(!newMode);
        toggleNew(newMode);
    };

    return (
        <div className="DarkMode">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={ isToggled }
                    onChange={ onToggle }
                />
                <span className="slider round"> </span>
            </label>
        </div>
    );
};

export default DarkMode;
