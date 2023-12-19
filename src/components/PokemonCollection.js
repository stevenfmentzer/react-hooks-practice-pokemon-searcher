import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokedex} ) {

  const pokemonDisplay = pokedex.map((pokemon) => {
    return(
      <PokemonCard key={pokemon.id} pokemon={pokemon} /> 
      )
  })

  console.log("POKEMON DISPLAY", pokemonDisplay)

  return (
    <>
    <h1>Hello From Pokemon Collection</h1>
    <Card.Group itemsPerRow={6}>{pokemonDisplay}</Card.Group>
    </>
  );
}

export default PokemonCollection;
