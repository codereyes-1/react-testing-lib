import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

test("should render non-completed to do component", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("should render completed to do component", () => {
  const todo = { id: 2, title: "label packages", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("label packages");
  expect(todoElement).toContainHTML("</strike>");
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
  console.log(tree);
});
