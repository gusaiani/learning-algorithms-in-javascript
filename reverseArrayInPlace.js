function reverseArrayInPlace(arr) {
  return arr.reduce((acc, item) => {
    acc.unshift(item);
    return acc;
  }, []);
}

module.exports = reverseArrayInPlace;
