function caesarCipher(string, number) {
  const allowedCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const charsArray = string.split('');

  let cipherArray = [];

  charsArray.forEach(char => {
    const charPosition = allowedCharactersArray.indexOf(char);

    if (charPosition > -1) {
      cipherArray.push(allowedCharactersArray[(charPosition + number) % allowedCharactersArray.length]);
    } else {
      cipherArray.push(char);
    }
  });

  return cipherArray.join('');
}

module.exports = caesarCipher;
