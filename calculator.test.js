import expect from "expect";
import calculator from "./calculator.js";

test("adding 1+2 equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 9-15 equal -6", () => {
  expect(calculator.subtract(9, 15)).toBe(-6);
});

test("divide 33/11 equal 3", () => {
  expect(calculator.divide(33, 11)).toBe(3);
});

test("multiply 5*9 equals 45", () => {
  expect(calculator.multiply(5, 9)).toBe(45);
});
