function harmlessRansomNote(magazine, note) {
  const magazineWords = convertToIndexedObject(magazine);
  const noteWords = convertToIndexedObject(note);

  for (let key of Object.keys(noteWords)) {
    if (!magazineWords[key]) return false;
    if (magazineWords[key] < noteWords[key]) return false;
  }

  return true;
}

function convertToIndexedObject(string) {
  return string
  .split(' ')
  .reduce((acc, word) => {
    acc[word] = acc[word] ? acc[word] + 1 : 1;

    return acc;
  }, {});
}

module.exports = harmlessRansomNote;
