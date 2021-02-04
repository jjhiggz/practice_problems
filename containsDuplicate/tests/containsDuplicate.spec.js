const {
	containsDuplicate
} = require("../containsDuplicate");

describe("containsDuplicate", () => {
	it("Outputs true if [1, 1, 2, 3]", () => {
		expect(
			containsDuplicate([1, 1, 2, 3])
		).toBe(true);
	});
});
