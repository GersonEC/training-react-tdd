import { Comment } from "../utils/models";
import { CommentCard } from "./CommentCard";

interface CommentListProps {
  comments: Comment[];
}

export function CommentList(props: CommentListProps) {
  return (
    <div>
      {props.comments.map((item) => (
        <CommentCard
          key={item.id}
          comment={item.comment}
          author={item.author}
        />
      ))}
    </div>
  );
}
