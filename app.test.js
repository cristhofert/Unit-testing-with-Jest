test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One Dollar should be 127.9 Yens", function () {
    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(3.5);

    const expected = 3.5 * 127.9;

    expect(expected).toBe(yens);
})

test("One Yen should be 0.8 Pounds", function () {
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(3.5);

    const expected = 3.5 * 0.8;

    expect(expected).toBe(pound);
})