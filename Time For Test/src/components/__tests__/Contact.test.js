import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe block is use to group test cases

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("beforeAll");
  // });

  // beforeEach(() => {
  //   console.log("beforeEach");
  // });

  // afterAll(() => {
  //   console.log("afterAll");
  // });

  // afterEach(() => {
  //   console.log("afterEach");
  // });

  test("Should Load Contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should Load button inside Contact Component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  // test can be write as it also
  it("Should Load Name Input inside Contact Component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  it("Should Load 2 input boxes inside Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes) // return react elements in a array
    expect(inputBoxes.length).toBe(2);
  });
});
