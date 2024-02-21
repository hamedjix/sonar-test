// sum.test.js

import { factorial, max, sum } from "@/utils/math";
import { describe, expect, it, test } from "vitest";

test("adds 2 + 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});

describe("max", () => {
  it("should return the greater number", () => {
    expect(max(2, 5)).toBe(5);
  });
  it("should return one of the numbers", () => {
    expect(max(2, 2)).toBe(2);
  });
});

test("calculates factorial of a number", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(factorial(10)).toBe(3628800);
});
