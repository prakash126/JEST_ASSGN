var calc = require("./calc");

test('Testing sub()',()=>{
    expect (calc.sub(3,2)).toBe(1);
})
test('Testing mul()',()=>{
    expect (calc.mul(3,2)).toBe(6);
})
test('Testing div()',()=>{
    expect (calc.div(3,3)).toBe(1);
})