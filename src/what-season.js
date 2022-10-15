const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!';
	const seasons = {
		winter: [12, 1, 2],
		autumn: [9, 10, 11],
		spring: [3, 4, 5],
		summer: [6, 7, 8]
	};
	try {
		const dateObjectCheck = date;
		dateObjectCheck.toJSON();
		date.getMonth();
	} catch {
		throw new Error('Invalid date!');
	}

	for (const [season, months] of Object.entries(seasons)) {
		if (months.includes(date.getMonth() + 1)) return season.toString();
	}
}

module.exports = {
	getSeason
};
