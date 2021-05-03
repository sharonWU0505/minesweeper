import { render, fireEvent } from "@testing-library/react";
import Game from "../../containers/Game";
import { Cell } from "../../components";

const DEFAULT_CELL = {
  x: 0,
  y: 0,
  value: 0,
  isRevealed: false,
  isFlagged: false,
  isMine: false,
  onClick: () => {},
  onContextMenu: () => {},
  gameEnded: false,
  isFailedCell: false,
};

test("renders Game", () => {
  const { getByTestId } = render(<Game />);
  expect(getByTestId("game")).toBeInTheDocument();
});

test("renders Game and left click", () => {
  const handleLeftClick = jest.fn();
  const { getAllByRole } = render(
    <Cell role="button" {...DEFAULT_CELL} onClick={handleLeftClick}></Cell>
  );

  expect(getAllByRole("button")).toBeTruthy();
  fireEvent.click(getAllByRole("button")[0]);
  expect(handleLeftClick).toHaveBeenCalled();
});

test("renders Game and right click", () => {
  const handleRightClick = jest.fn();
  const { getAllByRole } = render(
    <Cell role="button" {...DEFAULT_CELL} onContextMenu={handleRightClick}></Cell>
  );

  expect(getAllByRole("button")).toBeTruthy();
  fireEvent.contextMenu(getAllByRole("button")[0]);
  expect(handleRightClick).toHaveBeenCalled();
});
