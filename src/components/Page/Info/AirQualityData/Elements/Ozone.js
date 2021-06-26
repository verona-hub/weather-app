// Import the data parameters
import { data } from '../AirQualityData';


// Function that takes o3 as a parameter and displays the matching background color, text color, and index level
// depending on the fetched o3 values
const ozoneChecker = (o3) => {

    // Destructuring the data object for colors and parameters
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    let bgO3;
    let indexO3;
    let textO3Color;

    // Switch statement that assigns specific values for color and index level, depending on the fetched co value
    switch (true) {
        case o3 <= 33:
            bgO3 = case1.color;
            indexO3 = case1.index;
            break;
        case o3 <= 66:
            bgO3 = case2.color;
            indexO3 = case2.index;
            break;
        case o3 <= 100:
            bgO3 = case3.color;
            indexO3 = case3.index;
            break;
        case o3 <= 120:
            bgO3 = case4.color;
            indexO3 = case4.index;
            break;
        case o3 <= 140:
            bgO3 = case5.color;
            indexO3 = case5.index;
            break;
        case o3 <= 160:
            bgO3 = case6.color;
            indexO3 = case6.index;
            break;
        case o3 <= 187:
            bgO3 = case7.color;
            indexO3 = case7.index;
            textO3Color = mix.white;
            break;
        case o3 <= 213:
            bgO3 = case8.color;
            indexO3 = case8.index;
            textO3Color = mix.white;
            break;
        case o3 <= 240:
            bgO3 = case9.color;
            indexO3 = case9.index;
            textO3Color = mix.white;
            break;
        case o3 > 240:
            bgO3 = case10.color;
            indexO3 = case10.index;
            textO3Color = mix.white;
            break;
        default:
            break;
    }

    return { bgO3, indexO3, textO3Color };

};

export default ozoneChecker;