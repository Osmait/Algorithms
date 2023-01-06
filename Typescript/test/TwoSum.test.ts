import { describe, expect, test } from "@jest/globals";
import { twoSum } from "../TwoSum";

describe("TwoSum", () => {
  const testCase = {
    list: [2, 5, 5, 11],
    target: 10,
    result: [2, 1],
  };
  test("Expect to return indices of the two numbers such that they add up to", () => {
    expect(twoSum(testCase.list, testCase.target)).toBe(testCase.result);
  });
});
