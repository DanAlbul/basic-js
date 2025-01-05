const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let obj = {}
  for(let i = 0; i < str.length; i += 1) {
		obj[str[i]] = (obj[str[i]] || 0 ) + 1
	}
	let res = ''
	Object.entries(obj).forEach(([k, v]) => res += v + k)
	return res
}

module.exports = {
  encodeLine
};
