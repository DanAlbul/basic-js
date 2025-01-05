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

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]

const matrix1 = [
      [0],
    ]

const res = getMatrixElementsSum(matrix1)

console.log(res) // should be 9