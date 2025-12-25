const bubbleSortAsc = (items) => {
  const arr = [...items];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const bubbleSortDesc = (items) => {
  const arr = [...items];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const arr = [3, 10, -3, 48, 5, 33, 99];

console.log(
  "Bubble Sort ASC of [3, 10, -3, 48, 5, 33, 99] is:",
  bubbleSortAsc(arr)
);
console.log(
  "Bubble Sort DESC of [3, 10, -3, 48, 5, 33, 99] is:",
  bubbleSortDesc(arr)
);

// Time complexity:
// best: O(n);
// average: O(n ^ 2);
// worst: O(n ^ 2);
