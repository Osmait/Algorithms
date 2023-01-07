import { describe, expect, test } from "@jest/globals";
import { containsDuplicate } from "../letCode/containsDuplicate";
import { prueba } from "./data";




describe("Contains Duplicate",()=>{
    test("expect to resturn if array containd duplicate",()=>{

        expect(containsDuplicate(prueba)).toBe(false)
    }
    )
})