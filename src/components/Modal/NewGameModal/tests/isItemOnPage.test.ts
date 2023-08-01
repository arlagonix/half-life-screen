import { test } from "vitest";
import { isItemOnPage } from "../utils";

// test cases were generated with the help of ChatGPT v3.5
const testCases: {
  itemIndex: number;
  pageNumber: number;
  pageSize: number;
  expectedResult: boolean;
}[] = [
  // Test cases where the item is on the current page
  { itemIndex: 5, pageNumber: 1, pageSize: 5, expectedResult: true },
  { itemIndex: 10, pageNumber: 2, pageSize: 5, expectedResult: true },
  { itemIndex: 15, pageNumber: 3, pageSize: 5, expectedResult: true },
  { itemIndex: 0, pageNumber: 1, pageSize: 1, expectedResult: true },

  // Test cases where the item is not on the current page
  { itemIndex: 6, pageNumber: 1, pageSize: 5, expectedResult: false },
  { itemIndex: 10, pageNumber: 1, pageSize: 5, expectedResult: false },
  { itemIndex: 4, pageNumber: 2, pageSize: 5, expectedResult: false },
  { itemIndex: 1, pageNumber: 2, pageSize: 2, expectedResult: false },

  // Edge cases with zero or negative values
  { itemIndex: 0, pageNumber: 0, pageSize: 0, expectedResult: true }, // Edge case: Zero values, the first item is on the first page
  { itemIndex: 0, pageNumber: 1, pageSize: 0, expectedResult: true }, // Edge case: Zero pageSize, the first item is always on the first page
  { itemIndex: -5, pageNumber: 1, pageSize: 5, expectedResult: false }, // Edge case: Negative itemIndex, should be false
  { itemIndex: 5, pageNumber: -1, pageSize: 5, expectedResult: false }, // Edge case: Negative pageNumber, should be false
  { itemIndex: 5, pageNumber: 1, pageSize: -5, expectedResult: false }, // Edge case: Negative pageSize, should be false

  // Larger page sizes
  { itemIndex: 9, pageNumber: 1, pageSize: 10, expectedResult: true }, // Edge case: pageSize equal to number of items, the last item is on the first page
  { itemIndex: 15, pageNumber: 2, pageSize: 10, expectedResult: true }, // Edge case: pageSize equal to number of items, the first item is on the second page
  { itemIndex: 50, pageNumber: 6, pageSize: 10, expectedResult: true }, // Larger page size, itemIndex is on the current page
  { itemIndex: 54, pageNumber: 6, pageSize: 10, expectedResult: false }, // Larger page size, itemIndex is not on the current page
];

testCases.forEach(({ itemIndex, pageNumber, pageSize, expectedResult }) => {
  test(`isItemOnPage returns ${expectedResult} for itemIndex=${itemIndex}, pageNumber=${pageNumber}, pageSize=${pageSize}`, () => {
    const result = isItemOnPage(itemIndex, pageNumber, pageSize);
    return result === expectedResult;
  });
});
