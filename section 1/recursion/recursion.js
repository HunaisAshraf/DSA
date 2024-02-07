function recursion(num) {
  if (num <= 0) return;

  console.log(num);
  num--;
  recursion(num);
}

// recursion(10);

function sum(num) {
  if (num <= 0) {
    return 0;
  }
  return num + sum(num - 1);
}

// console.log(sum(3));

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(factorial(5));

function recursiveBinarySearch(arr, val, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      return recursiveBinarySearch(arr, val, left + 1, right);
    } else {
      return recursiveBinarySearch(arr, val, left, right - 1);
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(recursiveBinarySearch(arr, 7, 0, arr.length - 1));
