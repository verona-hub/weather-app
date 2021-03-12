import React from 'react';
import top from "../../img/top.png";


const ScrollToTop = () => {

    const onClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="ScrollToTop">
            <button onClick={ onClick } className="button button_to_top">
                <img src={ top } alt="back to top icon" className="to_top"/>
            </button>
            <h4> Scroll to Top </h4>
        </div>
    )

}


export default ScrollToTop;