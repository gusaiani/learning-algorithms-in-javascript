  const meanMedianMode = require('../meanMedianMode');

test('A meanMedianMode test', () => {
  expect(meanMedianMode([0, 1, 2, 3, 4, 5, 6, 6])).toEqual({
    mean: 3.375,
    median: 3.5,
    mode: [6]
  });
});

test('A meanMedianMode test with two modes', () => {
  expect(meanMedianMode([0, 1, 2, 3, 4, 5, 5, 6, 6])).toEqual({
    mean: 3.5556,
    median: 4,
    mode: [5, 6]
  });
});
