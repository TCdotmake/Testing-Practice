import expect from "expect";
import capitalize from "./capitalize.js";

test("First letter should be capitalized", () => {
  const result = capitalize("cat")[0];
  expect(result).toEqual("cat".toUpperCase()[0]);
});

test("All letters after the first stays the same", () => {
  const original = "hunnie BUNNY!!!!";
  const result = capitalize(original);
  expect(result.slice(1)).toEqual(original.slice(1));
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});
