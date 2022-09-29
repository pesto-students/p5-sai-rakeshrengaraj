// Created Memoize function

function add(a, b) {
  return a + b;
}

function sub(a, b = 0) {
  return a - b;
}

function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = args;
    if (key in cache) {
      console.log("Without Computing");
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      console.log("With Computing");
      return result;
    }
  };
}

const memoizeAdd = memoize(add);
const memoizeSub = memoize(sub);

// Addition
memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 100);

// Subtraction
memoizeAdd(200, 100);
memoizeAdd(100);
memoizeAdd(200, 200);
memoizeAdd(200, 100);
