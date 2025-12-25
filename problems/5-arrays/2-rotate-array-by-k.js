const rotateArrayByK = (arr, k) => {
  const n = arr.length;

  k = k % n;

  const leftArr = arr.slice(0, n - k);
  const rightArr = arr.slice(n - k);

  return [...rightArr, ...leftArr];
};

const arr = [1, 2, 3, 4, 5];
// console.log(rotateArrayByK(arr, 2));
