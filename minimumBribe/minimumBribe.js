function minimumBribe(lineOrder) {
	return 1;
}

function isOrdered(array) {
	return (
		JSON.stringify([...array].sort((a, b) => a - b)) ===
		JSON.stringify(array)
	);
}

module.exports = {
	minimumBribe,
	isOrdered
};
