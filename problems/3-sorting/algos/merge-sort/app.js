function mergeAsc(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSortAsc(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortAsc(arr.slice(0, mid));
  const right = mergeSortAsc(arr.slice(mid));

  return mergeAsc(left, right);
}

function mergeDesc(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

const mergeSortDesc = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortDesc(arr.slice(0, mid));
  const right = mergeSortDesc(arr.slice(mid));

  return mergeDesc(left, right);
};

const arr = [3, 10, -3, 48, 5, 33, 99];

console.log(
  "Merge Sort ASC of [3, 10, -3, 48, 5, 33, 99] is:",
  mergeSortAsc(arr)
);
console.log(
  "Merge Sort DESC of [3, 10, -3, 48, 5, 33, 99] is:",
  mergeSortDesc(arr)
);

// Time complexity:
// best: O(n * log n);
// average: O(n * log n);
// worst: O(n * log n);
