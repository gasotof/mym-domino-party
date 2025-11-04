import { getDominoes } from "./utils.js";
import expect from "expect";

describe("getDominoes function", () => {
  test("should return 28 domino pieces", () => {
    const result = getDominoes().length;
    expect(result).toBe(28);
  });

  test("Should start with {cara1:0, cara2:0} and ends with {cara1:6, cara2:6}", () => {
    const result = getDominoes();
    expect(result[0]).toEqual({ cara1: 0, cara2: 0 });
    expect(result[result.length - 1]).toEqual({ cara1: 6, cara2: 6 });
  });

  test("Should be no duplicate dominoe", () => {
    const result = getDominoes();
    const combinations = result.map((domino) =>
      [domino.cara1, domino.cara2].join("-")
    );
    const uniqueCombos = new Set(combinations);
    expect(uniqueCombos.size).toEqual(result.length);
  });

  test("cara1 should not be greater than cara2", () => {
    const result = getDominoes();
    result.forEach(({ cara1, cara2 }) => {
      expect(cara1).toBeLessThanOrEqual(cara2);
    });
  });
});
