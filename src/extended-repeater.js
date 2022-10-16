const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
	const mainString = [];

	let repeatNum = options.repeatTimes || 1;
	for (let mainI = 0; mainI < repeatNum; mainI++) {
		let additionString = [];
		let additionRepeatNum = options.additionRepeatTimes || 1;
		for (let addI = 0; addI < additionRepeatNum; addI++) {
			if (options.hasOwnProperty('addition')) additionString.push('' + options.addition);
		}
		mainString.push('' + str + additionString.join(options.additionSeparator || '|'));
	}
	return mainString.join(options.separator || '+');
}

module.exports = {
	repeater
};
