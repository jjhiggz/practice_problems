function sherlockNAnagrams(word) {
	let letterCombos = getAllLetterCombos(word);
	let words = {};
	let sum = 0;
	letterCombos.forEach(letterCombo => {
		if (words[flipWord(letterCombo)]) {
			sum++;
		}
		words[letterCombo] = true;
	});
	return sum;
}

function getAllLetterCombos(word) {
	let combos = [];
	for (
		let wordLength = 1;
		wordLength < word.length;
		wordLength++
	) {
		for (
			let index = 0;
			index <= word.length - wordLength;
			index++
		) {
			combos.push(word.slice(index, index + wordLength));
		}
	}
	return combos;
}

function flipWord(word) {
	return word
		.split("")
		.reverse()
		.join("");
}

module.exports = {
	sherlockNAnagrams,
	flipWord,
	getAllLetterCombos
};
