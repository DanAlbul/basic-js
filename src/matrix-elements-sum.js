const { NotImplementedError } = require('../extensions/index.js');

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
  for(let rowI = 0; rowI < matrix.length; rowI += 1) {
    for(let colI = 0; colI < matrix[rowI]?.length; colI += 1) {
			let cell = matrix[rowI][colI];
			if (cell === 0 && colI === matrix[rowI].length - 1) {
				matrix.pop()
			}
			sum += cell;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
