import { screen, render } from "@testing-library/react";
import { CommentList } from "../components/CommentList";
import { fakeComments } from "../utils/stubs";

describe("Comment List", () => {
  test("it renders a list of comment cards with the comment and author", () => {
    render(<CommentList comments={fakeComments} />);
    const firstCommentNode = screen.getByText(fakeComments[0].comment);
    const firstAuthorNode = screen.getByText(`- ${fakeComments[0].author}`);
    const secondCommentNode = screen.getByText(fakeComments[1].comment);
    const secondAuthorNode = screen.getByText(`- ${fakeComments[1].author}`);
    expect(firstCommentNode).toBeInTheDocument();
    expect(firstAuthorNode).toBeInTheDocument();
    expect(secondCommentNode).toBeInTheDocument();
    expect(secondAuthorNode).toBeInTheDocument();
  });
});
