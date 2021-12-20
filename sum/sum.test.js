
var sum = require('./sum/sum');

test('Testing sum()',()=>{
    expect (sum(2,3)).toBe(5);
})