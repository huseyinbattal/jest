import { render, screen } from "@testing-library/react";
import Button from "./components/Button";

test("Button in Document", () => {
  render(<Button id="btn" />);
  const element = screen.getByTestId("btn");
  expect(element).toBeInTheDocument();
});

test("Button have Text", () => {
  render(<Button id="btn" text={"hi"} />);
  const element = screen.getByTestId("btn");
  expect(element).toHaveTextContent("hi");
});

test("Button have Class", () => {
  render(<Button id="btn" className="customBtn" />);
  const element = screen.getByTestId("btn");
  expect(element).toHaveClass("customBtn");
});
