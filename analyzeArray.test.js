import expect from "expect";
import analyzeArray from "./analyzeArray";

const a1 = [1, 3, 2, 5, 9];
const a2 = [];

test("sum of a1 is 20", () => {
  expect(analyzeArray(a1).sum).toBe(20);
});

test("length of a1 is 5", () => {
  expect(analyzeArray(a1).length).toBe(5);
});

test("average of a1 is 4", () => {
  expect(analyzeArray(a1).average).toBe(4);
});

test("max of a1 is 9", () => {
  expect(analyzeArray(a1).max).toBe(9);
});

test("min of a1 is 1", () => {
  expect(analyzeArray(a1).min).toBe(1);
});

test("sum of a2 is 0", () => {
  expect(analyzeArray(a2).sum).toBe(0);
});

test("length of a2 is 0", () => {
  expect(analyzeArray(a2).length).toBe(0);
});

test("average of a2 is undefined", () => {
  expect(analyzeArray(a2).average).toBe(undefined);
});

test("max of a2 is undefined", () => {
  expect(analyzeArray(a2).max).toBe(undefined);
});

test("min of a2 is undefined", () => {
  expect(analyzeArray(a2).min).toBe(undefined);
});
