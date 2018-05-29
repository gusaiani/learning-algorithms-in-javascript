function fizzBuzzFor(num) {
  let answer = [];

  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0) { answer.push('fizzbuzz'); }
    else if (i % 3 == 0) { answer.push('fizz'); }
    else if (i % 5 == 0) { answer.push('buzz'); }
    else { answer.push(i); }
  }

  return answer.join(' ');
}

function fizzBuzzArray(num) {
  return [...Array(num).keys()].map(function(i) {
    if ((i+1) % 15 == 0) return 'fizzbuzz';
    if ((i+1) % 3 == 0) return 'fizz';
    if ((i+1) % 5 == 0) return 'buzz';
    return i+1;
  }).join(' ');
}

module.exports = fizzBuzzArray;
