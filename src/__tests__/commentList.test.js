import { screen, render } from "@testing-library/react";
import { CommentList } from "../components/CommentList";
import { mockComments } from "../utils/mockData";

describe("Comment List", () => {
  test("it renders a list of comment cards with the comment and author", () => {
    render(<CommentList comments={mockComments} />);
    const firstCommentNode = screen.getByText(mockComments[0].comment);
    const firstAuthorNode = screen.getByText(`- ${mockComments[0].author}`);
    const secondCommentNode = screen.getByText(mockComments[1].comment);
    const secondAuthorNode = screen.getByText(`- ${mockComments[1].author}`);
    expect(firstCommentNode).toBeInTheDocument();
    expect(firstAuthorNode).toBeInTheDocument();
    expect(secondCommentNode).toBeInTheDocument();
    expect(secondAuthorNode).toBeInTheDocument();
  });
});
