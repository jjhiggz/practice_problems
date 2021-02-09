const {
	maxProfit,
	doesSignSwitch,
	isFlat
} = require("../maxProfit");

describe.skip("maxProfit", () => {
	it("should return 5, when inputtinng [7, 1, 5, 3, 6, 4]", () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(
			5
		);
	});

	it("should return 5, when inputtinng [1,2,4]", () => {
		expect(maxProfit([1, 2, 4])).toBe(3);
	});
});

describe("doesSignSwitch", () => {
	it("equals false with -1 and -2", () => {
		expect(doesSignSwitch(-1, -2)).toBe(false);
	});

	it("equals false with -1 and 2", () => {
		expect(doesSignSwitch(-1, 2)).toBe(true);
	});
});

describe("isFlat", () => {
	it("should return false when given 0 1 2 ", () => {
		expect(isFlat(0, 1, 2)).toBe(false);
	});

	it("should return true when given 1 0 1 ", () => {
		expect(isFlat(1, 0, 1)).toBe(true);
	});
});
