/* Return all prime numbers up to passed number
 * inside an array.
 */
function sieve(num, cache = [], latestChecked = 2) {
  if (num == 1) return [];
  if (num === latestChecked) {
    return cache;
  }

  let numOfDivisibles = 1;

  for (let i = 2; i <= latestChecked; i++) {
    if(latestChecked % i === 0) numOfDivisibles++;
    if (numOfDivisibles > 2) {
      break;
    }
  }

  if (numOfDivisibles <= 2) cache.push(latestChecked);

  return sieve(num, cache, latestChecked + 1);
}

function betterSieve(num) {
  // Generate an array of num entries filled with true
  let arr = Array(num).fill(true);

  arr[0] = arr[1] = false

  // Multiply each index in array by 2, 3, until result is larger than num. Mark each result with false because they aren't prime.
  for(let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    let multiplier = 2;

    while ((i * multiplier) <= num) {
      arr[i* multiplier] = false;
      multiplier++;
    }
  }

  // Convert array of true and false into array of just indexes of true
  const indexes = arr.reduce((acc, item, index) => {
    if (item == true) acc.push(index);
    return acc;
  }, []);

  return indexes;

}

module.exports = betterSieve;
