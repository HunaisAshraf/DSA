function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));

function firstOccurance(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      res = mid;
      right = mid - 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

// console.log(firstOccurance([1, 2, 3, 4, 4, 4, 5, 6, 7, 8], 4));

function lastOccurance(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      res = mid;
      left = mid + 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

// console.log(lastOccurance([1, 2, 3, 4, 4, 4, 5, 6, 7, 8], 4));

function countOccurence(arr, val) {
  let first = firstOccurance(arr, val);
  let last = lastOccurance(arr, val);

  let count = last - first + 1;
  return count;
}

console.log(countOccurence([1, 2, 3, 4, 4, 4,4, 5, 6, 7, 8], 4));
