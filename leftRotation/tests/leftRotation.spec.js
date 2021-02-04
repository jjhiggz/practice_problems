const { leftRotation } = require("../leftRotation");

it.skip("exists", () => {
	expect(leftRotation).not.toEqual({});
});

it.skip(" will correctly left shift [1, 2, 3] by one", () => {
	expect(leftRotation(1, [1, 2, 3])).toEqual([2, 3, 1]);
});

it.skip(" will correctly left shift [2, 3, 1] by one", () => {
	expect(leftRotation(1, [2, 3, 1])).toEqual([3, 1, 2]);
});
