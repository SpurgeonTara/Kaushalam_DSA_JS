const quickSortAsc = (arr) => {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerArray = [];
  const biggeArray = [];
  const pivot = copiedArray[0];
  const centerdElements = [pivot];

  for (let i = 1; i < copiedArray.length; i++) {
    if (copiedArray[i] > pivot) {
      biggeArray.push(copiedArray[i]);
    } else if (copiedArray[i] < pivot) {
      smallerArray.push(copiedArray[i]);
    } else {
      centerdElements.push(copiedArray[i]);
    }
  }

  return [
    ...quickSortAsc(smallerArray),
    ...centerdElements,
    ...quickSortAsc(biggeArray),
  ];
};

const quickSortDesc = (arr) => {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerArray = [];
  const biggeArray = [];
  const pivot = copiedArray[0];
  const centerdElements = [pivot];

  for (let i = 1; i < copiedArray.length; i++) {
    if (copiedArray[i] > pivot) {
      biggeArray.push(copiedArray[i]);
    } else if (copiedArray[i] < pivot) {
      smallerArray.push(copiedArray[i]);
    } else {
      centerdElements.push(copiedArray[i]);
    }
  }

  return [
    ...quickSortDesc(biggeArray),
    ...centerdElements,
    ...quickSortDesc(smallerArray),
  ];
};

const arr = [3, 10, -3, 48, 5, 33, 99];

console.log(
  "Quick Sort ASC of [3, 10, -3, 48, 5, 33, 99] is:",
  quickSortAsc(arr)
);

console.log(
  "Quick Sort DESC of [3, 10, -3, 48, 5, 33, 99] is:",
  quickSortDesc(arr)
);

// Time complexity:
// best: O(n * logn);
// average: O(n * logn);
// worst: O(n ^ 2);
