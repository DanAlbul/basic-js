const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let team = [];
	const arr = members.filter((item) => typeof item == 'string');
	for (let i = 0; i < arr.length; i++) {
		team.push(arr[i].trim().toUpperCase()[0]);
	}
	return team.sort().join('');
}

module.exports = {
	createDreamTeam
};
