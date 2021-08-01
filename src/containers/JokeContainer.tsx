import axios from "axios";
import { useState } from "react";
import { Joke } from "../components/Joke";

export function JokeConatiner() {
  const [state, setState] = useState({
    joke: null,
    loading: false,
  });
  const { joke, loading } = state;

  const loadJoke = async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    const {
      data: {
        value: { joke },
      },
    } = await axios.get("https://api.icndb.com/jokes/random");
    setState((prevState) => ({
      ...prevState,
      loading: false,
      joke,
    }));
  };
  return (
    <div>
      <button type="button" onClick={loadJoke}>
        Load a random joke
      </button>
      {!joke && !loading && <h3>You haven't loaded any joke yet!</h3>}
      {loading && <h3>Loading...</h3>}
      {joke && !loading && <Joke text={joke} />}
    </div>
  );
}
