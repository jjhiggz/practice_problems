rows = [
	" #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ",
	"# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ",
	"### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ",
	"# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ",
	"# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  # "
];

let W = 3;
let H = 5;

function createGroupings(row) {
	let returnArray = [[]];
	let returnIndex = 0;
	for (let i = 0; i < row.length; i++) {
		if (i % (W + 1) === 0 && i !== 0) {
			returnIndex++;
			returnArray[returnIndex] = [];
		}
		returnArray[returnIndex].push(row[i]);
	}
	return returnArray;
}

function getAlphabetIndex(letter) {
	if (isLetter(letter)) {
		return (letter.toUpperCase().charCodeAt(0) - 39) % 26;
	} else if (!isLetter(letter)) {
		return 26;
	}
}

function isLetter(char) {
	return char.toUpperCase() !== char.toLowerCase();
}
function createLetterMatrix(letter) {
	let transformedRows = rows.map(
		row => createGroupings(row)[getAlphabetIndex(letter)]
	);

	return transformedRows;
}

function renderAscii(sentence) {
	const letterMatrices = sentence
		.split("")
		.map(letter => createLetterMatrix(letter));

	let combine = letterMatrices[0];

	for (let i = 1; i < letterMatrices.length; i++) {
		combine = concat(combine, letterMatrices[i]);
	}
	return combine
		.map(row => {
			return row.join("");
		})
		.join("\n");
}

function twoDimensionalConcat(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		throw new Error("Arrays must be same length");
	}
}

function concat(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		throw new Error("Arrays need to have same length");
	}
	let returnArray = [];

	for (let i = 0; i < arr1.length; i++) {
		returnArray[i] = arr1[i].concat(arr2[i]);
	}
	return returnArray;
}

// console.log(renderAscii("ABCDEFGHIJKLMNOPQRSTUVWXYZs"));

console.log(renderAscii("h@llo?"));
