import React from 'react';


const Astronomy = ({ astronomy, darkMode }) => {

    // Destructuring the fetched astronomy data
    const { sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination } = astronomy;

    // Dark mode
    const titleDark = darkMode && 'title_dark';

    return (
        <div className="Astronomy card">
            <h2 className={ `title ${titleDark}` }> Astronomy </h2>
            <div className="main">
                <div className="spaced"><span> Sunrise:</span> { sunrise } </div>
                <div className="spaced"><span> Sunset:</span> { sunset } </div>
                <div className="spaced"><span> Moonrise:</span> { moonrise } </div>
                <div className="spaced"><span> Moonset:</span> { moonset } </div>
                <div className="spaced"><span> Moon Phase:</span> { moon_phase } </div>
                <div className="spaced"><span> Moon Illumination:</span> {moon_illumination }&#37; </div>
            </div>
        </div>
    )
};

export default Astronomy;