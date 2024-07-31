const obj = {
  a: {
    a1: 1,
    a2: 2,
    a3: {
      a31: 1,
      a32: 2,
    },
  },
  b: {
    b1: 1,
    b2: 2,
  },
};

function flattenObj(obj, res = {}) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenObj(obj[key], res);
    } else {
      res[key] = obj[key];
    }
  }

  return res;
}

console.log(flattenObj(obj));
