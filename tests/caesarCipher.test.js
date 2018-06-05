const caesarCipher = require('../caesarCipher');

test('A true caesarCipher test', () => {
  expect(caesarCipher('zoo keeper', 2)).toEqual('bqq mggrgt');
});

test('A false caesarCipher test', () => {
  expect(caesarCipher('zoo keeper', 2)).not.toEqual('bqq mggrgs');
});

test('A caesarCipher test with negative numbers', () => {
  expect(caesarCipher('zoo keeper', -2)).toEqual('xmm iccncp');
});

test('CaesarCipher test should work with uppercase', () => {
  expect(caesarCipher('Zoo Keeper', 2)).toEqual('Bqq Mggrgt');
});
