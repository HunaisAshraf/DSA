function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, swapIdx, start);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, pivotIndex + 1, right);

    quickSort(arr, left, pivotIndex - 1);
  }
  return arr;
}

console.log(quickSort([4, 2, 6, 1, 3, 7]));
// console.log(pivot([4, 2, 6, 1, 3, 7]));
