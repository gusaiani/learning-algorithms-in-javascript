function fibonacci(position) {
  if (position === 1) return 1;
  if (position === 2) return 1;
  return fibonacci(position - 1) + fibonacci(position - 2);
}

module.exports = fibonacci;
