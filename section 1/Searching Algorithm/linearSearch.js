function findPosition(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let arr = [5, 12, 8, 3, 21, 14, 7, 16, 9, 11];
// console.log(findPosition(arr,3));

function findAllOccurance(arr, val) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      res.push(i);
    }
  }
  return res;
}

// console.log(findAllOccurance([1, 4, 2, 3, 5, 0, 2, 8, 6, 4, 4, 7, 8], 4));

function minAndMax(arr) {
    let min = Infinity
    let max = -Infinity

    for(let i =0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }else{
            max = arr[i]
        }
    }

    return `min : ${min} and max : ${max}`
}

console.log(minAndMax([5, 12, 8, 3, 21, 14, 7, 16, 9, 11]));
