const arr = [1, [2, 3], [4, [5, [111, [222, [333]]], 6, [7, 8, [9, 0]]]]];

function flattenArr(arr, res = []) {
  for (let ar of arr) {
    if (Array.isArray(ar)) {
      flattenArr(ar, res);
    } else {
      res.push(ar);
    }
  }
  return res;
}

const resArr = flattenArr(arr);

console.log(resArr);
