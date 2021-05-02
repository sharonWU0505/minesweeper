import { DEFAULT_LEVEL, getGameLevel } from "../../utils";

test("getGameLevel with level = easy", () => {
  expect(getGameLevel({ level: "easy" })).toEqual(DEFAULT_LEVEL);
});
