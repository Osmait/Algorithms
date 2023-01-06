import { exponentialSearch } from "../Search/exponentialSearch";
import { describe, expect, test } from "@jest/globals";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("Exponential Search", () => {
  test("expect to return the index of the item in the array", () => {
    expect(exponentialSearch(arr, arr.length, 5)).toBe(4);
  });
  test("expect to return the index of the item in the array", () => {
    expect(exponentialSearch(arr, arr.length, 6)).toBe(5);
  });
  test("expect to return the index of the item in the array", () => {
    expect(exponentialSearch(arr, arr.length, 1)).toBe(0);
  });
  test("expect to return the index of the item in the array", () => {
    expect(exponentialSearch(arr, arr.length, 10)).toBe(9);
  });
});
