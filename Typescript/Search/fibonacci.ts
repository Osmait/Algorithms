export const fibonacciSearch = (
  arr: number[],
  x: number,
  n: number
): number => {
  let fib2 = 0;
  let fib1 = 1;
  let fibk = fib2 + fib1;

  while (fibk < n) {
    fib2 = fib1;
    fib1 = fibk;
    fibk = fib2 + fib1;
  }
  let offset = -1;

  while (fibk > 1) {
    const i = Math.min(offset + fib2, n - 1);

    if (arr[i] < x) {
      fibk = fib1;
      fib1 = fib2;
      fib2 = fibk - fib1;
      offset = i;
    } else if (arr[i] > x) {
      fibk = fib2;
      fib1 = fib1 - fib2;
      fib2 = fibk - fib1;
    } else {
      return i;
    }
  }
  if (fib1 && arr[offset + 1] === x) {
    return offset + 1;
  }
  return -1;
};
