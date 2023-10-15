import expect from "expect";
import reverseString from "./reverseString.js";

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("ab return ba", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("abcdefg return gfedcba", () => {
  expect(reverseString("abcdefg")).toBe("gfedcba");
});
