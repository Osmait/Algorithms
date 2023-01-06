import { describe, expect, test } from "@jest/globals";
import { fibonacciSearch } from "../Search/fibonacci";

describe("Fibonacci Search ", () => {
  const myArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
  const n = myArray.length;
  const x = 90;
  test("expect to return the index of the item in the array ", () => {
    expect(fibonacciSearch(myArray, x, n)).toBe(9);
  });
});
