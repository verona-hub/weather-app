// Import the data parameters
import { data } from './AirQualityData';


// Function that takes pm10 as a parameter and displays the matching background color, text color, and index level
// depending on the fetched pm10 values
const pm10_Checker = (pm10) => {

    // Destructuring the data object for colors and parameters
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    let bgPm10;
    let indexPm10;
    let textPm10Color;

    switch (true) {
        case pm10 <= 16:
            bgPm10 = case1.color;
            indexPm10 = case1.index;
            break;
        case pm10 <= 33:
            bgPm10 = case2.color;
            indexPm10 = case2.index;
            break;
        case pm10 <= 50:
            bgPm10 = case3.color;
            indexPm10 = case3.index;
            break;
        case pm10 <= 58:
            bgPm10 = case4.color;
            indexPm10 = case4.index;
            break;
        case pm10 <= 66:
            bgPm10 = case5.color;
            indexPm10 = case5.index;
            break;
        case pm10 <= 75:
            bgPm10 = case6.color;
            indexPm10 = case6.index;
            break;
        case pm10 <= 83:
            bgPm10 = case7.color;
            indexPm10 = case7.index;
            textPm10Color = mix.white;
            break;
        case pm10 <= 91:
            bgPm10 = case8.color;
            indexPm10 = case8.index;
            textPm10Color = mix.white;
            break;
        case pm10 <= 100:
            bgPm10 = case9.color;
            indexPm10 = case9.index;
            textPm10Color = mix.white;
            break;
        case pm10 > 100:
            bgPm10 = case10.color;
            indexPm10 = case10.index;
            textPm10Color = mix.white;
            break;
        default:
            break;
    }
    return { bgPm10, indexPm10, textPm10Color};
};

export default pm10_Checker;