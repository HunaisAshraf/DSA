function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// console.log(selectionSort([7, 3, 4, 1, 3, 9, 5, 6, 3]));

function swap(arr, i, min) {
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
  return arr;
}

function selectionSortWithHelper(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
    swap(arr, i, min);
    }
  }
  return arr;
}

console.log(selectionSortWithHelper([7, 3, 4, 1, 9, 5, 6, 2]));
