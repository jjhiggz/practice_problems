const {
	isOrdered,
	minimumBribe
} = require("../minimumBribe");

it.skip("exists", () => {
	expect(minimumBribe).not.toEqual(undefined);
});

it.skip("calculates that [1,2,3,5,4] => 1", () => {
	expect(minimumBribe([1, 2, 3, 5, 4])).toBe(1);
});

describe.skip("isOrdered", () => {
	it("returns false for [1,3,2]", () => {
		expect(isOrdered([1, 3, 2])).toBe(false);
	});
	it("returns true for [ 1, 2, 3 ]", () => {
		expect(isOrdered([1, 2, 3])).toBe(true);
	});
});
