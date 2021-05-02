import { getCellIndexByXAndY, getCellXAndYByIndex } from "../../utils";

// test getCellIndexByXAndY
test("getCellIndexByXAndY with x = 0, y = 0, rows = 0", () => {
  expect(getCellIndexByXAndY({ x: 0, y: 0, rows: 0 })).toBe(0);
});

test("getCellIndexByXAndY with x = 0, y = 0, rows = 9", () => {
  expect(getCellIndexByXAndY({ x: 0, y: 0, rows: 9 })).toBe(0);
});

test("getCellIndexByXAndY with x = 3, y = 4, rows = 9", () => {
  expect(getCellIndexByXAndY({ x: 3, y: 4, rows: 9 })).toBe(31);
});

// test getCellXAndYByIndex
test("getCellXAndYByIndex with index = 0, rows = 0", () => {
  expect(getCellXAndYByIndex({ index: 0, rows: 9 })).toEqual([0, 0]);
});

test("getCellXAndYByIndex with index = 0, rows = 9", () => {
  expect(getCellXAndYByIndex({ index: 0, rows: 9 })).toEqual([0, 0]);
});

test("getCellXAndYByIndex with index = 24, rows = 9", () => {
  expect(getCellXAndYByIndex({ index: 24, rows: 9 })).toEqual([2, 6]);
});
