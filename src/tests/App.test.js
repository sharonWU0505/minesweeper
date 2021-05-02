import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders minesweeper", () => {
  render(<App />);
  const appHeader = screen.getByText("Minesweeper");
  expect(appHeader).toBeInTheDocument();
});
