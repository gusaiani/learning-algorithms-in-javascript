function isPalindrome(str) {
  const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const strArray = str.toLowerCase().split('');

  let charsArray = [];

  strArray.forEach(char => {
    if (allowedCharacters.indexOf(char) > -1) {
      charsArray.push(char);
    }
  });

  const reversedCharsArray = charsArray.slice(0).reverse();

  for (let i = 0; i <= (charsArray.length / 2); i++) {
    if (charsArray[i] != reversedCharsArray[i]) return false;
  }

  return true;
}

module.exports = isPalindrome;
