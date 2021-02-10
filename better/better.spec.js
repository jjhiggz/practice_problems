const { weekdayAdder } = require("./weekdayAdder");
const { maxFive, insertAt } = require("./maxFive");
const {
	isBalanced,
	findFirstBalanced,
	findShortestBalanced
} = require("./balancedString");

describe("findShortestBalance", () => {
	it("should return 5 for azABaabza", () => {
		expect(findShortestBalanced("azABaabza")).toBe(5);
	});

	it("should return -1 for TacoCat", () => {
		expect(findShortestBalanced("TacoCat")).toBe(-1);
	});

	it("return 8 for AcZCbaBz ", () => {
		expect(findShortestBalanced("AcZCbaBz")).toBe(8);
	});

	it("return -1 for abcdefghijklmnopqrstuvwxyz ", () => {
		expect(findShortestBalanced("abcdefghijklmnopqrstuvwxyz")).toBe(
			-1
		);
	});
});

describe("isBalanced", () => {
	it("returns balanced for CATattac", () => {
		expect(isBalanced("CATattac")).toBe(true);
	});
	it("returns not balanced for CATattac", () => {
		expect(isBalanced("Madame")).toBe(false);
	});
});

describe("findFirstBalanced", () => {
	it("should return  false for Madame", () => {
		expect(findFirstBalanced("Madame")).toBe(false);
	});

	it("should return aA for aAbsolutely", () => {
		expect(findFirstBalanced("aAbsolutely")).toBe("aA");
	});

	it("should return CATattac for CATattacee", () => {
		expect(findFirstBalanced("CATattacee")).toBe("CATattac");
	});
});
describe("maxFive", () => {
	it("returns  512345 for 12345", () => {
		expect(maxFive(12345)).toBe(512345);
	});

	it("returns  9995 for 999", () => {
		expect(maxFive(999)).toBe(9995);
	});
});

describe("insertAt", () => {
	it("returns [1,2,3,4,5] with ([1,2,3,5], 4, 3) ", () => {
		expect(insertAt([1, 2, 3, 5], 4, 3)).toEqual([1, 2, 3, 4, 5]);
	});
});

describe("weekdayAdder", () => {
	it("returns the same weekday if the number input is 7 or 0 multiples of 7", () => {
		expect(weekdayAdder("monday", 7)).toBe("monday");
		expect(weekdayAdder("monday", 0)).toBe("monday");
		expect(weekdayAdder("tuesday", 0)).toBe("tuesday");
		expect(weekdayAdder("sunday", 0)).toBe("sunday");
		expect(weekdayAdder("sunday", 21)).toBe("sunday");
	});
	it("works with upercase", () => {
		expect(weekdayAdder("Monday", 7)).toBe("monday");
	});

	it("calculates monday with sunday and 22", () => {
		expect(weekdayAdder("sunday", 22)).toBe("monday");
	});
});
