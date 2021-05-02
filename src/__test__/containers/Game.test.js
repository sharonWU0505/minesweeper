import { render, fireEvent } from "@testing-library/react";
import Game from "../../containers/Game";

test("renders Game", () => {
  const { getByTestId } = render(<Game />);
  expect(getByTestId("game")).toBeInTheDocument();
});

// TODO: test event handlers
