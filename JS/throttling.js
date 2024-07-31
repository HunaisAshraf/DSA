function throttle(func, delay) {
  let flag = true;
  return function () {
    let arg = arguments;
    let context = this;
    if (flag) {
      func.apply(context, arg);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

function print(arg) {
  console.log(arg.target.value);
}

const throttled = throttle(print, 500);
