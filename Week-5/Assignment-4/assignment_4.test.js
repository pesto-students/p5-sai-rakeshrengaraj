const mathOperations = require('./assignment_4');

test('Math operations for two numbers',()=> {
    expect(mathOperations.sum(2,3)).toBe(5)
    expect(mathOperations.diff(3,2)).toBe(1)
    expect(mathOperations.product(2,3)).toBe(6)
})

