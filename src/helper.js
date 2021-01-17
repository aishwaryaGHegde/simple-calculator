import Constants from './constants';

function PerformBasicAirthmeticCalculations(operation, a, b) {
    switch(operation) {
        case Constants.KEYS.ADD:
            return Number(a) + Number(b);
        case Constants.KEYS.SUBTRACT:
            return Number(a) - Number(b);
        case Constants.KEYS.MULTIPLY:
            return Number(a) * Number(b);
        case Constants.KEYS.DIVIDE:
            return Number(a) / Number(b);
        default:
            return "Error Not Supported Operation"
    }
}

export {
    PerformBasicAirthmeticCalculations
} 