function getHourglassPoints(iCenter, jCenter) {
  return {
    topLeft: [iCenter - 1, jCenter - 1],
    topMiddle: [iCenter - 1, jCenter],
    topRight: [iCenter - 1, jCenter + 1],
    center: [iCenter, jCenter],
    bottomLeft: [iCenter + 1, jCenter - 1],
    bottomMiddle: [iCenter + 1, jCenter],
    bottomRigh: [iCenter + 1, jCenter + 1],
  };
}
function hourglassSum(arr, atPoint) {
  return Object.values(getHourglassPoints(...atPoint)).reduce((acc, points) => {
    return arr[points[0]][points[1]] + acc;
  }, 0);
}

function greatestHourglassSum(arr) {
  let sum;
  for (let i = 1; i < arr.length - 1; i++) {
    let row = arr[i];
    for (let j = 1; j < row.length - 1; j++) {
      if ((!sum && sum !== 0) || sum < hourglassSum(arr, [i, j])) {
        console.log(sum, hourglassSum(arr, [i, j]));
        sum = hourglassSum(arr, [i, j]);
      }
    }
  }
  return sum;
}

module.exports = {
  getHourglassPoints,
  greatestHourglassSum,
  hourglassSum,
};
