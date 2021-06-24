
/*
+ co = Carbon Monoxide Data component
*/

// Import the data parameters
import { data } from "./AirQualityData";

// Function that takes co as a parameter and displays the matching background color, text color, and index level
// depending on the fetched co values
const carbonMonoxideChecker = (co) => {

    // Destructuring the data object for colors and parameters
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix} = data;
    let bgCo;
    let indexCo;
    let textCoColor;

    // Switch statement that assigns specific values for color and index level, depending on the fetched co value
    switch (true) {
        case co <= 10:
            bgCo = case1.color;
            indexCo = case1.index;
            break;
        case co <= 25:
            bgCo = case2.color;
            indexCo = case2.index;
            break;
        case co <= 50:
            bgCo = case3.color;
            indexCo = case3.index;
            break;
        case co <= 200:
            bgCo = case4.color;
            indexCo = case4.index;
            break;
        case co <= 400:
            bgCo = case5.color;
            indexCo = case5.index;
            break;
        case co <= 600:
            bgCo = case6.color;
            indexCo = case6.index;
            break;
        case co <= 800:
            bgCo = case7.color;
            indexCo = case7.index;
            textCoColor = mix.white;
            break;
        case co <= 1200:
            bgCo = case8.color;
            indexCo = case8.index;
            textCoColor = mix.white;
            break;
        case co <= 1600:
            bgCo = case9.color;
            indexCo = case9.index;
            textCoColor = mix.white;
            break;
        case co > 1600:
            bgCo = case10.color;
            indexCo = case10.index;
            textCoColor = mix.white;
            break;
        default:
            break;
    }
    return { bgCo, indexCo, textCoColor };
};

export default carbonMonoxideChecker;