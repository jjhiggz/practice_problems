function maxFive(number) {
	const splitNumbers = number
		.toString()
		.split("")
		.map(string => +string);
	for (let i = 0; i < splitNumbers.length; i++) {
		if (splitNumbers[i] < 5) {
			return +insertAt(splitNumbers, 5, i).join("");
		}
	}
	return +[...splitNumbers, 5].join("");
}

function insertAt(array, insertedValue, index) {
	return [
		...array.slice(0, index),
		insertedValue,
		...array.slice(index, array.length)
	];
}

module.exports = {
	maxFive,
	insertAt
};
