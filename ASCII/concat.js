const array = [
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3]
];
const A = [
	[" ", "#", " ", " "],
	["#", " ", "#", " "],
	["#", "#", "#", " "],
	["#", " ", "#", " "],
	["#", " ", "#", " "]
];

const B = [
	["#", "#", " ", " "],
	["#", " ", "#", " "],
	["#", "#", " ", " "],
	["#", " ", "#", " "],
	["#", "#", " ", " "]
];

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
console.log(concat(A, B).join("\n"));
