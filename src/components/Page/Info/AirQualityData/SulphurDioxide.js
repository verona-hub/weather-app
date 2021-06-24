// Import the data parameters
import { data } from './AirQualityData';

// Function that takes so2 as a parameter and displays the matching background color, text color, and index level
// depending on the fetched so2 values
const sulphurDioxideChecker = (so2) => {

    // Destructuring the data object for colors and parameters
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    let bgSo2;
    let indexSo2;
    let textSo2Color;

    switch (true) {
        case so2 <= 88:
            bgSo2 = case1.color;
            indexSo2 = case1.index;
            break;
        case so2 <= 177:
            bgSo2 = case2.color;
            indexSo2 = case2.index;
            break;
        case so2 <= 266:
            bgSo2 = case3.color;
            indexSo2 = case3.index;
            break;
        case so2 <= 354:
            bgSo2 = case4.color;
            indexSo2 = case4.index;
            break;
        case so2 <= 443:
            bgSo2 = case5.color;
            indexSo2 = case5.index;
            break;
        case so2 <= 532:
            bgSo2 = case6.color;
            indexSo2 = case6.index;
            break;
        case so2 <= 710:
            bgSo2 = case7.color;
            indexSo2 = case7.index;
            textSo2Color = mix.white;
            break;
        case so2 <= 887:
            bgSo2 = case8.color;
            indexSo2 = case8.index;
            textSo2Color = mix.white;
            break;
        case so2 <= 1064:
            bgSo2 = case9.color;
            indexSo2 = case9.index;
            textSo2Color = mix.white;
            break;
        case so2 > 1064:
            bgSo2 = case10.color;
            indexSo2 = case10.index;
            textSo2Color = mix.white;
            break;
        default:
            break;
    }

    return { bgSo2, indexSo2, textSo2Color};

};

export default sulphurDioxideChecker;