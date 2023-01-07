import { describe, expect, test } from "@jest/globals";
import { twoSum } from "../letCode/twosum";
import { isValidAnagram } from "../letCode/valid_anagram";


describe("Valid Anagram",()=>{
    test("expect to return if text is anagram",()=>{
        expect(isValidAnagram("aacc","ccac")).toBe(false)
    })

   
})

describe("return indices of the two numbers",()=>{
    expect(twoSum([2,7,11,15],9)).toBeCalledWith([0,1])
})