function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i; //  storing the index of minimum element

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // updating the index of minimum element
      }
    }

    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([32, 8, 14, 11, 4, 82, 7])); // !! <=== [4,7,8,11,14,32,82]
