const {
	sherlockNAnagrams,
	flipWord,
	getAllLetterCombos
} = require("../sherlockNAnagrams");

describe.skip("sherlockNAnagrams", () => {
	it("calculates 4 for 'abba'", () => {
		expect(sherlockNAnagrams("abba")).toBe(4);
	});

	it("calculates 5 for 'cdcd'", () => {
		console.log(getAllLetterCombos("cdcd"));
		expect(sherlockNAnagrams("cdcd")).toBe(5);
	});
});

describe.skip("flipWord", () => {
	it("flips io to oi", () => {
		expect(flipWord("io")).toBe("oi");
	});
});

describe.skip("getAllLettercombos", () => {
	it("papa gives [p, a, , p, a, pa, ap, ...]", () => {
		expect(getAllLetterCombos("papa")).toEqual([
			"p",
			"a",
			"p",
			"a",
			"pa",
			"ap",
			"pa",
			"pap",
			"apa"
		]);
	});
	it("abba gives [a, b, b, a, ab, bb, ba, abb, bba]", () => {
		expect(getAllLetterCombos("abba")).toEqual([
			"a",
			"b",
			"b",
			"a",
			"ab",
			"bb",
			"ba",
			"abb",
			"bba"
		]);
	});
});
