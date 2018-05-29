const harmlessRansomNote = require('../harmlessRansomNote');

test('A true harmlessRansomNote test', () => {
  const magazine = 'give me one grand today night';
  const note = 'give one grand today'
  expect(harmlessRansomNote(magazine, note)).toBe(true);
});

test('A false harmlessRansomNote test', () => {
  const magazine = 'two times three is not not four';
  const note = 'two times two is four'
  expect(harmlessRansomNote(magazine, note)).toBe(false);
});

test('A false harmlessRansomNote test', () => {
  const magazine = 'this is a secret note for you from a secret admirer';
  const note = `
    puerto rico is a great place you must hike
    far from town to find a secret waterfall that
    i am an admirer of but note that it is not as
    hard as it seems this is my advice for you
  `
  expect(harmlessRansomNote(magazine, note)).toBe(false);
});


test('A false harmlessRansomNote test', () => {
  const magazine = 'this is a secret note for you from a secret admirer';
  const note = `
    puerto rico is a great place you must hike
    far from town to find a secret waterfall that
    i am an admirer of but note that it is not as
    hard as it seems this is my advice for you
  `
  expect(harmlessRansomNote(magazine, note)).toBe(false);
});

test('A true harmlessRansomNote test', () => {
  const magazine = 'this is a note for you from a secret admirer';
  const note = `
    puerto rico is a great place you must hike
    far from town to find a secret waterfall that
    i am an admirer of but note that it is not as
    hard as it seems this is my advice for you
  `
  expect(harmlessRansomNote(magazine, note)).toBe(false);
});
