
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce((arr, elem, index) => [...arr, ...(index % 2 !== 0 ? elem.reverse() : elem)], []);
}
