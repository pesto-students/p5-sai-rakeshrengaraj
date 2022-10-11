function printNGE(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let max = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        max = arr[j];
        break;
      }
    }
    result.push(max);
  }
  return result;
}

console.log(printNGE([11, 13, 21, 3]));

