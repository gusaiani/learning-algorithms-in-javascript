function caesarCipher(string, number) {
  const allowedCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const charsArray = string.split('');

  let cipherArray = [];

  charsArray.forEach(char => {
    const lowerCaseChar = char.toLowerCase();
    const charPosition = allowedCharactersArray.indexOf(lowerCaseChar);
    let newChar;

    if (charPosition > -1) {
      const newAgnosticCaseChar = allowedCharactersArray[(charPosition + number) % allowedCharactersArray.length];
      newChar = (char == char.toUpperCase()) ? newAgnosticCaseChar.toUpperCase() : newAgnosticCaseChar;
    } else {
      newChar = char;
    }

    cipherArray.push(newChar);
  });

  return cipherArray.join('');
}

module.exports = caesarCipher;
