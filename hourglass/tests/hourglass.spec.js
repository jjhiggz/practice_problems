const {
  getHourglassPoints,
  hourglassSum,
  greatestHourglassSum,
} = require("../hourglass");

const { readMatrix, readNumber } = require("../../helperFunctions/fsFunctions");

const answer1 = 19;
it.skip("hourglassSum is correctly calculated", async () => {
  const case1 = await readMatrix(
    "../2d-array-testcases/input/input00.txt",
    __dirname
  );
  expect(hourglassSum(case1, [1, 1])).toBe(7);
});

it.skip("correctly calculates the greatest hourglass Sum", async () => {
  const case1 = await readMatrix(
    "../2d-array-testcases/input/input00.txt",
    __dirname
  );
  expect(greatestHourglassSum(case1)).toBe(19);
});

it.skip("correctly calculates the greatest hourglass Sum", async () => {
  const case1 = await readMatrix(
    "../2d-array-testcases/input/input02.txt",
    __dirname
  );
  expect(greatestHourglassSum(case1)).toBe(0);
});
