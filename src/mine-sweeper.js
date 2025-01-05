const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const rows = matrix.length;
  const cols = matrix[0].length;

	const minesArray = Array.from({ length: rows }, () => Array(cols).fill(0))

	let clearFieldCheck = matrix.flat().every((a) => a === false)
	if (clearFieldCheck) return minesArray

	const getAdjacentCells = (matrix, row, col) => {
    const adjacentCells = [];

		// Up
    if (row > 0) { // checking if the cell above the current cell exists
			let cellAbove = matrix[row - 1][col]
			if(cellAbove) {
				adjacentCells.push(1);
			}
    }

    // Down
    if (row < rows - 1) { // checking if the cell below the current cell exists
			let cellBelow = matrix[row + 1][col]
			if(cellBelow) {
				adjacentCells.push(1);
			}
    }

    // Left
    if (col > 0) { // checking if the cell on the left from the current cell exists
			let cellOnTheLeft = matrix[row][col - 1]
      if (cellOnTheLeft) {
				adjacentCells.push(1);
			}
    }

    // Right
    if (col < cols - 1) { // checking if the cell on the right from the current cell exists
			let cellOnTheRight = matrix[row][col + 1]
			if (cellOnTheRight) {
				adjacentCells.push(1);
			}
    }
		return adjacentCells;
	}


	for(let rowIndex = 0; rowIndex < matrix.length; rowIndex+= 1) {
		for(let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex += 1) {
			const adjacentCell = getAdjacentCells(matrix, rowIndex, colIndex)
			minesArray[rowIndex][colIndex] = adjacentCell.length ? adjacentCell.length : 1
		}
	}

	return minesArray
}


module.exports = {
  minesweeper
};
