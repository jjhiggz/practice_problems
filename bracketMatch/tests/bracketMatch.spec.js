const {
	bracketMatch,
	isBracket,
	matchBracket,
	isOpeningBracket
} = require("../bracketMatch.js");

describe("bracketMatch", () => {
	it("returns false when provided with )", () => {
		expect(bracketMatch(")")).toBe(false);
	});

	it("returns false when provided with ([)]", () => {
		expect(bracketMatch("([)]")).toBe(false);
	});
	it.skip("returns true when provided with ([])", () => {
		expect(
			bracketMatch("([hello] cheeseypoof9000)")
		).toBe(true);
	});
	it.skip("returns false when provided with variable) => { console.log('hello')}", () => {
		expect(
			bracketMatch(
				"variable) => {console.log('hello')}"
			)
		).toBe(false);
	});
	it.skip("returns true when provided with (variable) => { console.log('hello')}", () => {
		expect(
			bracketMatch(
				"(variable) => {console.log('hello')}"
			)
		).toBe(true);
	});
});
describe("isBracket", () => {
	it("returns false if a", () => {
		expect(isBracket("a")).toBe(false);
	});

	it("returns true if (", () => {
		expect(isBracket("a")).toBe(false);
	});
});

describe("matchBracket", () => {
	it("should return false with ( and ]", () => {
		expect(matchBracket("(", "]")).toBe(false);
	});

	it("should return true with ( )", () => {
		expect(matchBracket("(", ")")).toBe(true);
	});

	it("should return true with [ ]", () => {
		expect(matchBracket("[", "]")).toBe(true);
	});
});

describe("isOpeningBracket", () => {
	it("should return false if )", () => {
		expect(isOpeningBracket(")")).toBe(false);
	});
	it("should return true if (", () => {
		expect(isOpeningBracket("(")).toBe(true);
	});
});
