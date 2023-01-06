export function binaruSearchRecursive(
  arr: any[],
  x: any,
  low = 0,
  high = arr.length - 1
): number {
  const mid = Math.floor(low + (high - low) / 2);
  if (high >= low) {
    if (arr[mid] === x) {
      return mid;
    }
    if (x < arr[mid]) {
      return binaruSearchRecursive(arr, x, low, mid - 1);
    } else {
      return binaruSearchRecursive(arr, x, mid + 1, high);
    }
  } else {
    return -1;
  }
}

export function binarySearchIterative(
  arr: any[],
  x: any,
  low = 0,
  high = arr.length - 1
) {
  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }
    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
