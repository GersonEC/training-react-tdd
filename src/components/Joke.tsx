interface JokeProps {
  text: string;
}

export function Joke(props: JokeProps) {
  return <h3 data-testid="joke-text">{props.text}</h3>;
}
