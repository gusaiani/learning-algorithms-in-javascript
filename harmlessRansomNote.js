function harmlessRansomNote(magazine, note) {
  const magazineWords = convertToIndexedObject(magazine);
  const noteArray = note.split(' ');
  for(let i = 0; i < noteArray.length; i++) {
    const noteWord = noteArray[i];
    if (magazineWords[noteWord] === undefined) {
      return false;
    }
    if (magazineWords[noteWord] === 0) {
      return false;
    }
    magazineWords[noteWord] = magazineWords[noteWord] - 1;
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
