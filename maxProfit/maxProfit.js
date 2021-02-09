function maxProfit(numbers) {
	numbers.filter((number, index) => {});
}
function leftSlope(leftPoint, center) {
	return center - leftPoint;
}

function rightSlope(center, rightPoint) {
	return rightPoint - center;
}

function isFlat(leftPoint, center, rightPoint) {
	console.log(
		"left slope",
		leftSlope(leftPoint, center)
	);
	console.log(
		"right slope",
		rightSlope(center, rightPoint)
	);
	return doesSignSwitch(
		leftSlope(leftPoint, center),
		rightSlope(center, rightPoint)
	);
}

function doesSignSwitch(y1, y2) {
	return y2 / Math.abs(y2) !== y1 / Math.abs(y1);
}

function oldMaxProfit(profitsArray) {
	let maxProfit =
		profitsArray[1] - profitsArray[0];
	for (
		let day1 = 0;
		day1 <= profitsArray.length - 2;
		day1++
	) {
		for (
			let day2 = day1 + 1;
			day2 <= profitsArray.length - 1;
			day2++
		) {
			if (
				profitsArray[day2] -
					profitsArray[day1] >
				maxProfit
			) {
				maxProfit =
					profitsArray[day2] -
					profitsArray[day1];
			}
		}
	}
	return maxProfit <= 0 ||
		profitsArray.length < 2
		? 0
		: maxProfit;
}

module.exports = {
	maxProfit,
	doesSignSwitch,
	isFlat
};
