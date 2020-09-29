import "@testing-library/jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

// Functionality
// Renders & unmounts correctly
it("renders whithout crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Style test
// Rendered regarding the X properties
it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click Me!" />);
  expect(getByTestId("button")).toHaveTextContent("Click Me!");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click!" />);
  expect(getByTestId("button")).toHaveTextContent("Click!");
});

// Snapshots
// First run
// Create a snapshot file & put the element into it as JSON
// Why? - Pushing to version control, your testing will handle snapshots as well.
// More runs
// Compare snapshots to previous snapshots in the snapshot file.
// Decide if the change within the React element was intentionally and necessary.

it("matches snapshot 1", () => {
  const tree = renderer.create(<Button label="Click!" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="Click Me!" />).toJSON();
  expect(tree).toMatchSnapshot();
});
