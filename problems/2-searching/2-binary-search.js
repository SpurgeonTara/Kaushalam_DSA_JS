const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const array = [10, 20, 30, 40, 50];
const target = 10;

const result = binarySearch(array, target);
console.log(
  result !== -1 ? `Element found at index ${result}` : "Element not found"
);
