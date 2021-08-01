import { screen, render } from "@testing-library/react";
import { Joke } from "../components/Joke";

describe("Joke", () => {
  test("render a text from props", () => {
    const text = "some text";
    render(<Joke text={text} />);
    const textNode = screen.getByRole("heading", { name: text });
    expect(textNode).toHaveTextContent(text);
  });
});
