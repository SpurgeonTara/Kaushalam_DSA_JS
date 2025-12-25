function binarySearch(arr, el) {
  const arraySize = arr.length;

  const low = 0;
  let high = arraySize - 1;
  for (let i = 0; i < arraySize; i++) {
    const mid = Math.floor((low + high) / 2);

    if (el === arr[mid]) {
      return mid;
    } else if (arr[mid] < el) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

const array = [10, 20, 30, 40, 50];
const target = 10;

const result = binarySearch(array, target);
console.log(
  result !== -1 ? `Element found at index ${result}` : "Element not found"
);
