import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
