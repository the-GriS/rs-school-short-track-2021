/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let j = 0;
  let i = 0;
  let ignoreJ;
  if (matrix === undefined) {
    return sum;
  }
  for (j = 0; j < matrix[0].length; j++) {
    ignoreJ = false;
    for (i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        ignoreJ = true;
      }
      if (ignoreJ === false) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
