function leftRotation(d, arr) {
  return [...arr.slice(d, arr.length), ...arr.slice(0, d)];
}

module.exports = { leftRotation };
