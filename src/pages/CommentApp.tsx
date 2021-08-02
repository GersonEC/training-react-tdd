import { CommentForm } from "../components/CommentForm";
import { CommentList } from "../components/CommentList";
import { mockComments } from "../utils/mockData";

export function CommentApp() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <CommentForm />
      <CommentList comments={mockComments} />
    </div>
  );
}
