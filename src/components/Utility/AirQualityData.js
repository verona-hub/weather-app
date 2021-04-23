
const data = {
    case1: {
        color: '#9cff9c',
        index: 'Index 1',
        level: 'Low'
    },
    case2: {
        color: '#66cb55',
        index: 'Index 2',
        level: 'Low'
    },
    case3: {
        color: '#5a9f4f',
        index: 'Index 3',
        level: 'Low'
    },
    case4: {
        color: '#fbfb66',
        index: 'Index 4',
        level: 'Moderate'
    },
    case5: {
        color: '#ffcf00',
        index: 'Index 5',
        level: 'Moderate'
    },
    case6: {
        color: '#ff9a00',
        index: 'Index 6',
        level: 'Moderate'
    },
    case7: {
        color: '#ff6464',
        index: 'Index 7',
        level: 'High'
    },
    case8: {
        color: '#d85454',
        index: 'Index 8',
        level: 'High'
    },
    case9: {
        color: '#e63d3d',
        index: 'Index 9',
        level: 'High'
    },
    case10: {
        color: '#F00',
        index: 'Index 10',
        level: 'Very High'
    },
    mix: {
        white: '#fff'
    }
}


/*
+ co = Carbon Monoxide
*/


function carbonMonoxideSwitch(airQuality) {
const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix} = data;

    let { co } = airQuality;

    let bgCo;
    let indexCo;
    let textCoColor;

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
}



export { data, carbonMonoxideSwitch };