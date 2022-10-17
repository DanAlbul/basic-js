const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
	constructor(isEncrypt = true) {
		this.type = isEncrypt;
	}

	encrypt(message, key) {
		if (message === undefined || key === undefined || !message || !key)
			throw new Error('Incorrect arguments!');
		let keyArray = this.filterKey(key);
		if (keyArray.length == 0) {
			throw new Error('Incorrect arguments!');
		}

		let output = '';
		let index = 0;
		for (const char of message) {
			const cc = char.codePointAt(0);
			if (this.isUppercase(cc)) {
				console.log(
					String.fromCodePoint(((cc - 65 + keyArray[index % keyArray.length]) % 26) + 65)
				);
				output += String.fromCodePoint(
					((cc - 65 + keyArray[index % keyArray.length]) % 26) + 65
				);
				index++;
			} else if (this.isLowercase(cc)) {
				output += String.fromCodePoint(
					((cc - 97 + keyArray[index % keyArray.length]) % 26) + 97
				);
				index++;
			} else {
				output += char;
			}
		}
		return output.toUpperCase();
	}

	decrypt(message, key) {
		if (message === undefined || key === undefined || !message || !key)
			throw new Error('Incorrect arguments!');
	}

	filterKey(key) {
		let result = [];
		for (const ch of key) {
			const cc = ch.codePointAt(0);
			if (this.isLetter(cc)) result.push((cc - 65) % 32);
		}
		return result;
	}

	// Tests whether the given character code is a Latin letter.
	isLetter(c) {
		return this.isUppercase(c) || this.isLowercase(c);
	}

	// Tests whether the given character code is an Latin uppercase letter.
	isUppercase(c) {
		return 65 <= c && c <= 90; // 65 is character code for 'A'. 90 is 'Z'.
	}

	// Tests whether the given character code is a Latin lowercase letter.
	isLowercase(c) {
		return 97 <= c && c <= 122; // 97 is character code for 'a'. 122 is 'z'.
	}
}

module.exports = {
	VigenereCipheringMachine
};
