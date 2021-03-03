import React from 'react';


const Astronomy = ({ astronomy }) => {
    console.log(astronomy);

    const { sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination } = astronomy;

    return (
        <div className="Astronomy card">
            <h1 className="title"> Astronomy </h1>
            <div className="main">
                <div className="spaced"><span> Sunrise:</span> { sunrise } </div>
                <div className="spaced"><span> Sunset:</span> { sunset } </div>
                <div className="spaced"><span> Moonrise:</span> { moonrise } </div>
                <div className="spaced"><span> Moonset:</span> { moonset } </div>
                <div className="spaced"><span> Moon phase:</span> { moon_phase } </div>
                <div className="spaced"><span> Moon illumination:</span> {moon_illumination } </div>
            </div>
        </div>
    )

}

export default Astronomy;