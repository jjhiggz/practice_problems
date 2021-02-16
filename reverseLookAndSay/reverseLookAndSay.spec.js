const { reverseLookAndSay } = require("./reverseLookAndSay");

describe("Reverse Look And Say", () => {
	it("turns 1211 into 21", () => {
		expect(reverseLookAndSay("1211")).toBe("21");
	});

	it("turns 21 11", () => {
		expect(reverseLookAndSay("21")).toBe("11");
	});

	it("turns 222 to invalid", () => {
		expect(reverseLookAndSay("222")).toBe(false);
	});

	it("turns 2222 to invalid", () => {
		expect(reverseLookAndSay("2222")).toBe(false);
	});
});
