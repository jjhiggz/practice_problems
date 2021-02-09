const { merge, mergeSort, leftAndRight } = require("../mergeSort");

describe("leftAndRight", () => {
	it("should correctly split [1,2,3,4,5]", () => {
		expect(leftAndRight([1, 2, 3, 4, 5])).toEqual([
			[1, 2],
			[3, 4, 5]
		]);
	});

	it("should correctly split [1,2,3,4]", () => {
		expect(leftAndRight([1, 2, 3, 4])).toEqual([
			[1, 2],
			[3, 4]
		]);
	});
});

describe("mergeSort", () => {
	it("sort [1,3,2] to be [1,2,3]", () => {
		expect(mergeSort([1, 3, 2])).toEqual([1, 2, 3]);
	});

	it("sort [1,7,9,100,5]", () => {
		expect(mergeSort([1, 7, 9, 100, 5])).toEqual([1, 5, 7, 9, 100]);
	});

	it("sort [1,0,9,100,0] and handles zeros", () => {
		expect(mergeSort([1, 0, 9, 100, 0])).toEqual([0, 0, 1, 9, 100]);
	});
});

describe("merge", () => {
	it("should correctly calculate [1,4] and [2,3]", () => {
		expect(merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
	});

	it("works with 0", () => {
		expect(merge([0, 4], [0, 2])).toEqual([0, 0, 2, 4]);
	});

	it("should correctly calculate [1,2] and [3,4]", () => {
		expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
	});

	it("should work even if one array is empty ", () => {
		expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
		expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
	});

	it("should work with different length arrays", () => {
		expect(merge([1, 2, 3, 4], [1, 1, 2, 3, 4, 5, 6])).toEqual([
			1,
			1,
			1,
			2,
			2,
			3,
			3,
			4,
			4,
			5,
			6
		]);
	});
});
