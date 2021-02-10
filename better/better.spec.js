const { weekdayAdder } = require("./weekdayAdder");

describe("weekdayAdder", () => {
	it("returns the same weekday if the number input is 7", () => {
		expect(weekdayAdder("monday", 7)).toBe("monday");
	});
});
