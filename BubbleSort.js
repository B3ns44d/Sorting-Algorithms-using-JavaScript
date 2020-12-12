function bubbleSort(inputArray) {
  var num = inputArray.length;

  for (var i = num - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (inputArray[j - 1] > inputArray[j]) {
        var temp = inputArray[j - 1];

        inputArray[j - 1] = inputArray[j];

        inputArray[j] = temp;
      }
    }
  }
  return inputArray;
}
console.log(bubbleSort([6, 4, 3, 8, 5, 1, 9, 7])); // !! <=== [1,3,4,5,6,7,8,9]
