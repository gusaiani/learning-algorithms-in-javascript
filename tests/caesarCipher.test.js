const caesarCipher = require('../caesarCipher');

test('A true caesarCipher test', () => {
  expect(caesarCipher('zoo keeper', 2)).toEqual('bqq mggrgt');
});

test('A false caesarCipher test', () => {
  expect(caesarCipher('zoo keeper', 2)).not.toEqual('bqq mggrgs');
});

