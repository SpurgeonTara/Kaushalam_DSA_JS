const linearSearch = (arr, number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
};

const array = [10, 20, 30, 40, 50];
const target = 40;

const result = linearSearch(array, target);

console.log(
  result !== -1 ? `Element found at index ${result}` : "Element not found"
);
