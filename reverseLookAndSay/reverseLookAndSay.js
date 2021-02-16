function reverseLookAndSay(numberString) {
	let split = numberString.split("");

	if (split.length % 2 !== 0) {
		return false;
	}

	let currentNumber = +split[0];
	let currentChar = split[1];
	let returnString = currentChar.repeat(currentNumber);

	for (let i = 2; i < split.length; i += 2) {
		let prevNumber = currentNumber;
		let prevChar = currentChar;
		currentNumber = +split[i];
		currentChar = split[i + 1];
		console.log(`currentChar: ${currentChar}`);
		console.log(`prevChar: ${prevChar}`);
		if (currentChar === prevChar) {
			return false;
		} else {
			returnString += currentChar.repeat(currentNumber);
		}
	}
	return returnString;
}

function reduceToSmallestReversal(numberString) {
	const reverseLook = reverseLookAndSay(numberString);
	if (reverseLook === numberString) {
		return numberString;
	} else if (reverseLook) {
		return reduceToSmallestReversal(reverseLook);
	} else {
		return numberString;
	}
}

module.exports = {
	reverseLookAndSay
};
