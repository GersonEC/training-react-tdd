import { screen, render } from "@testing-library/react";
import { CommentCard } from "../components/CommentCard";

describe("Comment Card", () => {
  test("it renders the comment and the author", () => {
    //Arrange
    const props = {
      comment: "some comment here",
      author: "Gerson EC",
    };
    render(<CommentCard comment={props.comment} author={props.author} />);
    //Act

    //Assert
    expect(
      screen.getByRole("heading", { name: props.comment })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: `- ${props.author}` })
    ).toBeInTheDocument();
  });
});
