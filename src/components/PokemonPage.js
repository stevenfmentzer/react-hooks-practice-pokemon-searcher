import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(setPokedex)},[])

  function gotcha(newPokemon){
    setPokedex([...pokedex, newPokemon])
  }

  function onFilter(filterList){
    const filteredPokedex = pokedex.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(filterList.toLowerCase())
  );
    setPokedex(filteredPokedex)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm gotcha={gotcha}/>
      <br />
      <Search filter={onFilter}/>
      <br />
      <PokemonCollection pokedex={pokedex} />
    </Container>
  );
}

export default PokemonPage;
