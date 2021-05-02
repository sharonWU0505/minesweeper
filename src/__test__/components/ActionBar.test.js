import { render, fireEvent } from "@testing-library/react";
import { ActionBar } from "../../components";

test("renders ActionBar without props buttons", () => {
  const { getByTestId } = render(<ActionBar />);
  expect(getByTestId("actionBar")).toBeInTheDocument();
});

test("renders ActionBar with props buttons", () => {
  const buttons = [{ text: "Restart", onClick: () => {} }];
  const { getAllByRole } = render(<ActionBar buttons={buttons} />);
  expect(getAllByRole("button").length).toEqual(buttons.length);
});

test("renders ActionBar with props buttons and clicks", () => {
  const mockOnClick = jest.fn();
  const buttons = [{ text: "Restart", onClick: mockOnClick }];
  const { getByRole } = render(<ActionBar buttons={buttons} />);

  fireEvent.click(getByRole("button"));
  expect(mockOnClick).toHaveBeenCalled();
});
