var calc2 = require("./cal2");

test('Testing largest2()',()=>{
    expect (calc2.largest2(3,2)).toBe(3);
})

test('Testing largest3()',()=>{
    expect (calc2.largest3(3,2,5)).toBe(5);
})

test('Testing factorial()',()=>{
    expect (calc2.factorial(5)).toBe(120);
})
test('Testing checkEven()',()=>{
    expect (calc2.checkEven(5)).toBeFalsy();
})
test('Testing checkEven()',()=>{
    expect (calc2.checkEven(4)).toBeTruthy();
})

test('Testing largestELement()',()=>{
    let arr = [20,30,41,22,85];
    expect (calc2.largestElement(arr)).toBe(85);
})

test('Testing findElem()',()=>{
    expect (calc2.findElem(5)).toBe(true);
})

test('Testing findElem()',()=>{
    expect (calc2.findElem(50)).toBe(false);
})
test('Testing findElem()',()=>{
    expect (calc2.findElem(6)).toBe(true);
})

test('Testing findElem()',()=>{
    expect (calc2.findElem(60)).toBe(false);
})
test('Testing findElem()',()=>{
    expect (calc2.findElem(7)).toBe(true);
})




