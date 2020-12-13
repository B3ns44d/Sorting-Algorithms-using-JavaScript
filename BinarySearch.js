const binarySearch = (inputArray, target) => {
  let floor = -1;
  let roof = inputArray.length;

  while (floor + 1 < roof) {
    const distance = roof - floor;
    const halfDistance = Math.floor(distance / 2);

    const guessIndex = floor + halfDistance;

    const guessValue = inputArray[guessIndex];

    if (guessValue === target) {
      return `${target} is in the array`;
    }

    if (guessValue > target) {
      roof = guessIndex;
    } else {
      floor = guessIndex;
    }
  }
  return `${target} is NOT in the array`;
};

console.log(binarySearch([2, 6, 42, 9, 5, 6, 4, 3, 66, 5, 3, 2], 6)); // ! <==  6 is in the array
