import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommentForm } from "../components/CommentForm";

describe("Comment Form", () => {
  test("it has disabled button until both comment box and name field have a value ", () => {
    render(<CommentForm />);
    const comment = "Never put off until tomorrow what can be done today.";
    const author = "Sensei Wu";

    const submitButton = screen.getByText("Add Comment");
    expect(submitButton.disabled).toEqual(true);

    const commentTextfieldNode =
      screen.getByPlaceholderText("Write something...");
    userEvent.type(commentTextfieldNode, comment);
    //fireEvent.change(commentTextfieldNode, { target: { value: comment } });
    expect(submitButton.disabled).toEqual(true);
    const nameFieldNode = screen.getByLabelText("Your Name");
    userEvent.type(nameFieldNode, author);
    //fireEvent.change(nameFieldNode, { target: { value: author } });
    expect(submitButton.disabled).toEqual(false);
  });
});
