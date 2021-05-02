import { render, fireEvent, screen } from "@testing-library/react";
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

test("renders Cell with props", () => {
  const { getByTestId } = render(<Cell {...DEFAULT_CELL} />);
  expect(getByTestId("cell")).toBeInTheDocument();
});

test("renders Cell and trigger onClick", () => {
  const mockOnClick = jest.fn();
  const { getByTestId } = render(<Cell {...{ ...DEFAULT_CELL, onClick: mockOnClick }} />);

  fireEvent.click(getByTestId("cell"));
  expect(mockOnClick).toHaveBeenCalled();
});

test("renders Cell and trigger onContextMenu", () => {
  const mockOnContextMenu = jest.fn();
  const { getByTestId } = render(
    <Cell {...{ ...DEFAULT_CELL, onContextMenu: mockOnContextMenu }} />
  );

  fireEvent.contextMenu(getByTestId("cell"));
  expect(mockOnContextMenu).toHaveBeenCalled();
});

test("renders Cell and isFlagged changes", () => {
  const { rerender } = render(<Cell {...DEFAULT_CELL} />);
  expect(screen.getByTestId("cell-hidden-value")).toBeInTheDocument();

  // re-render the same component with isFlagged: true
  rerender(<Cell {...{ ...DEFAULT_CELL, isFlagged: true }} />);
  expect(screen.getByTestId("cell-flag")).toBeInTheDocument();
});

test("renders Cell and isRevealed changes", () => {
  const { rerender } = render(<Cell {...DEFAULT_CELL} />);
  expect(screen.getByTestId("cell-hidden-value")).toBeInTheDocument();

  // re-render the same component with isRevealed: true
  rerender(<Cell {...{ ...DEFAULT_CELL, isRevealed: true }} />);
  expect(screen.getByTestId("cell-value")).toBeInTheDocument();
});

test("renders Cell and gameEnded changes", () => {
  const { rerender } = render(<Cell {...DEFAULT_CELL} />);
  expect(screen.getByTestId("cell-hidden-value")).toBeInTheDocument();

  // re-render the same component with gameEnded: true
  rerender(<Cell {...{ ...DEFAULT_CELL, gameEnded: true }} />);
  expect(screen.getByTestId("cell-solution")).toBeInTheDocument();
});

test("renders Cell and gameEnded and isMine changes", () => {
  const { rerender } = render(<Cell {...DEFAULT_CELL} />);
  expect(screen.getByTestId("cell-hidden-value")).toBeInTheDocument();

  // re-render the same component with gameEnded: true
  rerender(<Cell {...{ ...DEFAULT_CELL, gameEnded: true, isMine: true }} />);
  expect(screen.getByTestId("cell-mine")).toBeInTheDocument();
});
