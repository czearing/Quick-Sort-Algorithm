import { quickSort } from "./QuickSort";

describe("quickSort", () => {
  it("Sorts a number array", () => {
    expect(quickSort([1, 3, 45, 5, 6, 7, 8])).toStrictEqual([
      1,
      3,
      5,
      6,
      7,
      8,
      45
    ]);
  });
  it("Handles empty array", () => {
    expect(quickSort([])).toStrictEqual([]);
  });
  it("Handles string", () => {
    expect(quickSort(["2", 45, 5, 6, "3", 7, 8])).toStrictEqual([
      "2",
      "3",
      5,
      6,
      7,
      8,
      45
    ]);
  });
  it("Handles decimals, zero, and negative values", () => {
    expect(quickSort([0, 45, 5, -2, -4.7678, -123, 45])).toStrictEqual([
      -123,
      -4.7678,
      -2,
      0,
      5,
      45,
      45
    ]);
  });
});
