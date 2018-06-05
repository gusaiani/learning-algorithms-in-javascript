function reverseWords(string) {
  const wordArray = string.split(' ');

  return wordArray.map(word => {
    return word.split('').reverse().join('');
  }).join(' ');
}

function reverseWordsWithoutArrayReverse(string) {
  const wordArray = string.split(' ');

  return wordArray.map(word => {
    let reversedWordArray = [];
    for (let i = word.length; i >= 0; i--) {
      reversedWordArray.push(word[i]);
    }
    return reversedWordArray.join('');
  }).join(' ');
}

module.exports = reverseWordsWithoutArrayReverse;
