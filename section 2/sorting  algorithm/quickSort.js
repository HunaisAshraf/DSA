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

// console.log(quickSort([1, 2, 6, 4, 3, 7]));
// console.log(pivot([1, 2, 6, 4, 3, 7]));

//with extra space
function sort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sort(left), pivot, ...sort(right)];
}

console.log(sort([1, -6, 2, 4, -3, 7]));
