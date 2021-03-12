import React from 'react';
import top from "../../img/top.png";


function BackToTop () {

    function onClick () {
        alert('aaa');
    }

    return (
        <div>
            <button
                onClick={onClick}
                className="button">
                <img src={ top } alt="back to top icon" className="back_to_top"/>
            </button>
        </div>
    )

}


export default BackToTop;