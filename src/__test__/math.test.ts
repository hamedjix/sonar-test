// sum.test.js
import { max, sum } from "@/utils/math";
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
