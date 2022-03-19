import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceNameWithSpaces } from "./App";

const CHECKBOX_ID = "my-checkbox";

test("Verify the color & state of the Medium Violet Red button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "change the color to Mednight blue" });
  expect(button).toHaveStyle({ backgroundColor: "Medium Violet Red" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "Mednight blue" });
  expect(button).toHaveTextContent("change the color to Medium Violet Red");
});

test("check if button is enabled when checkbox is unchecked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "change the color to Mednight blue" });
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByTestId(CHECKBOX_ID);
  expect(checkBox).not.toBeChecked();
});

test("check if button is disabled when checkbox is checked", () => {
  render(<App />);
  const checkbox = screen.getByTestId(CHECKBOX_ID);
  fireEvent.click(checkbox);

  const button = screen.getByRole("button", { name: "change the color to Mednight blue" });
  expect(button).toBeDisabled();
});

describe("Check for spaces in Pascal Case", () => {
  // expect(replaceNameWithSpaces("Red")).toBe("Red");
  // expect(replaceNameWithSpaces("MediumVioletPurple")).toBe("Medium Violet Purple");
});
