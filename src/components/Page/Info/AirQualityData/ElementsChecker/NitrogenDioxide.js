// Import the data parameters
import { data } from '../AirQualityColors';


// Function that takes no2 as a parameter and displays the matching background color, text color, and index level
// depending on the fetched no2 values
const nitrogenDioxideChecker = (no2) => {

    // Destructuring the data object for colors and parameters
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    let bgNo2;
    let indexNo2;
    let textNo2Color;

    // Switch statement that assigns specific values for color and index level, depending on the fetched co value
    switch (true) {
        case no2 <= 67:
            bgNo2 = case1.color;
            indexNo2 = case1.index;
            break;
        case no2 <= 134:
            bgNo2 = case2.color;
            indexNo2 = case2.index;
            break;
        case no2 <= 200:
            bgNo2 = case3.color;
            indexNo2 = case3.index;
            break;
        case no2 <= 267:
            bgNo2 = case4.color;
            indexNo2 = case4.index;
            break;
        case no2 <= 334:
            bgNo2 = case5.color;
            indexNo2 = case5.index;
            break;
        case no2 <= 400:
            bgNo2 = case6.color;
            indexNo2 = case6.index;
            break;
        case no2 <= 467:
            bgNo2 = case7.color;
            indexNo2 = case7.index;
            textNo2Color = mix.white;
            break;
        case no2 <= 534:
            bgNo2 = case8.color;
            indexNo2 = case8.index;
            textNo2Color = mix.white;
            break;
        case no2 <= 600:
            bgNo2 = case9.color;
            indexNo2 = case9.index;
            break;
        case no2 > 600:
            bgNo2 = case10.color;
            indexNo2 = case10.index;
            textNo2Color = mix.white;
            break;
        default:
            break;
    }

    return { bgNo2, indexNo2, textNo2Color };

};

export default nitrogenDioxideChecker;