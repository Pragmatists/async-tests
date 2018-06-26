jest.mock('../sum')
var sum = require('../sum');

test('mock', () => {
    sum.mockImplementation(() => 43);
    console.log(sum());
})
