const valueLookup = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};
const onesLookup = {
	I: 1,
	II: 2,
	III: 3,
	IV: 4,
	V: 5,
	VI: 6,
	VII: 7,
	VIII: 8,
	IX: 9
};

function romanNumeralsDecoder(numeral) {
	const [notOnes, ones] = splitProblem(numeral);
	return calculateNotOnes(notOnes) + calculateOnes(ones);
}
function splitProblem(numeral) {
	const numeralArray = numeral.split("");
	const firstOnesIndex = numeralArray.findIndex(
		char => char === "V" || char === "I"
	); //finds the first character that represents the ones place
	return numeral.length > 0
		? [
				numeralArray.slice(0, firstOnesIndex).join(""),
				numeralArray
					.slice(firstOnesIndex, numeralArray.length)
					.join("")
		  ]
		: 0;
}

function calculateNotOnes(numeral) {
	return numeral.split("").reduce((acc, char) => {
		return valueLookup[char] + acc;
	}, 0);
}

function calculateOnes(numeral) {
	return numeral.length > 0 ? onesLookup[numeral] : 0;
}

module.exports = {
	splitProblem,
	calculateNotOnes,
	calculateOnes,
	romanNumeralsDecoder
};
