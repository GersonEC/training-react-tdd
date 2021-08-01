import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Joke } from "../components/Joke";
import { JokeConatiner } from "../containers/JokeContainer";
import * as axios from "axios";
import MockAxios from "axios-mock-adapter";

describe("Joke", () => {
  test("render a text from props", () => {
    const text = "some text";
    render(<Joke text={text} />);
    const textNode = screen.getByRole("heading", { name: text });
    expect(textNode).toHaveTextContent(text);
  });

  const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
  afterAll(() => mock.restore());
  mock.onGet().replyOnce(200, {
    value: {
      joke: "Really funny joke!",
    },
  });

  test("JokeGenerator component fetches a randome joke to renders it", async () => {
    //Arrange
    const noJokeMessage = "You haven't loaded any joke yet!";
    render(<JokeConatiner />);
    expect(screen.getByText(noJokeMessage)).toBeInTheDocument();

    //Act
    const buttonNode = screen.getByText("Load a random joke");
    userEvent.click(buttonNode);

    //Assert
    expect(screen.queryByText(noJokeMessage)).not.toBeInTheDocument();
    expect(screen.queryByText("Loading...")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );
    expect(screen.queryByTestId("joke-text")).toBeInTheDocument();
    expect(screen.queryByTestId("joke-text")).toHaveStyle(`color: green`);
  });
});
