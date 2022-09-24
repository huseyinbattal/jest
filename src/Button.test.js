import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./components/Button";

const clickMock = jest.fn(() => {
  console.log("Button Clicked...");
});

test("Button in Document", () => {
  render(<Button id="btn" />);
  const element = screen.getByTestId("btn");
  expect(element).toBeInTheDocument();
});

test("Button have Text", () => {
  render(<Button id="btn" text="hi" />);
  const element = screen.getByTestId("btn");
  expect(element).toHaveTextContent("hi");
});

test("Button have Class", () => {
  render(<Button id="btn" className="customBtn" />);
  const element = screen.getByTestId("btn");
  expect(element).toHaveClass("customBtn");
});

test("Button have Style", () => {
  render(
    <Button id="btn" className="customBtn" style={{ backgroundColor: "red" }} />
  );
  const element = screen.getByTestId("btn");
  expect(element).toHaveStyle("background-color:red");
});

test("Button Click Test", () => {
  render(
    <Button
      id="btn"
      className="customBtn"
      style={{ backgroundColor: "red" }}
      onClick={clickMock}
    />
  );
  const element = screen.getByTestId("btn");
  fireEvent.click(element);
  expect(clickMock).toHaveBeenCalledTimes(1);
});
