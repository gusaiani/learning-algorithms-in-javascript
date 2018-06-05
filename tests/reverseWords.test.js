const reverseWords = require('../reverseWords');

test('Reverse phrase with just one word', () => {
  expect(reverseWords('Word')).toEqual('droW');
});

test('Reverse phrase with multiple words', () => {
  expect(reverseWords('This phrase has many words')).toEqual('sihT esarhp sah ynam sdrow');
});
