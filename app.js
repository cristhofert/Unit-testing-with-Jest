let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => valueInDollar * 127.9;

const fromYenToPound = (valueInYen) => valueInYen * 0.8;

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
