function quickSort(inputArray, left, right) {
    var num = inputArray.length,
        pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(inputArray, pivot, left, right);

        quickSort(inputArray, left, partitionIndex - 1);
        quickSort(inputArray, partitionIndex + 1, right);
    }
    return inputArray;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}


console.log(quickSort([32, 8, 14, 11, 4, 82, 7], 0, 6)); // !! <=== [4,7,8,11,14,32,82]