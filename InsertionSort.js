var insertionSort = (inputArray) => {
    var length = inputArray.length;
    for (var i = 1; i < length; i++) {
        var key = inputArray[i];
        var j = i - 1;
        while (j >= 0 && inputArray[j] > key) {
            inputArray[j + 1] = inputArray[j];
            j = j - 1;
        }
        inputArray[j + 1] = key;
    }
    return inputArray;
};

console.log(insertionSort([32, 8, 14, 11, 4, 82, 7])) // !! <=== [4,7,8,11,14,32,82]