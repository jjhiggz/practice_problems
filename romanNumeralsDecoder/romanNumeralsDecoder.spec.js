const {
	splitProblem,
	calculateNotOnes,
	calculateOnes,
	romanNumeralsDecoder
} = require("./romanNumeralsDecoder");

describe("romanNumeralsDecoder", () => {
	it("should calculate 5 for V", () => {
		expect(romanNumeralsDecoder("V")).toBe(5);
	});
});

describe("splitProblem", () => {
	it("should not change VII", () => {
		expect(splitProblem("VII")).toEqual(["", "VII"]);
	});

	it("should change XVII to [X, VII]", () => {
		expect(splitProblem("XVII")).toEqual(["X", "VII"]);
	});
});

describe("calculateNotOnes", () => {
	it("calculates 10 for X", () => {
		expect(calculateNotOnes("X")).toBe(10);
	});

	it("calculates 60 for LX", () => {
		expect(calculateNotOnes("LX")).toBe(60);
	});

	it("calculates 0 for empty string", () => {
		expect(calculateNotOnes("")).toBe(0);
	});
});

describe("calculateOnes", () => {
	it("should return 1 for I", () => {
		expect(calculateOnes("I")).toBe(1);
	});

	it("should return 0 for empty string", () => {
		expect(calculateOnes("I")).toBe(1);
	});
});
