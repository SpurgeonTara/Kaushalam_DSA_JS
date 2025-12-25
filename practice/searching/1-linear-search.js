const linearSearch = (el, arr) => {
  const arraySize = arr.length;

  for (let i = 0; i < arraySize; i++) {
    if (el === arr[i]) {
      return i;
    }
  }

  return -1;
};

const array = [10, 20, 30, 40, 50];
const target = 40;

const result = linearSearch(target, array);

console.log(
  result !== -1 ? `Element found at index ${result}` : "Element not found"
);
