import caeserCipher from "./caeserCipher";
import expect from "expect";

test("Empty string", () => {
  expect(caeserCipher("")).toBe("");
});

test("lower case a -> b", () => {
  expect(caeserCipher("a")).toBe("b");
});

test("lower case z -> a", () => {
  expect(caeserCipher("z")).toBe("a");
});

test("lower case A -> B", () => {
  expect(caeserCipher("A")).toBe("B");
});

test("lower case z -> a", () => {
  expect(caeserCipher("Z")).toBe("A");
});

test("other characters stays the same, !@#$% 1234 => !@#$% 1234", () => {
  expect(caeserCipher("!@#$% 1234")).toBe("!@#$% 1234");
});
