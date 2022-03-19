import { render, screen, waitForElementToBeRemoved, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Initial Conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  expect(checkbox).not.toBeChecked();
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Enable button on first click & disable on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeEnabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  const popoverNull = screen.queryByText(/no ice-cream will be delivered/i);
  expect(popoverNull).not.toBeInTheDocument();

  const termsAndConditionsText = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditionsText);
  const popover = screen.getByText(/no ice-cream will be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termsAndConditionsText);
  await waitForElementToBeRemoved(() => screen.queryByText(/no ice-cream will be delivered/i));
});
