import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US Test Cases", () => {
  test("Should load Contact US component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact US component", () => {
    render(<Contact />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("Should load Button inside Contact US component", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  });

  test("Should load Button inside Contact US component", () => {
    render(<Contact />);
    expect(screen.getAllByRole("textbox").length).toBe(2);
  });
});
