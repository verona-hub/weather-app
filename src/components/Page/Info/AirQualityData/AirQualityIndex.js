import React  from 'react';
import { data } from './AirQualityColors';
import AirQualityIndexItem from "./AirQualityIndexItem";


const AirQualityIndex = ({ indexInfoVisible, darkMode }) => {

    // Destructuring from the AirQualityColors.js component in Utility
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    const indexVisible = indexInfoVisible ? "visible" : "hidden";
    const darkIndex = darkMode && 'index_wrapper_dark';
    const darkTitle = darkMode && 'title_dark';

    return (
        <div className="AirQualityIndex">
            <div className={`index_wrapper ${indexVisible} ${darkIndex}`} >
                <h2 className={ `title ${darkTitle}` }> Air Quality Index: </h2>
                <div className="index_levels">

                    <AirQualityIndexItem
                        backgroundColor={ case1.color }
                        indexText={ case1.index }
                        indexLevel={ case1.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case2.color }
                        indexText={ case2.index }
                        indexLevel={ case2.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case3.color }
                        indexText={ case3.index }
                        indexLevel={ case3.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case4.color }
                        indexText={ case4.index }
                        indexLevel={ case4.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case5.color }
                        indexText={ case5.index }
                        indexLevel={ case5.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case6.color }
                        indexText={ case6.index }
                        indexLevel={ case6.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case7.color }
                        indexText={ case7.index }
                        indexLevel={ case7.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case8.color }
                        indexText={ case8.index }
                        indexLevel={ case8.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case9.color }
                        indexText={ case9.index }
                        indexLevel={ case9.level }
                    />

                    <AirQualityIndexItem
                        backgroundColor={ case10.color }
                        indexText={ case10.index }
                        indexLevel={ case10.level }
                    />
                </div>
            </div>
        </div>
    );
};

export default AirQualityIndex;
