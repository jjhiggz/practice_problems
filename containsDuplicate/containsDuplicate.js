function containsDuplicate(nums) {
	let numbers = {};
	for (let i = 0; i < nums.length; i++) {
		if (!numbers[nums[i]]) {
			numbers[nums[i]] = true;
		} else {
			return true;
			break;
		}
	}
	return false;
}

module.exports = {
	containsDuplicate
};
