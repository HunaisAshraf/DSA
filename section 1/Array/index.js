let arr = [1, 2];

let arr2 = [9, 8, 7, 6, 5];

arr[2]; // O(1) accessing index

arr.push(3); // O(1) adding element to the end of array

arr.pop(); // O(1) removing element from the end of the array

arr.unshift(0); //O(n) adding elemment to the start of the array

arr.shift(); //O(n) removing element from the start of array

let arr3 = arr.concat(arr2); //O(n) merging two array into one array

arr3.splice(1, 2); //O(n) removed two elements from arr3 starting from index 2

let multiplyByTwo = arr3.map((a) => a * 2); //O(n) multiplying all elements by two

let even = arr3.filter((a) => a % 2 === 0); //O(n) filtering values that are even

let sum = arr3.reduce((acc, curr) => curr + acc); //O(n) sum of all elements of the array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function search(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(search(array, 3)); // O(n)

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// console.log(reverseArray(array)); // O(n)

function moveZeros(arr) {
  let i = 0;
  let j = 1;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== 0) {
      i++;
    } else if (arr[i] === 0 && arr[j] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  return arr;
}

// console.log(moveZeros([2, 0, 3, 0, 4, 5])); // O(n)

function findSum(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === t) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(findSum([1, 2, 3, 4, 5, 6, , 7, 8, 9], 5));
