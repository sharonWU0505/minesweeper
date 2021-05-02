import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  render(<App />);
  const appHeader = screen.getByText("Minesweeper");
  expect(appHeader).toBeInTheDocument();
});
