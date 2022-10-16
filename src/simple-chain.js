const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	list: [],

	getLength() {
		return this.list.length;
	},

	addLink(value) {
		this.list.push(`( ${value + ''} )`);
		return this;
	},

	removeLink(index) {
		if (this.list[index] === undefined || index < 1 || index > this.list.length - 1) {
			this.list = [];
			throw new Error(`You can\'t remove incorrect link!`);
		} else {
			this.list.splice(index - 1, 1);
		}
		return this;
	},

	reverseChain() {
		this.list.reverse();
		return this;
	},

	finishChain() {
		return ((arr = [...this.list]) => {
			this.list = [];
			return arr.join('~~');
		})();
	}
};

module.exports = {
	chainMaker
};
