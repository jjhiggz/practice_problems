function findFirstBalanced(string) {
	splitString = string.split("");

	let currentBalanced = [];
	for (let char of string) {
		currentBalanced.push(char);
		if (isBalanced(currentBalanced.join(""))) {
			return currentBalanced.join("");
		}
	}
	return false;
}

function findShortestBalanced(string) {
	const split = string.split("");
	let currentShortestBalanced = false;
	let newShortestBalanced;
	for (let i = 0; i < string.length; i++) {
		newShortestBalanced = findFirstBalanced(split.slice(i).join(""));
		if (!currentShortestBalanced && newShortestBalanced) {
			currentShortestBalanced = newShortestBalanced;
		} else if (
			currentShortestBalanced.length > newShortestBalanced.length
		) {
			currentShortestBalanced = newShortestBalanced;
		}
	}
	return currentShortestBalanced
		? currentShortestBalanced.length
		: -1;
}

function isBalanced(string) {
	const array = string.split("");
	let map = {};
	for (let letter of array) {
		if (flipCase(letter) in map) {
			map[flipCase(letter)] = 0;
		} else if (!(letter in map)) {
			map[letter] = 1;
		}
	}
	return (
		Object.values(map).reduce((acc, el) => {
			return acc + el;
		}, 0) === 0
	);
}

function isUpper(char) {
	return char.toUpperCase() === char && char.toLowerCase() !== char;
}

function isLower(char) {
	return char.toLowerCase() === char && char.toUpperCase() !== char;
}

function flipCase(char) {
	if (isUpper(char)) {
		return char.toLowerCase();
	} else if (isLower(char)) {
		return char.toUpperCase();
	} else {
		return char;
	}
}

module.exports = {
	findFirstBalanced,
	findShortestBalanced,
	isBalanced,
	flipCase
};
