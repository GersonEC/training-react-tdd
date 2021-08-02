import { useState } from "react";

export function CommentForm() {
  const [state, setState] = useState({
    comment: "",
    author: "",
  });
  const { comment, author } = state;

  const handleOnChange = (e: any) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <form onSubmit={() => alert("ciao")}>
      <div>
        <textarea
          style={styles.commentBox}
          onChange={handleOnChange}
          placeholder="Write something..."
          name="comment"
          value={comment}
        />
      </div>
      <div>
        <label htmlFor="author" aria-labelledby="author">
          Your Name
        </label>
        <input
          onChange={handleOnChange}
          id="author"
          type="text"
          name="author"
          value={author}
        />
      </div>
      <button
        type="submit"
        style={styles.button}
        disabled={comment.trim() === "" && author.trim() === ""}
      >
        Add Comment
      </button>
    </form>
  );
}

const styles = {
  form: {
    margin: "auto",
    padding: "0px",
    width: "500px",
  },
  commentBox: {
    width: "494px",
    height: "80px",
    marginBottom: "12px",
  },
  inputField: {
    width: "360px",
    float: "right",
  },
  button: {
    marginTop: "12px",
    width: "500px",
    color: "#ffffff",
    backgroundColor: "#767676",
    padding: "6px",
    borderRadius: "8px",
  },
};
