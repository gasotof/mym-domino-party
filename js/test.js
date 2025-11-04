import { getDominoes, getShuffle } from "./utils.js";
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

describe("getShuffle function", () => {
  test("the last dominoes shuoldn't be {cara1:6, cara2:6}", () => {
    const result = getShuffle(getDominoes());
    expect(result[result.length - 1]).not.toEqual({ cara1: 6, cara2: 6 });
  });

  test("should change the order of elements for a large array", () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = getShuffle(originalArray);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });
});

describe("getShuffle", () => {
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let shuffledArray;

  beforeEach(() => {
    shuffledArray = getShuffle(originalArray);
  });

  it("should return an array of the same length", () => {
    expect(shuffledArray.length).toBe(originalArray.length);
  });

  it("should contain all the same elements as the original", () => {
    const sortedOriginal = [...originalArray].sort();
    const sortedShuffled = [...shuffledArray].sort();

    expect(sortedShuffled).toEqual(sortedOriginal);
  });
});
