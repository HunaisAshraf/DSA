function debounce(func, delay) {
  let timer;
  return function (args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, [delay]);
  };
}

function search(args) {
  console.log(args.target.value);
}

const debounced = debounce(search, 1000);
