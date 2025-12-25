const minMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { min, max };
};

const numbers = [3, 7, 2, 9, 4];

const result = minMax(numbers);
console.log("Min:", result.min);
console.log("Max:", result.max);
