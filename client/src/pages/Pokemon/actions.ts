import axios from "axios";
import { Pokemon } from "../../types/pokemon";

export const fetchPokemons = async () => {
  const response = await axios.get<Pokemon[]>(
    "https://trc5x.sse.codesandbox.io/pokemons"
  );
  const pokemons = response.data;
  return pokemons;
};
