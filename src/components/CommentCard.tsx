interface CommentCardProps {
  comment: string;
  author: string;
}

export function CommentCard(props: CommentCardProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "2rem",
        padding: "0 1rem 0 1rem",
        backgroundColor: "gainsboro",
      }}
    >
      <h3>{props.comment}</h3>
      <h4>- {props.author}</h4>
    </div>
  );
}
