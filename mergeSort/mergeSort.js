function mergeSort(arr) {
	const [left, right] = leftAndRight(arr);
	return right.length <= 1 && left.length <= 1
		? merge(left, right)
		: merge(mergeSort(left), mergeSort(right));
}

function leftAndRight(arr) {
	const middle = Math.floor(arr.length / 2);
	return [arr.slice(0, middle), arr.slice(middle, arr.length)];
}

function merge(arr1, arr2) {
	let returnArray = [];
	let i = 0;
	let j = 0;
	while (returnArray.length < arr1.length + arr2.length) {
		if (i === arr1.length) {
			returnArray.push(...arr2.slice(j));
			break;
		} else if (j === arr2.length) {
			returnArray.push(...arr1.slice(i));
			break;
		}

		if (arr1[i] < arr2[j]) {
			returnArray.push(arr1[i]);
			i++;
		} else if (arr2[j] < arr1[i]) {
			returnArray.push(arr2[j]);
			j++;
		} else if (arr2[j] === arr1[i]) {
			returnArray.push(arr2[j]);
			returnArray.push(arr1[i]);
			j++;
			i++;
		}
	}
	return returnArray;
}
module.exports = {
	leftAndRight,
	merge,
	mergeSort
};
