// Import the data parameters
import { data } from '../AirQualityColors';


// Function that takes pm2_5 as a parameter and displays the matching background color, text color, and index level
// depending on the fetched pm2_5 values
const pm2_5_Checker = (pm2_5) => {

    // Destructuring the data object for colors and parameters
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    let bgPm2_5;
    let indexPm2_5;
    let textPm2_5Color;

    switch (true) {
        case pm2_5 <= 11:
            bgPm2_5 = case1.color;
            indexPm2_5 = case1.index;
            break;
        case pm2_5 <= 23:
            bgPm2_5 = case2.color;
            indexPm2_5 = case2.index;
            break;
        case pm2_5 <= 35:
            bgPm2_5 = case3.color;
            indexPm2_5 = case3.index;
            break;
        case pm2_5 <= 41:
            bgPm2_5 = case4.color;
            indexPm2_5 = case4.index;
            break;
        case pm2_5 <= 47:
            bgPm2_5 = case5.color;
            indexPm2_5 = case5.index;
            break;
        case pm2_5 <= 53:
            bgPm2_5 = case6.color;
            indexPm2_5 = case6.index;
            break;
        case pm2_5 <= 58:
            bgPm2_5 = case7.color;
            indexPm2_5 = case7.index;
            textPm2_5Color = mix.white;
            break;
        case pm2_5 <= 64:
            bgPm2_5 = case8.color;
            indexPm2_5 = case8.index;
            textPm2_5Color = mix.white;
            break;
        case pm2_5 <= 70:
            bgPm2_5 = case9.color;
            indexPm2_5 = case9.index;
            textPm2_5Color = mix.white;
            break;
        case pm2_5 > 70:
            bgPm2_5 = case10.color;
            indexPm2_5 = case10.index;
            textPm2_5Color = mix.white;
            break;
        default:
            break;
    }
    return { bgPm2_5, indexPm2_5, textPm2_5Color};
};

export default pm2_5_Checker;