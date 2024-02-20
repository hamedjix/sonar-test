// sum.test.js
import { sum } from "@/utils/math";
import { expect, test } from "vitest";

test("adds 2 + 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});
