interface JokeProps {
  text: string | null;
}

export function Joke(props: JokeProps) {
  return (
    <h3 data-testid="joke-text" style={{ color: "green" }}>
      {props.text}
    </h3>
  );
}
