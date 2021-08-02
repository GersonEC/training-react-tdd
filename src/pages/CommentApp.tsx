import { CommentForm } from "../components/CommentForm";
import { CommentList } from "../components/CommentList";
import { fakeComments } from "../utils/stubs";

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
      <CommentList comments={fakeComments} />
    </div>
  );
}
