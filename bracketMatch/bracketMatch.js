function isBracket(character) {
	return ["(", ")", "[", "]", "{", "}"].includes(
		character
	);
}

function bracketMatch(stringInput) {
	// const brackets = stringInput
	// 	.split("")
	// 	.filter(isBracket);
	const brackets = stringInput.split("");
	let stack = [];
	for (let bracket of brackets) {
		if (isOpeningBracket(bracket)) {
			stack.push(bracket);
		} else {
			if (
				matchBracket(
					stack[stack.length - 1],
					bracket
				)
			) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}

function matchBracket(opening, closing) {
	const getClosing = {
		"{": "}",
		"(": ")",
		"[": "]"
	}[opening];
	return getClosing === closing;
}

function isOpeningBracket(bracket) {
	return ["[", "(", "{"].includes(bracket);
}

module.exports = {
	bracketMatch,
	isBracket,
	matchBracket,
	isOpeningBracket
};
