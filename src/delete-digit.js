const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let numberString = '' + n;
	let max = 0;
	for (let i = 0; i < numberString.length; i++) {
		let test = numberString.split('');
		test.splice(i, 1);

		let temp = test.join('');
		if (max < temp) max = test.join('');
	}
	return parseInt(max);
}

module.exports = {
	deleteDigit
};
