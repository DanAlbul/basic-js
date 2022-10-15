const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
	if (!(arr instanceof Array))
		throw Error("'arr' parameter must be an instance of the Array!");
	const new_arr = [...JSON.parse(JSON.stringify(arr))];

	const rules = {
		'--discard-next': (index) => {
			return arr[index + 1] !== undefined ? new_arr.splice(index, 2) : 'stop';
		},
		'--discard-prev': (index) => {
			return arr[index - 1] !== undefined ? new_arr.splice(index - 1, 2) : 'stop';
		},
		'--double-next': (index) => {
			return arr[index + 1] !== undefined
				? new_arr.splice(index, 1, new_arr[index + 1])
				: 'stop';
		},
		'--double-prev': (index) => {
			return arr[index - 1] !== undefined
				? new_arr.splice(index, 1, new_arr[index - 1])
				: 'stop';
		}
	};

	for (let i = 0; i < arr.length; i++) {
		let removed = [];
		let all_rules = Object.keys(rules);

		if (all_rules.includes(new_arr[i])) {
			let rule = arr[i];
			let index = new_arr.indexOf(rule);

			removed = rules[rule](index);
			if (removed.includes(arr[index + 1])) {
				new_arr.splice(index, 1);
			} else if (removed === 'stop') {
				return new_arr.filter((el) => el !== rule);
			}
		}
	}
	return new_arr;
}

module.exports = {
	transform
};
