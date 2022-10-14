const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
	if (
		isNaN(sampleActivity) ||
		typeof sampleActivity === 'number' ||
		!sampleActivity ||
		sampleActivity > 15 ||
		sampleActivity <= 0 ||
		typeof sampleActivity === 'object'
	)
		return false;

	const rateOfDecay = (sampleActivity / MODERN_ACTIVITY).toFixed(16);
	const reactionConstant = (0.693 / HALF_LIFE_PERIOD).toFixed(16);

	return -Math.floor(Math.log(rateOfDecay) / reactionConstant);
}

module.exports = {
	dateSample
};
