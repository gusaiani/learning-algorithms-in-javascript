function reverseWords(string) {
  const wordArray = string.split(' ');

  return wordArray.map(word => {
    return word.split('').reverse().join('');
  }).join(' ');
}

module.exports = reverseWords;
