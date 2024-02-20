import { fizzBuzz } from "@/utils/algorithm";
import { describe, expect, it } from "vitest";

describe("fizzBuzz", () => {
  it("should return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return the number", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
});
